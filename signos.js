function signo(n) {
    
    if (n > 0) {
        return 1
    } else if( n === 0) {
        return 0
    } else {
        return -1
    }

}
console.log(signo(10)); // 1
console.log(signo(-10)); // -1
console.log(signo(0)); // 0
console.log(signo(1.6)); // 1
console.log(signo(-2.8)); // -1
console.log(signo(0.5)); // 1