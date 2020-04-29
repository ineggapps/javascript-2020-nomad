const hello = new Promise((resolve, reject) => {
  resolve(2);
});

hello
  .then((number) => {
    console.log(number * 2);
    return number * 2;
  })
  .then((otherNumber) => {
    console.log(otherNumber * 2);
  });

////////////////////////

const good = new Promise((resolve, reject) => {
  resolve(2);
});

const timesTwo = (number) => number * 2;

good
  .then(timesTwo)
  .then(timesTwo)
  .then(timesTwo)
  .then(timesTwo)
  .then(timesTwo)
  .then(timesTwo)
  .then(timesTwo)
  .then(timesTwo)
  .then(() => {
    throw Error("Something is wrong...");
  })
  .then((lastNumber) => console.log(lastNumber))
  //한 번만 catch하여도 모든 오류를 잡아줄 것이다.
  .catch((error) => console.log(error));
