//변수를 선언할 때, 변수 값의 타입을 명시함으로써 변수 값의 데이터 타입을 지정
let str: string = "Im String";

//타입 명시 예시2
//app.ts리턴 타입 명시( :object ) - 원하는 타입으로 명시해주면 된다. (number, string, boolean, void, ....)리턴 타입을 명시해주었으면 반드시 return을 써주어야 한다.
//void : 아무것도 반환하지 않는다는 의미
// function getStudentDetails(studentID: number): object {
//   return null;
// }

// function getStudentDetails(studentID: number): {
//   studentID: number;
//   studentName: string;
//   age: number;
//   gender: string;
//   subject: string;
//   createDate: Date;
// } {
//   return null;
// }

let studentID: number = 12345;
//let studentID:number = 'hello'; // 에러
let studentName: string = "Jenny Kim";
let age: number = 21;
let gender: string = "female";
let subject: string = "Javascript";
let courseCompleted: boolean = false;

function getStudentDetails(studentID: number): object {
  return null as any;
}
