function jadenCased (str){
    str = document.getElementById("original").value;            //getting the quote
    var arr = str.split(" ");                                   //spliting quote and new array with each word as an element           
    var newstring = arr.map(function(word,i,array){             //new array              
    return word = word.charAt(0).toUpperCase()+word.slice(1); //with only the first letter capitalized    
    });                                                        
    var editedText = document.getElementById("editedText");
    editedText.innerHTML = newstring.join(" ");              //joining back the quote
    var pageNode = document.getElementById("page");         
    pageNode.style.background = "url(Black-Eyed-Peas-Where-Is-The-Love.jpg)"; //showing Jaden's picture as background
}

function clearAndGo (){
   document.getElementById("original").value = ' ';     //cleaning the input field
   document.getElementById("editedText").innerHTML=" "; //and the <p>
   var pageNode = document.getElementById("page");      
  pageNode.style.background =  "#313E50";               //changing the background back to original color
}

//console.log(jadenCased("How can mirrors be real if our eyes aren't real"));