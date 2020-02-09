var name = "nicolas";
//협업을 하는 경우 변수명이 공교롭게도 겹쳐 버리면 변수명이 예상치 못하게 변할 수 있음.
//하지만 ES6부터는 절대로 var로 변수를 선언하는 것을 권장하지 않는다.
name = "hello";

const hello = "안녕하세요";
// hello = "halo~"; //const로 선언하면 선언한 변수의 값이 변하지 않는다.

const person = {
  no: 1,
  name: "홍길동"
};

person.name = "김길동";
//하지만 const로 객체를 선언한 경우 객체 내의 key에 대응하는 값은 변할 수 있다.(항상 const가 안전한 것은 아님)

let nico = "las";
nico = "lalalala";
//예전에는 var를 사용했다면 ES6부터는 var 대신 let을 사용하기도 한다.
//하지만 보통 const로 선언하는 것을 권장.
//변수의 값을 변경해야 할 경우에 한해서만 let을 사용하는 것을 권장한다.
