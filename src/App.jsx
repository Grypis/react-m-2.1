import { useState } from "react";
import { ClickCounter } from "./ClickCounter";

/* const CustomButton = ({ message, children }) => {
  return <button onClick={() => alert(message)}>{children}</button>;
}; */

const App = () => {
  /*  const handleClick = () => {
    alert("I`m a button!");
  };
  return <button onClick={handleClick}>Click me!</button>; */
  /* return <button onClick={() => alert("I'm a button!")}>Click me!</button>; */

  /* const handleClick = (evt) => {
    console.log(evt);
  };
  return (
    <>
      <button onClick={handleClick}>First button</button>
      <button onClick={(evt) => console.log(evt)}>Second button</button>
    </>
  ); */

  /* return (
    <>
      <CustomButton message="Playing music!">Playing music!</CustomButton>
      <CustomButton message="Uploading your data!">Upload data</CustomButton>
    </>
  ); */

  /* // let clicks = 0;
  const [clicks, setClicks] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    // clicks = clicks + 1;
    setClicks(clicks + 1);
  };
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button onClick={handleClick}>Current: {clicks}</button>
      <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
      {isOpen && <p>Now you can see me!</p>}
    </>
  ); */
  return (
    <>
      <ClickCounter />
      <ClickCounter />
    </>
  );
};

/* function App() {
  const handleClick = (evt) => {
    console.log(evt);
  };

  return (
    <>
      <button onClick={handleClick}>First button</button>
      <button onClick={(evt) => console.log(evt)}>Second button</button>
    </>
  );
} */

export default App;
