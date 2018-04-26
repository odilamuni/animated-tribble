
//1-input as long as the user wants
//grab value --> string value
//


function datos (){
var dna = document.getElementById("myInput").value;//globar var
var dna1 = dna.toUpperCase().split("");
verifyStr(dna1);// 2-input needs to be verified, only string and a c g t should be entered
function verifyStr ( ){
    dna1.forEach(function(nucl){
        if(nucl !== "A" && nucl !== "C" && nucl !== "G" && nucl !== "T"){
        alert("You entered: " +nucl+ "\nNot a valid nucleotide");
        }
});
}
//3 - New array with the dna complements
//returns "#" if input isn't a valid nucleotide
var rna = dna1.map(function(nucl){
    if(nucl === "C"){
       return nucl = "G";
    }else if (nucl === "A"){
       return nucl = "U";
    }else if (nucl === "G"){
        return nucl = "C";
    }else if(nucl === "T"){
        return nucl = "A";
    }else {
        return nucl = "?";
    }
    });
    
//4 - CREATING ELEMENTS IN HTML TO STORE EACH ITEM
//LOOP
var x = dna.length;
for (var i = 0; i < x; i++){
//DNA data
var textDNA = dna.charAt(i).toLowerCase();
var newElementDNA = document.createElement("p");
var newNodeDNA = document.createTextNode(textDNA);
newElementDNA.appendChild(newNodeDNA);
var positionDNA = document.getElementById("dnaContainer");
positionDNA.appendChild(newElementDNA);

switch(textDNA){
    case 'g':
        newElementDNA.style.backgroundColor = "#5bb282";//only elements can be style, no nodes
        break;// code
    case 'a':
         newElementDNA.style.backgroundColor = "#57bbc6";
         break;
     case 'c':
         newElementDNA.style.backgroundColor = "#d8845b";
         break;
     case 't':
         newElementDNA.style.backgroundColor = "#b73ea7";
         break;
    default:
         newElementDNA.innerHTML = "?";
         newElementDNA.style.backgroundColor = "#858789";
         newElementDNA.style.color = "#fff";
}


// RNA data
var textRNA = rna.join('').charAt(i);//var to store input value
var newElementRNA = document.createElement("p");//new html element
var newNodeRNA = document.createTextNode(textRNA);//new text node containing input value
newElementRNA.appendChild(newNodeRNA);//linking element with node
var positionRNA = document.getElementById("rnaContainer");//where new element goes
positionRNA.appendChild(newElementRNA);//linking new element with its parent

switch(textRNA){
    case 'G':
        newElementRNA.style.backgroundColor = "#5bb282";//only elements can be style, no nodes
        break;// code
    case 'A':
         newElementRNA.style.backgroundColor = "#57bbc6";
         break;
     case 'C':
         newElementRNA.style.backgroundColor = "#d8845b";
         break;
     case 'U':
         newElementRNA.style.backgroundColor = "#b73e8c";
         break;
    default:
         newElementRNA.style.backgroundColor = "white";
         newElementRNA.style.color = "#858789";
}


//conector
var textCon = "-----------";
var newElementCon = document.createElement("p");
var newNodeCon = document.createTextNode(textCon);
newElementCon.appendChild(newNodeCon);
var positionCon = document.getElementById("conectors");
positionCon.appendChild(newElementCon); 
}
}
function clearField(){ //cleaning the html and input field
document.getElementById("myInput").value="";
document.getElementById("dnaContainer").innerHTML='';
document.getElementById("rnaContainer").innerHTML='';
document.getElementById("conectors").innerHTML='';
}


/* 
//write a paragraph with results
var dnastrand = document.getElementById("dnastrand");
    dnastrand.innerHTML = dna1.join(" - ");

var rnastrand = document.getElementById("rnastrand");
    rnastrand.innerHTML = rna.join(" - ");

console.log(dna);
console.log (verifyStr(dna));
console.log (rna);
}

//TRANSCRIBING THROUGH STRING ELEMENTS REPLACMENT//
//DOESN'T RETURN ANY ALERT IF INPUT ISN'T A VALID NUCLEOTID
/*
var replaceChars = { 
    "a": "U",
    "c": "G",
    "g": "C",
    "t": "A"
};
var rna3 = dna.replace(/a|c|g|t/gi, function(match) {return replaceChars[match];});
console.log(rna3);
*/