import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

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
