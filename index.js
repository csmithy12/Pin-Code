let c = 0
answer = ""
function button1(){
    answer = answer + "1"
    document.getElementById('counter').innerHTML=answer;
}
function button2(){
    answer = answer + "2"
    document.getElementById('counter').innerHTML=answer;
}
function button3(){
    answer = answer + "3"
    document.getElementById('counter').innerHTML=answer;
}
function button4(){
    answer = answer + "4"
    document.getElementById('counter').innerHTML=answer;
}
function button5(){
    answer = answer + "5"
    document.getElementById('counter').innerHTML=answer;
}
function button6(){
    answer = answer + "6"
    document.getElementById('counter').innerHTML=answer;
}
function button7(){
    answer = answer + "7"
    document.getElementById('counter').innerHTML=answer;
}
function button8(){
    answer = answer + "8"
    document.getElementById('counter').innerHTML=answer;
}
function button9(){
    answer = answer + "9"
    document.getElementById('counter').innerHTML=answer;
}
function button0(){
    answer = answer + "0"
    document.getElementById('counter').innerHTML=answer;
}
function undo(){
    answer = ""
    document.getElementById('counter').innerHTML=answer;
}
function correct(){
    if (answer == "4521"){
        document.getElementById('button1').className="hide";
        document.getElementById('button2').className="hide";
        document.getElementById('button3').className="hide";
        document.getElementById('button4').className="hide";
        document.getElementById('button5').className="hide";
        document.getElementById('button6').className="hide";
        document.getElementById('button7').className="hide";
        document.getElementById('button8').className="hide";
        document.getElementById('button9').className="hide";
        document.getElementById('button0').className="hide";
        document.getElementById('buttonundo').className="hide";
        document.getElementById('buttoncorrect').className="hide";
        document.getElementById('mainTitle').className="hide";
        document.getElementById('counter').className="hide";
        document.getElementById('image').className="show";
    }
}