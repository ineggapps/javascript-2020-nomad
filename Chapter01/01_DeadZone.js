console.log(myName1);
var myName1 = "nico";
//결과: undefined
/*
자바스크립트는 보통 top to bottom으로 실행되지만, 항상 그런 것은 아니다.
스크립트를 실행하기 전에 호이스팅(hoisting)이라는 것을 진행하는데,
선언한 변수명 등을 미리 어딘가로 옮겨주는 역할을 수행한다. 

호이스팅(hoisting)의 정확한 뜻풀이
hosting: 끌어올리다

함수 내에 선언된 변수들을 모아서 어딘가로 끌어 올려 해당 함수 유효 범위의 최상단에 선언하는 것을 말한다.
참조: https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html

호이스팅된 위의 코드의 상태는 다음과 같다.
*/
var myName1;
console.log(myName1);
myName1 = "nico";

//////////////////// 하지만 의도하지 않은 코드이므로 위의 경우에는 호이스팅이 될 게 아니라 변수가 선언되지 않았다는 오류를 뿜어주는 것이 더 바람직하다.

console.log(myName2);
//결과: Uncaught ReferenceError: myName2 is not defined

/////////////////////
console.log(myName3);
let myName3;
//Uncaught ReferenceError: Cannot access 'myName3' before initialization
