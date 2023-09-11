// Make a new Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('>>> Success! <<<');
    resolve('>>> Success! <<<');
    resolve('>>> Success! <<<');
    // reject("--- Oops ---");
    // reject("--- Oops ---");
    // reject("--- Oops ---");
  }, 2000);
});

p.then((message) => {
  console.log('Promise resolved! 😀');
  console.log(message);
}).catch((err) => {
  console.log('Promise rejected! 😞');
  console.log(err);
});

// **Problems to solve**

// **1)** What happens when a promise is rejected? Test it by calling `reject()`

// Promise rejected! 😞
// --- Oops-- -

// **2)** What happens when you call both `resolve` and `reject`? Test this.

// the promise was rejected

// **3)** Does the order matter you call resolve and reject matter? Test this. 

// yes, whichever is called first will determine if it's rejected or resolved

// **4)** What happens if you call `resolve` or `reject` more than once? Test this out for yourself.

// even if it is called more than once, it will still only run one