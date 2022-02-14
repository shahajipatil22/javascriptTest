let f: (() => void) | null = null

function g() {
  f = () => {}
}

g()

if (f) {
  f() // <- Error: "This expression is not callable 
      //            Type 'never' has no call signatures. (2349)"
}var codeJS = null;

console.log(codeJS);
      //output is null

console.log(typeof codeJS);
     //output is object
console.log(null==undefined);
//output is true

console.log(null===undefined);
//output is false

var coder = {
      name: "Peter",
      age: 27,
      speak() {
      console.log(this.name);
  }
};
coder.speakNow();

function number(n) {
    var add = 5/9;
    return;
    n + add;
     }

for(i;i<10){
console.log(number(10));
}
