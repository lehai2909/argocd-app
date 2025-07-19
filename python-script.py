import os
import requests
import smtplib
from email.mime.text import MIMEText

headers = {
    'Authorization': f'token {os.environ["GH_TOKEN"]}',
    'Accept': 'application/vnd.github+json'
}

def get_repos(org):
    repos = []
    page = 1
    while True:
        r = requests.get(f'https://api.github.com/orgs/{org}/repos?per_page=100&page={page}', headers=headers)
        if r.status_code != 200 or not r.json():
            break
        repos.extend(r.json())
        page += 1
    return [repo['name'] for repo in repos]

def get_pull_requests(org, repo):
    r = requests.get(f'https://api.github.com/repos/{org}/{repo}/pulls?state=open', headers=headers)
    return r.json() if r.status_code == 200 else []

def has_copilot_comments(org, repo, pr_number):
    comments_url = f'https://api.github.com/repos/{org}/{repo}/issues/{pr_number}/comments'
    r = requests.get(comments_url, headers=headers)
    if r.status_code != 200:
        return False
    return any('lgtm' in comment['body'].lower() for comment in r.json())

def list_comments_by_copilot(org, repo, pr_number):
    list_comments = ''
    comments_url = f'https://api.github.com/repos/{org}/{repo}/issues/{pr_number}/comments'
    r = requests.get(comments_url, headers=headers)
    for comment in r.json():
        if comment['user']['login'] == 'lehai2909':
            list_comments += '-- Comment by ' + comment['user']['login'] + ': ' + comment['body'] + '\n\n'
    return list_comments 

org = os.environ['ORG_NAME']
repos = get_repos(org)
print(repos)
matching_prs = []
body = ''
summary_table = """
<h2>Open PRs per Repository</h2>
<table border="1" cellpadding="4" cellspacing="0">
  <tr>
    <th>Repo</th>
    <th>Open PRs</th>
  </tr>
"""
repo_pr_counts = {}

for repo in repos:
    prs = get_pull_requests(org, repo)
    repo_pr_counts[repo] = len(prs)

for repo, count in repo_pr_counts.items():
    summary_table += f"<tr><td>{repo}</td><td>{count}</td></tr>"
summary_table += "</table><br>"

body = summary_table  # Prepend HTML table to email body

for repo in repos:
    prs = get_pull_requests(org, repo)
    if not len(prs):
        continue
    for pr in prs:
        body += f'<b>Repository:</b> {repo}<br>'
        body += '<b>List of Pull Requests with lehai2909 Comments:</b><br>'
        body += f'- PR #{pr["number"]}: {pr["title"]} (<a href="{pr["html_url"]}">{pr["html_url"]}</a>)<br>'
        comments = list_comments_by_copilot(org, repo, pr["number"])
        body += comments.replace('\n', '<br>') if comments else 'No comments of lehai2909 found.<br>'
    body += '<hr>'

print('Email body:')          
print(body)

msg = MIMEText(body, "html")  # Use HTML MIME type
msg['Subject'] = f'GitHub Copilot PRs Report ({org})'
msg['From'] = os.environ['GMAIL_USER']
msg['To'] = 'aws2lehai@gmail.com'  # or use dynamic address

with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
    server.login(os.environ['GMAIL_USER'], os.environ['GMAIL_PASS'])
    server.sendmail(msg['From'], [msg['To']], msg.as_string())