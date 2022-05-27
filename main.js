

function addUser()
{ 
    player_1_name = document.getElementById("player1_textbox").value;
    player_2_name = document.getElementById("player2_textbox").value;

    localStorage.setItem("player1_name" , player_1_name);
    localStorage.setItem("player2_name" , player_2_name);

    window.location = "math_quiz.html";
}