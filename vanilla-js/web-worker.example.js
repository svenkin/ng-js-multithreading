for (let i = 0; i < 10; i++) {
    const worker = new Worker('web-worker.js', {name: 'Web Worker: ' + i});
    worker.postMessage(i);
    worker.addEventListener('message', ({data}) => {
        console.log('Got message from worker: ', data)
    });
    worker.onerror = () => {
        console.error('An error occurred in Web Worker: ' + i);
        worker.terminate();
    }
}
