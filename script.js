function data (number){
    calc.display.value += number;
}

function ac(){
    calc.display.value = "";
}

function c(){
    calc.display.value = calc.display.value.slice( 0 , -1) ;
}