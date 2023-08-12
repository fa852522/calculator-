const buttonsE1 = document.querySelectorAll('button')
const input = document.querySelector('#result')

for (let i = 0; i < buttonsE1.length; i++) {
    buttonsE1[i].addEventListener('click', () => {
        const buttonValue = buttonsE1[i].textContent;
        if(buttonValue==="C"){
            clearResult();
        }
        else if(buttonValue==="="){
            calculateResult();
        }
        else{
            appendValue(buttonValue);
        }



    })

};


function clearResult(){
    input.value="";

}
function calculateResult(){
    input.value=eval(input.value)

}
function appendValue(buttonValue){
    input.value+=buttonValue


}
