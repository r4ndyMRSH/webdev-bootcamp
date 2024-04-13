function add(num1, num2){
    return num1 + num2;
}
function sub (num1, num2){
    return num1 - num2;
}
function multpl(num1, num2){
    return num1 * num2;
}
function div(num1, num2){
    return num1 / num2;
}
function calculator(num1, num2, operator){
    return operator(num1, num2);
}

console.log(calculator(3,2,add));
console.log(calculator(3,2,sub));
console.log(calculator(3,2,multpl));
console.log(calculator(3,2,div));