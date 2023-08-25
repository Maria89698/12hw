// 1
function delayedPromise(value, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value)
        }, delay)
    })
};

const promises = [
    delayedPromise('hello1', 1500),
    delayedPromise('hello2', 2000),
    delayedPromise('hello3', 2500),
    delayedPromise('hello4', 3000),
    delayedPromise('hello5', 3500)
];

Promise.all(promises).then((result) => {
    console.log(result);
});


// function delayedPromise(value, delay) {
//     return setTimeout(() => {
//         return Promise.resolve(value)
//     }, delay)
// };

// 2
function randomDelay(value, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value)
        }, delay)
    })
};

const promises2 = [
    randomDelay(1, 3000),
    randomDelay(2, 4000),
    randomDelay(3, 5000),
    randomDelay(4, 6000),
    randomDelay(5, 7000),
];

Promise.race(promises2).then((result2) => {
    console.log(result2);
})