// function clickAlert(){
//     alert("Heellllll");
    

// }

const buttontag = document.getElementById("button-id");
const divtag = document.getElementById("div-id");
const input1tag = document.getElementById("input-1");
const input2tag = document.getElementById("input-2");


buttontag.onclick =function(){
    // divtag.innerHTML= "LOL! I've change your value";
    var initalText = input1tag.value;
    input2tag.value = initalText;
    input1tag.value= ""
    console.log(initalText);
};

//ES => ECMAScript
// In 2015, => ES6

let x; //var x; we cannot redefine the value again and again

//create function in ES6
const abc = () =>{};