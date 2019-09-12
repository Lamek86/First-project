/*let name, Admin;
name = 'Джон Маклауд';
Admin = name;
alert(`Ты - ${Admin}!!!`); // это обратные ковычки и в них внутри ${} можно написать хоть функцию то есть всё
let userName = prompt("Как вас зовут", "");
alert(`Добрый день ${userName}!`);
let nameJS = prompt("Какое  полное название JS", "");
if (nameJS == "ECMAjava script") {
    alert("true");
} else(alert(false));
let newNumber = prompt("Введите число","");
if(newNumber < 0) {
    alert(-1);
}
else if(newNumber > 0) {
    alert(1);
}
else (alert(0));
let newNum =prompt("Input a number",""); (newNum > 0)? alert(1) : (newNum < 0)? alert(-1) : alert(0); 

let num = prompt("say hi","");
if(num =="hai"){
    num = true;
}
else(num = false);
alert(num || "not true");*/

/*
let login = prompt("Who s there","");
if(login == "Admin") {
    let password = prompt("Input your password","");{
        if(password == "I am boss"){
            alert("GoodmorninG BiG BoSS!");
        }
        else if(password == "" || password == null){
            alert("Неаа))");
        }
        else (alert ("I don't now you",""));
    }
}
else if(login == "" || login == null){
    alert("Отменено");
}
else(alert("Who are you",""));*/

/*
let adm = prompt("Input login please","");
while (adm != 123456){
    alert("Input correctly please","");
    adm = prompt("Input login again please","");
}*/

/*
for(let i = 2; i <= 10; i++){
    if(i % 2 == 0){
    alert(i);
    }
}
let i =0;
while(i<3){
    alert(`Number is ${i}`);
    i++;
}*/

/*
let numBer;// проверка на то что бы число было не меньше 100 или на отмену esc 
do{
   numBer= prompt("Input only number","");
}while(numBer <= 100 && numBer);// если число большне 100 или esc то цикл окончен
*/

/*
let primeNum = 10;// проверка на простое число которое делиться на себя и на 1 без остатка

next: 
for(i = 2; i <= primeNum; i++){//проверка для всех чисел до n
    for(j = 2; j < i; j++){//проверка на числа меньше n
        if(i % j == 0) continue next;//если число n делиться на число менше себя то пропускаем 
    }
    document.write(`${i} <br/>`);//вывод простого числа
}*/

/*
const nnum = +prompt("Input number","");
switch(nnum){
    case 0:
        alert("You are input - 0");
        break;
    case 1:
        alert("You are input - 1");
        break;
    case 2:
    case 3:
        alert("You are input - 2 or 3");
        break;
}*/

/*
function checkAge(age){
    age = prompt("How old are you? ","");
    //return (age > 18)? true : confirm ("Parents know?");
    return (age > 18 || confirm("parents know???"));
}
checkAge();*/

let question = prompt ( "How old are you?","18");
function victor (question, yes, no){
     if (question =>18){
         yes();
     }
     else (no());
}
victor(question,
    ()=> alert("Good Morning"),// стрелочный указтель функций то же что и == yes(){alert("Good Morning");}
    ()=> alert("Hi!")
);
