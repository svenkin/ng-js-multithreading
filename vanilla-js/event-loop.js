console.log('Start');
function call() {
    console.log('Hi there!');
    setTimeout(()=> {
        console.log('Hello timeout');
    })
}

call();
console.log('End');
