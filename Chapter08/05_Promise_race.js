const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "first");
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, "I hate js");
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Third");
});

//p1, p2, p3 중 가장 빠르게 처리된 요소가 결괏값을 정한다.
const motherPromise = Promise.race([p1, p2, p3]);

motherPromise.then((values) => console.log(values)).catch((err) => console.log(err));
