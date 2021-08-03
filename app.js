function main(){
// exercise1();
// exercise2(50,60);
// exercise3();
// exercise4();
// exercise5();




}
main();

function exercise1(){
  // set a var named five to 5
  let five = 5;
  // set a var named eight to 8
  let eight = 8;
  // only if five is less than eight
  if (five < eight){
    // log the sentence
    console.log('5 is less than 8');
  }
  else {
    // if five isnt less than eight lof an error
    console.log('ERROR');
  }
}

function exercise2(start, stop){
  // loop through every number between start and stop
for (let i = start; i <= stop; i++) {
  // check to see if divisible by 2
  if(i%2 == 0){
    // if so print that value
    console.log(i);
  }
  
}
}

function exercise3(){
  // ask for two numbers
let num1 = prompt("First number:");
let num2 = prompt("Second number:");
// check if first number is bigger than second number
if (num1>num2){
  // log the first number if its bigger
  console.log(num1);
}
// if it's not log the 2nd number
else {
  console.log(num2);
}

}

function exercise4(){
  // set a variable to see if user is done to false
  let done = false;
  // run this while user is not done
  while (done == false){
    // ask for an input
  let input = prompt("Enter a number 1 to 3 to have it alerted back. Press q to quit.");
 // run this if input is 1,2,or 3
  if (input == 1 || input == 2 || input == 3){
    // alert back the input
    alert(input);
  }
  // if user input isnt 1, 2, or 3 check if their input is 'q'
  else if(input === 'q'){
    // if it is change done to true to break loop
    done = true;
  }
  // if input isnt 1, 2, 3, or 'q' alert an error
  else{
    alert('ERROR');
  }
}
}

function exercise5(){
  // get starting balance from user
  let balance = prompt('What is your starting bank balance?');
  // make it an integer
  let balanceint = parseInt(balance);
  // if user isnt done loop through these questions
  let done = false;
  while (done == false){
  let depOrWith = prompt('Deposit or Withdraw? Press q to quit.').toLowerCase();
  let amount = prompt('How much?');
  let amountint = parseInt(amount);
  // if user wants deposit add amount to balance
  if (depOrWith === 'deposit'){
    console.log(balanceint += amountint);
  }
  // if they want to withdraw subtract amount from balance
  else if (depOrWith === 'withdraw'){
    console.log(balanceint -= amountint);
  }
  // if they press q set done to true to break loop
  else if(depOrWith === 'q'){
  done = true;
  }
}
}