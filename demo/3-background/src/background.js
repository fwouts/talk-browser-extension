import randomName from "node-random-name";

setInterval(() => {
  chrome.runtime.sendMessage({
    greeting: `Hello ${randomName()}`
  });
}, 1000);
