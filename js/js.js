"use strict";               
                // HW#1
let user = prompt('what is your name?', );
alert("Hello" + "," + " " + user + " " + "how are you?");

                // HW#2
// task#1
let name = "John";
let admine = name; 
alert(admine);

// task#2
let planetEarth = ''; 
let userName = '';

// task#3
let variable = "10" + 10;
console.log(typeof(variable));
// в данном случае происходит строковое преобразование; 
// где один из аргументов строка и оператора "+" приводит к строке и другой аргумент(число 10); 
// в консоль выводится тип данных "строка"  

                    // HW#3
let c = prompt('enter your first number');
let d = prompt('enter your second number');
let operant = prompt('select operator: +, -, *, /');

c = Number(c);
d = Number(d);

if(operant === '+'){
    console.log (c + d); 
}

if(operant === '-'){
    console.log (c - d); 
}

if(operant === '*'){
    console.log (c * d); 
}

if(operant === '/'){
    console.log (c / d); 
}

                // HW#4
let a = prompt('enter your first number');
let b = prompt('enter your second number');
let operant2 = prompt('select operator: +, -, *, /');

a = Number(a);
b = Number(b);

if(operant2 === '+'){
    let result = a + b;
    console.log (a + "+" + b + "=" + result); 
}

if(operant2 === '-'){
    let result = a - b;
    console.log (a + "-" + b + "=" + result); 
}

if(operant2 === '*'){
    let result = a * b;   
    console.log (a + "*" + b + "=" + result); 
}

if(operant2 === '/'){
    let result = a / b;   
    console.log (a + "/" + b + "=" + result); 
}



