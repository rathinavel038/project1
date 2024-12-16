
let operator;
function assign(op){
    operator=op;
    document.getElementById('operator').innerText=op;
}
function getValue(id){
    return +document.getElementById(id).value;
}

function calculate(){
    const valueOne=getValue('first');
    const valueTwo=getValue('second');
    let result;
    switch (operator){
        case 'add':
            result=valueOne + valueTwo;
            break;
        case 'sub':
            result=valueOne - valueTwo;
            break;
        case 'mul':
            result=valueOne * valueTwo;
            break;
        case 'div':
            result=valueOne / valueTwo;
            break; 
        default:
            break;   
    }
    document.getElementById('result').innerText =result;
}


 