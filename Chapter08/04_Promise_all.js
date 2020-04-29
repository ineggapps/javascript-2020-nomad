const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "first");
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "second");
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "third");
});

const p4 = new Promise((resolve, reject) => {
  setTimeout(reject, 2000, "NOPE");
});

const p5 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "Fifth");
});

const motherPromise = Promise.all([p1, p2, p3, p4, p5]);

//언제 끝나는지에 관계없이 명시한 배열의 순섯값에 따라 결괏값을 배열로 얻을 수 있음.
//모든 작업이 끝나는 순간 결괏값이 동시에 배열 구조로 반환된다.
motherPromise.then((values) => console.log(values)).catch((err) => console.log(err));
//(3) ["first", "second", "third"]
