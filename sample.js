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
