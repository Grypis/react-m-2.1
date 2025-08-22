// import { useState } from "react";
// import { ClickCounter } from "./ClickCounter";

// import { useEffect, useState } from "react";

/* const CustomButton = ({ message, children }) => {
  return <button onClick={() => alert(message)}>{children}</button>;
}; */

// const App = () => {
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

/*  const ClickCounter = () => {
    return <button onClick={handleClick}>Current: {clicks}</button>;
  };

  const App = () => {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
      setClicks(clicks + 1);
    };
  };

  return (
    <>
      <ClickCounter />
      <ClickCounter />
    </>
  );
}; */

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

/* const ClickCounter = ({ value, onUpdate }) => {
  return <button onClick={onUpdate}>Current: {value}</button>;
};

const App = () => {
  const [clicks, setClicks] = useState({
    X: 0,
    y: 0,
  });

  const updateX = () => {
    setValues({
      ...value,
      x: values.x + 1,
    });
  };

  const updateY = () => {};

  return (
    <div>
      <p>
        x: {values.x}, y: {values.y}
      </p>

      <button onClick={updateX}>Update x</button>
      <button onClick={updateY}>Update y</button>
    </div>
  );
}; */

/* const App = () => {
  const [values, setValues] = useState({
    x: 0,
    y: 0,
  });

  const updateX = () => {
    setValues({
      ...values,
      x: values.x + 1,
    });
  };

  const updateY = () => {
    setValues({
      ...values,
      y: values.y + 1,
    });
  };

  return (
    <div>
      <p>
        x: {values.x}, y: {values.y}
      </p>

      <button onClick={updateX}>Update x</button>
      <button onClick={updateY}>Update y</button>
    </div>
  );
}; */

/* import { useState, useEffect } from "react";

const App = () => {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    console.log("You can see my only once");
  }, []);

  return (
    <button onClick={() => setClicks(clicks + 1)}>
      You clicked {clicks} times
    </button>
  );
}; */

/* import { Modal } from "./Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen && <Modal />}
    </div>
  );
}; */

/* import { useState, useEffect } from "react";

const App = () => {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    console.log("You can see me only once!");
  }, []);

  useEffect(() => {
    console.log("Clicks updated: ", clicks);
  }, [clicks]);

  useEffect(() => {
    document.title = `You clicked ${clicks} times`;
  });

  return (
    <button onClick={() => setClicks(clicks + 1)}>
      You clicked {clicks} times
    </button>
  );
}; */

import { useEffect, useState } from "react";

const App = () => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    console.log("First update: ", first);
  }, [first]);

  useEffect(() => {
    console.log("Second update: ", second);
  }, [second]);

  useEffect(() => {
    console.log("First or second updated: ", first + second);
  }, [first, second]);

  return (
    <>
      <button onClick={() => setFirst(first + 1)}>First: {first}</button>
      <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
    </>
  );
};

export default App;
