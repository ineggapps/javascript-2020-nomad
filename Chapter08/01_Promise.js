const hello = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Nice to meet you!");
  }, 3000);
});

console.log(hello);

// setInterval(() => {
//   console.log(hello);
// }, 1000);

setInterval(console.log, 1000, hello);
