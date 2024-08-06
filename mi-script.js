#!/home/codespace/nvm/current/bin/node

var n = 100

var m = 1
for (var i = 0; i < n; i++) {
    m *= (n - i)
}

function fib(n) {
    if (n == 0)
        return 0
    if (n == 1)
        return 1
    return fib(n - 1) + fib(n - 2)
}

const f = (a) => a

const verde_cesped = {
    titulo: "verde",
    color: "#00ff00",
    rating: 0
}

console.log(m)
console.log(fib(12))