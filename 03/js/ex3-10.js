/* 변수: 두번 이상 사용할 값을 저장하는 그릇 */
/* 변수 문법 : 선언할수 있는 키워드 + 식별자 */
/* 키워드 종류 : let, const , var */
//let
let a; //선언
a = 10; // 재할당
console.log(a + a + a + a + a);
a = "10";
console.log(a + a + a + a + a);
// let a = "aaa";
//const
const b = 20; // 값의 재할당 불가
console.log(a + b);

// b = 20;
//var //옛날꺼 안씀
var c = 30;
var d;
d = 50;
var c = c + d;
console.log(c+d);

