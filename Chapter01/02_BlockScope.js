const a = "hello";
if (true) {
  a = "hello, world";
  var b = "hi";
  const c = "dd";
  const d = "ee";
}

console.log(a);
console.log(b); //hi
console.log(c); //error
console.log(d); //error

/*
const와 let의 경우에는 블록{} 안에 선언한 c와 d가 블록을 벗어날 경우 선언되지 않았다고 오류메시지를 발생시킨다.
하지만 var의 경우에는 블록의 위치와 관계없이 hi가 출력이 되어 버린다.
확실하게 블록 스코프를 설정한 let과 const변수를  애용하도록 하자.
*/
