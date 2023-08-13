
$("button").click(function () {
    $(this).addClass("btnClicked");

    setTimeout(function () {
        $("button").removeClass("btnClicked");
    }, 120)

    gameLogic()

});


var yourScore = 0;
var opponentScore = 0;
var compNum;
var player;

function gameLogic() {

    /*players logic*/

    $("#rock").click(() => {
        $("#myChoiceImg").attr("src", "images/fist.png");
        player = 1;
    })
    $("#paper").click(() => {
        $("#myChoiceImg").attr("src", "images/hand-palm.png");
        player = 2;
    })
    $("#scissors").click(() => {
        $("#myChoiceImg").attr("src", "images/hand.png");
        player = 3;
    })

    /*computer logic*/

    compNum = Math.floor(Math.random() * 3) + 1

    switch (compNum) {
        case 1:
            $("#computerImg").attr("src", "images/fist.png");
            break;
        case 2:
            $("#computerImg").attr("src", "images/hand-palm.png");
            break;
        case 3:
            $("#computerImg").attr("src", "images/hand.png");
            break;
    }

    if (player == compNum) {
        console.log("DRAW")
    } else if (((player == 1) && (compNum == 2)) || ((player == 2) && (compNum == 3)) || ((player == 3) && (compNum == 1))) {
        console.log("COMPUTERS POINT")
        opponentScore++;
        $("#compScoreCount").html(`${opponentScore}` + "/7")
    } else if (((player == 1) && (compNum == 3)) || ((player == 2) && (compNum == 1)) || ((player == 3) && (compNum == 2))) {
        console.log("MY POINT")
        yourScore++;
        $("#yourScoreCount").html(`${yourScore}` + "/7");
    }

    /*check score*/

    if (yourScore == 7) {
        console.log("YOU WIN!!");
        $("body").load("winner.html ");

    } else if (opponentScore == 7) {
        console.log("YOU LOSE !!")
        $("body").load("loser.html ");
    }
}