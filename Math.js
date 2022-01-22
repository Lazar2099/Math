player1_name= localStorage.getItem("player1_name_input");
player2_name= localStorage.getItem("player_name_input");
player1_score=0;
player2_score=0;
 function send(){
     number1= document.getElementById("number1").value;
     number2= document.getElementById("number2").value;
     actual_answer= parseInt(number1)*parseInt(number2);

     question_word="<h4 id='word_display'> Q. "+remove_charAt3+"</h4> ";
     input_box="<br>answer:<input type='text' id='input_check_box'>";
     check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
     row=question_word+input_box+check_button;
     document.getElementById("number2").value="";
     document.getElementById("number1").value="";
 }