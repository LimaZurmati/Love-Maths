document.addEventListener("DOMContentLoaded", function(){
    let button = document.getElementsByTagName("button");
    for (let button of button){
        if (this.getAttribute("data-type") === "submit"){
            alert("You clicked Submiy");
        } else {
            let gameType = this.getAttribute("data-type");
            alert('you clicked $(gameType');
        }
    }
})
function runGame(){
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function ncrementWrongAnswer(){

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){
     
}
