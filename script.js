let display = document.getElementById("display");
let result = document.getElementById("result");

let you = 0;
let computer = 0;
let tie = 0;
function select(type,sign){
    if (type == "rock"){
        display.innerHTML = sign;
    }
    if (type == "paper"){
        display.innerHTML = sign;
    }    if (type == "scissor"){
        display.innerHTML = sign;
    }
    game(type)
}
function game(userSelection){
    const type = ["rock","paper","scissor"," -  👊","  - ✋"," -  ✌"];
    let randomNumber = Math.floor(Math.random() * (type.length / 2));
    let selectType = type[randomNumber];
    let selectSign = type[randomNumber + 3];
    display.innerHTML += selectSign;
    console.log(randomNumber);
    if (selectType == userSelection){
        result.innerHTML = "tie";
        tie++
    }
    else if (selectType == "paper" && userSelection == "scissor"){
        result.innerHTML = "you win 🎉";
        you++
    }
    else if (selectType == "paper" && userSelection == "rock"){
        result.innerHTML = "computer win";
        computer++
    }
    else if (selectType == "rock" && userSelection == "scissor"){
        result.innerHTML = "computer win";
        computer++
    }
    else if (selectType == "rock" && userSelection == "paper"){
        result.innerHTML = "you win🎉";
        you++

    }
    else if (selectType == "scissor" && userSelection == "paper"){
        result.innerHTML = "computer win";
        computer++
    }
    else if (selectType == "scissor" && userSelection == "rock"){
        result.innerHTML = "you win🎉";
        you++

    }
    else{
        result.innerHTML = "undefined";

    }
    document.getElementById("you").innerHTML = `you:${you}`;
    document.getElementById("computer").innerHTML = `computer:${computer}`;
    document.getElementById("tie").innerHTML = `tie:${tie}`;
}

