console.log('a =', a)
var a = 2
console.log('a =', a)

function test(){
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}

test()

// console.log('b =', b) dara erro se variavel não for declarada antes de let
let b = 2
console.log('b =', b)