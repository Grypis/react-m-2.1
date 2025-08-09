const CustomButton = ({ message, children }) => {
  return <button onClick={() => alert(message)}>{children}</button>;
};

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

  return (
    <>
      <CustomButton message="Playing music!">Playing music!</CustomButton>
      <CustomButton message="Uploading your data!">Upload data</CustomButton>
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
