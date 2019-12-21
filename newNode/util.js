// console.log("New file connected");

// const name = "Aditya";
// module.exports = name;



function fib(n) {
    if(n == 0 || n == 1)
        return 1;
    else 
        return (fib(n - 2) + fib(n - 1));
}

function add(a,b) {
    return a + b;
}



module.exports = fib;