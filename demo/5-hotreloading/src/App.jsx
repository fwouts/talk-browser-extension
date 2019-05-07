import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import { chrome } from "./chrome";

const App = () => {
  const [state, setState] = useState({
    greeting: "Hello, World!"
  });
  useEffect(() => {
    const listener = message => setState(message);
    chrome.runtime.onMessage.addListener(listener);
    return () => chrome.runtime.onMessage.removeListener(listener);
  }, []);
  return <h1>{state.greeting}</h1>;
};
export default hot(App);
