const hello = new Promise((resolve, reject) => {
  const ms = Math.random() * 3000 + 1000;
  setTimeout(console.log, ms, `Nice to meet you (${ms})`);
});

hello.then((value) => console.log(value));

//-----

const bye = new Promise((resolve, reject) => {
  resolve("Ok. Bye~");
});

const thenFn = (value) => console.log(value);

bye.then(thenFn);

//----------

const iloveyou = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, "Sorry...");
});

//오류는 catch메서드로 잡을 수 있음
iloveyou.then((result) => console.log(result)).catch((value) => console.log(value));
