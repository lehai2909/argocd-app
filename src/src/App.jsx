import {useState} from "react";
import Heading from "./components/Heading.jsx";
import Items from "./components/Items.jsx";
import Subscribe from "./components/Subscribe.jsx";
import SignIn from "./components/SignIn.jsx";
import "./index.css";
function App() { 
  //state to assure only authenticated user can see content 12345677
  const a = 5;
  const [visible, setVisible] = useState(false);
  console.log("Printing env var:", import.meta.env.VITE_BACKEND_URL_PROD);
  console.log("Printing import.meta.env.PROD env var:", import.meta.env.PROD);
  console.log("Printing import.meta.env.MODE env var:", import.meta.env.MODE);
  return (
    <>
      <SignIn
        visible={visible}
        onSignIn={() => {
          setVisible(true);
        }}
        onSignOut={() => {
          setVisible(false);
        }}
      />
      <Heading />
      <Subscribe
        onSignIn={() => {
          setVisible(true);
        }}
      />
      <Items visible={visible} />
    </>
  );
}

export default App;
