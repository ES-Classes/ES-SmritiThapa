const a = "Rakesh";
const b = 'Prajapati';
const c = `Vedas`;
const d = new String('Rakesh Prajapati');


console.log(a.length);
console.log(b.length);
console.log(c.length);
console.log(d.length);

console.log(a.charAt(1));
console.log(a[1]);

let cc = 'क';
let ccc = 'क';
let dd = 'ख';
console.log(cc.localeCompare(ccc));

let para = "My name is \
Rakesh Prajapati";

para = `My name is
Rakesh Prajapati`;

//string interpolation
console.log(`My college is ${a + b + c}`);