let f: (() => void) | null = null

function g() {
  f = () => {}
}

g()

if (f) {
  f() // <- Error: "This expression is not callable 
      //            Type 'never' has no call signatures. (2349)"
}
