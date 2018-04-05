

   
    function guess (){                          //define function
    var tries = [];                             // define our array of tries
    var num = getRandomInt(1,11);               //number to be guessed
    for (var i = 0; i < 5; i++) {               // loop 5 times
    var userinput = prompt('Enter your guess: ' + ("you have "+ (5 - i) + " attempts")); //where user inputs data and what they see
   tries.push(userinput);                      // push the value into the array
   //document.write(userinput);                   //NO - write input on the screen after finishing
    if (userinput - num === 0){
        alert("Congrats! You won!");
        return;                                 // it stops the function when number is guessed.
    } else if (userinput > num+3 ){
        alert("Way high!");
    } else if((userinput > num)&&(userinput <= num+3)){
        alert("That's a little high!");
    } else if(userinput < num-3){
        alert("That's too low!");
    }else {alert("Mmm...little low");
    }
    }
    alert('You lost! your numbers were: ' + tries.join(', ')+"\nNumber was "+num+"!");     // alert the results after five tries - join shows all the elements of the array
    }
    
   function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}