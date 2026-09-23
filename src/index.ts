export = {};

console.log('Hello, World!');

let age: number = 23;
age = 24;
console.log('Age: ' + age);

interface Point {
  x: number;
  y: number;
}

function printPoint(p: Point): void {
  console.log(`${p.x}, ${p.y}`);
}

// Point interfaceを implements していないのに渡せる
const p1 = { x: 10, y: 20, z: 30 };
printPoint(p1); // OK！ x, y を持っていればそれで十分
console.log(typeof p1); // object

let name = 'Alice';
console.log(`Hello, ${name}!`); // テンプレートリテラルを使用
name = 'Bob';
console.log(`Hello, ${name}!`); // テンプレートリテラルを使用

// アロー関数
const add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(5, 3));

class Car {
  drive(): void {}
}
class Golfer {
  drive(): void {}
}
// No error?
const w: Car = new Golfer();
console.log(w instanceof Golfer); // true
