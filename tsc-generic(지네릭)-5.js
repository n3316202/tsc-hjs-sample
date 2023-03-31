// Generic이란 데이터의 타입을 일반화한다(generalize)한다는 것을 뜻한다.
// Generic은 자료형을 정하지 않고 여러 타입을 사용할 수 있게 해준다.
// 즉, 선언 시점이 아니라 생성 시점에 타입을 명시하여 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법이다. 한번의 선언으로 다양한 타입에 '재사용'이 가능하다는 장점이 있다.
// number 타입의 매개변수를 return하는 함수
function NumberReturnFunc(arg) {
    return arg;
}
// string 타입의 매개변수를 return하는 함수
function StringReturnFunc(arg) {
    return arg;
}
// boolean 타입의 매개변수를 return하는 함수
function BooleanReturnFunc(arg) {
    return arg;
}
function GenericReturnFunc(arg) {
    return arg;
}
//http://typescriptstudy.com/ts/article/17-%EC%A0%9C%EB%84%A4%EB%A6%AD-Generics
function displayNumbers(data) {
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var elem = data_1[_i];
        console.log(elem);
    }
}
function displayStrings(data) {
    for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
        var elem = data_2[_i];
        console.log(elem);
    }
}
function displayBooleans(data) {
    for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
        var elem = data_3[_i];
        console.log(elem);
    }
}
function display(data) {
    console.log(data.length);
    for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
        var elem = data_4[_i];
        console.log(elem);
    }
}
display([1, 2, 3]);
display(["Tom", "Tim", "Matt"]);
display([true, false]);
// 타입체킹 오류:
// Type 'string' is not assignable to type 'number'
display([1, 2, 3]);
