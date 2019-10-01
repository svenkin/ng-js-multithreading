/// <reference lib="webworker" />

addEventListener('message', ({data}) => {
  if (data === 5) {
    setTimeout(() => {
      throw 'Error in web worker';
    }, 4000)
  }
  setTimeout(() => {
    console.log('Web Worker: ', data);
    postMessage(data);
  }, 2000)
});
