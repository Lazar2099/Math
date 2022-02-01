player1_name= localStorage.getItem("player1_name_input");
player2_name= localStorage.getItem("player_name_input");
player1_score=0;
player2_score=0;
 function send(){
     number1= document.getElementById("number1").value;
     number2= document.getElementById("number2").value;
     actual_answer= parseInt(number1)*parseInt(number2);

     question_word="<h4>"+number1+"X"+number2+"</h4>";
     input_box="<br>answer:<input type='text' id='input_check_box'>";
     check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
     row=question_word+input_box+check_button;
     document.getElementById("number2").value="";
     document.getElementById("number1").value="";
 }
 question_turn= "player1";
answer_turn= "player2";

function check(){
    get_answer= document.getElementById("input_check_box").value;
    answer= get_answer.toLowerCase();
    console.log("answer in lower case"+answer);

    if(answer == word){
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;

        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Questionturn - "+player2_name;
    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Questionturn - "+player1_name;
    }
    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Answerturn - "+player2_name;      
    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answerturn - "+player1_name;
    }
    document.getElementById("output").innerHTML="";
}
