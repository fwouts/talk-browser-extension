import randomName from "node-random-name";
import { chrome } from "./chrome";

setInterval(() => {
  chrome.runtime.sendMessage({
    greeting: `Hello ${randomName()}`
  });
}, 1000);
