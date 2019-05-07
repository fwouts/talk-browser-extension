let fakeChrome;

export const chrome = getChromeApi();

function getChromeApi() {
  if (process.env.NODE_ENV === "development" || !global.chrome) {
    fakeChrome = fakeChrome || buildFakeChrome();
    return fakeChrome;
  } else {
    return global.chrome;
  }
}

function buildFakeChrome() {
  const listeners = [];
  return {
    runtime: {
      onMessage: {
        addListener(listener) {
          listeners.push(listener);
        },
        removeListener(listener) {
          listeners = listeners.filter(l => l !== listener);
        }
      },
      sendMessage(message) {
        for (const listener of listeners) {
          listener(message);
        }
      }
    }
  };
}
