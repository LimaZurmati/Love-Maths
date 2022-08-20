document.addEventListener("DOMContentLoaded", function(){
    let button = document.getElementsByTagName("button");
    for (let button of button){
        if (this.getAttribute("data-type") === "submit"){
            alert("You clicked Submiy");
        } else {
            let gameType = this.getAttribute("data-type");
            alert('you clicked $(gameType');
            runGame(gameType);
        }
    }
    runGame("addition";)
})

function runGame(gameType){
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition"){
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unkown game type: $(gameType)`);
        throw `Unknown game type: $(gameType).Aborting!`
    }

}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function ncrementWrongAnswer(){

}
 function displayAdditionQuestion(){
    Document.getElementsById('operand1').textContent = operand1;
    Document.getElementsById('operand2').textContent = operand2;
    Document.getElementsById('opera').tortextContent = "+";
 }
function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){
     
}
