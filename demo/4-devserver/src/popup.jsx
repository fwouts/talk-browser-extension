import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { chrome } from "./chrome";

if (process.env.NODE_ENV === "development") {
  // Are we in development mode? Simulate the background script.
  import("./background").then(console.log("Background script running"));
}

const App = () => {
  const [state, setState] = useState({
    greeting: "Hello, World!"
  });
  useEffect(() => {
    const listener = message => setState(message);
    chrome.runtime.onMessage.addListener(listener);
    return () => chrome.runtime.onMessage.removeListener(listener);
  }, []);
  return <div>{state.greeting}</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
