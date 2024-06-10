const buttonsEi = document.querySelectorAll("button")
const inputfieldEi = document.getElementById("result")

for(let i=0; i<buttonsEi.length; i++){
    buttonsEi[i].addEventListener("click", ()=>{
        const buttonvalue = buttonsEi[i].textContent;
        if(buttonvalue === "C"){
          clearResult()
        }else if (buttonvalue === "="){
            calculateResult()
        }else{
            appendvalue(buttonvalue)
        }
    })
}

 function clearResult(){
    inputfieldEi.value = " "
 }
 function calculateResult(){
  inputfieldEi.value = eval(inputfieldEi.value)  
 }
 function appendvalue(buttonvalue){
  inputfieldEi.value += buttonvalue  
 }