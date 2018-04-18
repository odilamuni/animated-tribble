function jadenCased (str){
    str = document.getElementById("original").value;
    var arr = str.split(" ");                                  
    var newstring = arr.map(function(word,i,array){                
    return word = word.charAt(0).toUpperCase()+word.slice(1);   
    });                                                        
    var editedText = document.getElementById("editedText");
    editedText.innerHTML = newstring.join(" ");
  //var pageNode = document.body;
  //pageNode.style.backgroundColor= "magenta"; 
  var pageNode = document.getElementById("page");
  pageNode.style.background = "url(Black-Eyed-Peas-Where-Is-The-Love.jpg)" ;
}

//document.getElementById("original").onfocus = function() {clearAndGo()};
function clearAndGo (){
   document.getElementById("original").value = ' ';
   document.getElementById("editedText").innerHTML=" ";
   var pageNode = document.getElementById("page");
  pageNode.style.background =  "#313E50";
}

//console.log(jadenCased("How can mirrors be real if our eyes aren't real"));