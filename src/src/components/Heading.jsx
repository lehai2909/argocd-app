import "./Heading.css"

function Heading() {
  function handleClick(props) {
    alert(
      "Please Sign-up first. Click the user icon in the right up corner to sign-up. If you already signed-up, use Test button below to login and see cute pets ^^"
    );
  }
  return (
    <div id="title" className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="https://lehai2909.github.io">
          Welcome to Hai's SPA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="https://lehai2909.github.io">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://lehai2909.github.io">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://lehai2909.github.io">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="row">
        <div className="col-lg-6">
          <h1>Explore cute pets around you...</h1>
          <button
            type="button"
            className="btn btn-dark btn-lg download-button"
            onClick={handleClick}
          >
            I want to see cat
          </button>
          <button
            type="button"
            className="btn btn-dark btn-lg download-button"
            onClick={handleClick}
          >
            I want to see dog
          </button>
        </div>
        <div className="col-lg-6 title-image-div">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="250"
            height="250"
            fill="currentColor"
            className="bi bi-box-seam title-image"
            viewBox="0 0 16 16"
          >
            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
export default Heading;

