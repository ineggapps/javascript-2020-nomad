const p1 = new Promise((resolve, reject) => {
  //   setTimeout(resolve, 1000, "first");
  setTimeout(reject, 1000, "Error...");
});

p1.then((value) => console.log(value))
  .catch((e) => console.log(`${e}✂`))
  .finally(() => {
    console.log("I'm done");
  });
