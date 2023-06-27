Array.from(document.querySelectorAll(".button-num")).forEach(button => {
    
    button.addEventListener("click",numberButton);
})
// operator=["AC","MC","/","+","-","*"];
function numberButton(){
    document.getElementById("display").innerText +=this.innerText;   
}

// for clear the display
function clearDisplay() {
    document.getElementById("display").innerText = "";
}
clearButton = document.querySelector('.clear-btn');
clearButton.addEventListener('click', clearDisplay);

// for clear the last item in the display
function clearLastItem(){
    display = document.getElementById("display");
    currentDisplay = display.innerText;
    if(currentDisplay.length > 0){
        newDisplay = currentDisplay.slice(0,-1);
        display.innerText = newDisplay;
    }
}
clearLastButton = document.querySelector('.clear-Last');
clearLastButton.addEventListener('click',clearLastItem);

//for operator button

Array.from(document.querySelectorAll(".btn-op")).forEach(button => {
    
    button.addEventListener("click",operatorButton);
})
function operatorButton(){
    
    if(display.innerText===""){
        return;
    }else{
        document.getElementById("display").innerText +=this.innerText;
    }

}

//for performing the operatons

function performOperation(){
    if(display.innerText===""){
        return;
    }
    result = eval(display.innerText);
    display.innerText = result; 
}
equalButton = document.querySelector('.btn-eql');
equalButton.addEventListener('click',performOperation);
operatorButtons = document.querySelectorAll('.btn-op');
operatorButtons.addEventListener('click', performOperation);

