isPalindrome = (input) => {
    var initialNumber = input.valueOf();
    if(isNaN(initialNumber))
        return `${initialNumber} is NaN`;
    var reversedNumber = "";
    while( initialNumber != 0 ){
        reversedNumber += initialNumber % 10;
        initialNumber = Math.floor( initialNumber / 10);
    }
    if( input === reversedNumber)
        return `${input.valueOf()} is a palindrome`;
    return `${input.valueOf()} is not a palindrome`;
}

function splitString(){
    event.preventDefault();
    var inputNumbers = document.getElementById("inputNumbers").value.split('|');
    var output="";
    console.log(inputNumbers);
    for(var i = 0; i < inputNumbers.length; i++){
        output += "\n" + isPalindrome(inputNumbers[i]);
    }
    document.getElementById("result").innerHTML = output;
}