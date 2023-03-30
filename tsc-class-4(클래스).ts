//인터페이스 (Interface)
//실제 구현이 들어있지 않고 상호 간에 정의한 조건이나 규약을 의미

// TS
//https://heecheolman.tistory.com/64
// function createKeyboard(orderSheet: { ingredient: string; keyCount: number }) {
//   console.log(`키보드 만드는중...`);
// }

// let orderSheet = {
//   ingredient: "plastic",
//   keyCount: 40,
// };
// createKeyboard(orderSheet);

// TS
interface OrderSheet {
  ingredient: string;
  keyCount: number;
}
function createKeyboard(orderSheet: OrderSheet) {
  console.log(`키보드 만드는중...`);
}
