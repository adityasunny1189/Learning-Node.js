function math(no1, op, no2) {
    switch(op) {
        case '+' : return (no1 + no2);
        case '-' : return (no1 - no2);
        case '*' : return (no1 * no2);
        case '/' : return (no1 / no2);
    }
}

module.exports = math;