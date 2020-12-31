let result=document.querySelector('.head');
let tap=document.querySelector('.calculation');
let prev='';
let temp='';
let operator='';

function simplify(symbol) {
    
    if(temp=='')
        return;
    
    if(prev==='') {
        prev=parseInt(temp);
        operator=symbol;
    }
    else {
    switch(operator)  {
        case '+': prev+=parseInt(temp);
                  operator='';
                break;
        case '-': prev-=parseInt(temp);
                  operator='';
                break;
        case 'x': prev*=parseInt(temp);
                  operator='';
                break;
        case '÷': prev/=parseInt(temp);
                  operator='';
                break;
    }
    }
    operator=symbol;
    result.innerText=(prev);
    temp='';
}
function tapped(symbol) {
    
    if(parseInt(symbol)>=0 && parseInt(symbol)<10) {
        temp+=symbol;
        result.innerText=temp;
    }
    else if(symbol==='C') {
        prev='';
        temp='';
        next='';
        operator='';
        result.innerText=0;
    }
    else if(symbol==='←') {
        temp=temp.substring(0,temp.length-1);
        if(temp.length==0) {
            temp='';
            result.innerText=0;
        }
        else {
        result.innerText=temp;
        }
    }
    else if(symbol==='=') {
        if(operator!=='')
            simplify(operator);
        temp=prev;
        prev='';
        // operator='';
    //    result.innerText=prev; 
    }
    else {
        simplify(symbol);
        operator=symbol;
    }
}
function clicked() {
    
    tap.addEventListener('click', (event) => tapped(event.target.innerText) );
}
clicked();