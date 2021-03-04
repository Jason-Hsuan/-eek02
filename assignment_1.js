function calculate(min, max){
    var sum=0;
    for (var i = min; i <=max; i++) {
        sum += i;
    };
    return sum;
}
console.log(calculate(1,3));
console.log(calculate(4,8));