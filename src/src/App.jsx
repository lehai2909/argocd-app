import {useState} from "react";
import Heading from "./components/Heading.jsx";
import Items from "./components/Items.jsx";
import Subscribe from "./components/Subscribe.jsx";
import SignIn from "./components/SignIn.jsx";
import "./index.css";
function App() {
  //state to assure only authenticated user can see content
  const [visible, setVisible] = useState(false);
  console.log("Printing env var:", import.meta.env.BACKEND_URL);
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
