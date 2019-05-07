import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

if (process.env.NODE_ENV === "development") {
  // Are we in development mode? Simulate the background script.
  import("./background").then(console.log("Background script running"));
}

ReactDOM.render(<App />, document.getElementById("root"));
