$(document).ready(function () {

    //start the game button
    $("#startGame").click(function () {
        $('#playerModal').modal({
            backdrop: false,
            keyboard: false

        });
        //closing select symbol modal
        $('#playerModal').on('hidden.bs.modal', function (e) {
            activeBoard = true;

            //activating board 
            $cells.on("click", main);
        });
    });

    $("#resetGame").click(function () {
        $cells.off();
        reset();
        main();
    });

});


var cells = document.getElementsByClassName("cell");
console.log(cells);
var $cells = $(".cell");

var player; //true human, false - computer
var playerSymbol;
var computerSymbol;
//decides wheather board is active or not 
var activeBoard;




var board = [];
var c0 = "";
var c1 = "";
var c2 = "";
var c3 = "";
var c4 = "";
var c5 = "";
var c6 = "";
var c7 = "";
var c8 = "";
var $board = $("c0, c1, c2, c3, c4, c5, c6, c7, c8");


function wonGame(combination) {
$cells.off();

    function flashLights () {
        var def = new $.Deferred();
        combination.animate({
            backgroundColor: "#abcdef"
        }, 300, function () {
            combination.animate({
                backgroundColor: "white"
            }, 300, function() {
                def.resolve();
            });
        });
        return def;
    }

    
    flashLights().then(function(){
        var def = new $.Deferred();
        setTimeout(function(){
            def.resolve();
            reset();
        }, 1500);
        return def;
    }).then(function(){
         board = [];
    $cells.on("click", main);
    });

   


}

function reset() {
    var c0 = "";
    var c1 = "";
    var c2 = "";
    var c3 = "";
    var c4 = "";
    var c5 = "";
    var c6 = "";
    var c7 = "";
    var c8 = "";


    $.each($cells, function (index, value) {


        value.innerHTML = "";

    });
}


function winCheck(valplayer) {
    var winningComb;

    if (c0 == valplayer && c1 == valplayer && c2 == valplayer) {
        winningComb = $("#0, #1, #2");


        console.log(winningComb);
        wonGame(winningComb);

    }

    if (c0 == valplayer && c3 == valplayer && c6 == valplayer) {
        winningComb = ("#0, #3, #6");
        console.log(winningComb);
        wonGame(winningComb);

    }
    if (c2 == valplayer && c5 == valplayer && c8 == valplayer) {
        winningComb = $("#2, #5, #8");
        console.log(winningComb);
        wonGame(winningComb);

    }

    if (c6 == valplayer && c7 == valplayer && c8 == valplayer) {
        winningComb = $("#6, #7, #8");
        console.log(winningComb);
        wonGame(winningComb);

    }

    if (c0 == valplayer && c4 == valplayer && c8 == valplayer) {
        winningComb = $("#0, #4, #8");
        console.log(winningComb);
        wonGame(winningComb);

    }

    if (c2 == valplayer && c4 == valplayer && c6 == valplayer) {
        winningComb = $("#2, #4, #6");
        console.log(winningComb);
        wonGame(winningComb);

    }

    if (c1 == valplayer && c4 == valplayer && c7 == valplayer) {
        winningComb = $("#1, #4, #7");
        console.log(winningComb);
        wonGame(winningComb);

    }

    if (c3 == valplayer && c4 == valplayer && c5 == valplayer) {
        winningComb = $("#3, #4, #5");
        console.log(winningComb);
        wonGame(winningComb);

    }




}

//choosing player/comp symbol
$(".symbol").click(function (event) {
    var target = event.target;
    var symbol = $(target).text();
    console.log(symbol);
    player = true;
    playerSymbol = symbol;
    if (playerSymbol === "X") {
        computerSymbol = "O";
    } else {

        computerSymbol = "X";
    }

    //hidding player modal after choosing symbol   
    $('#playerModal').modal('hide');

});
//AI 

var compMove = function (playeval, compVal) {


    if (c0 == "" && ((c2 == playeval && c1 == playeval) || (c8 == playeval && c4 == playeval) || (c6 == playeval && c3 == playeval))) {
        $('#0').text(compVal);
        player = true;
    } else {
        if (c1 == "" && ((c0 == playeval && c2 == playeval) || (c7 == playeval && c4 == playeval))) {
            $('#1').text(compVal);
            player = true;
        } else {
            if (c2 == "" && ((c0 == playeval && c1 == playeval) || (c6 == playeval && c4 == playeval) || (c8 == playeval && c5 == playeval))) {
                $('#2').text(compVal);
                player = true;
            } else {
                if (c8 == "" && ((c6 == playeval && c7 == playeval) || (c0 == playeval && c4 == playeval) || (c2 == playeval && c5 == playeval))) {
                    $('#8').text(compVal);
                    player = true;
                } else {
                    if (c6 == "" && ((c8 == playeval && c7 == playeval) || (c2 == playeval && c4 == playeval) || (c0 == playeval && c3 == playeval))) {
                        $('#6').text(compVal);
                        player = true;
                    } else {
                        if (c7 == "" && ((c8 == playeval && c6 == playeval) || (c1 == playeval && c4 == playeval))) {
                            $('#7').text(compVal);
                            player = true;
                        } else {
                            if (c3 == "" && ((c5 == playeval && c4 == playeval) || (c0 == playeval && c6 == playeval))) {
                                $('#3').text(compVal);
                                player = true;
                            } else {
                                if (c5 == "" && ((c2 == playeval && c8 == playeval) || (c4 == playeval && c3 == playeval))) {
                                    $('#5').text(compVal);
                                    player = true;
                                } else {
                                    if (c4 == "" && ((c2 == playeval && c6 == playeval) || (c8 == playeval && c0 == playeval) || (c5 == playeval && c3 == playeval) || (c7 == playeval && c1 == playeval))) {
                                        $('#4').text(compVal);
                                        player = true;
                                    } else { // IF NO OPP TO BLOCK A WIN, THEN PLAY IN ONE OF THESE SQUARES
                                        if (c4 == "") {

                                            $('#4').text(compVal);
                                            player = true;

                                        } else {
                                            if (c0 == "") {
                                                $('#0').text(compVal);
                                                player = true;

                                            } else {
                                                if (c8 == "") {
                                                    $('#8').text(compVal);
                                                    player = true;

                                                } else {
                                                    if (c7 == "") {
                                                        $('#7').text(compVal);
                                                        player = true;

                                                    } else {
                                                        if (c3 == "") {
                                                            $('#3').text(compVal);
                                                            player = true;

                                                        }
                                                    }
                                                }
                                            }


                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
//checking board
var checkBoard = function () {
    c0 = $('#0').html();
    c1 = $('#1').html();
    c2 = $('#2').html();
    c3 = $('#3').html();
    c4 = $('#4').html();
    c5 = $('#5').html();
    c6 = $('#6').html();
    c7 = $('#7').html();
    c8 = $('#8').html();
};


//main game
var main = function (event) {



    var element = event.target;
    var cellIndex = $(element).attr("id");
    if (player) {



        if (!board[cellIndex]) {
            $(element).text(playerSymbol);

            board[cellIndex] = playerSymbol;

            winCheck(playerSymbol);
            player = false;


            checkBoard();

            compMove(playerSymbol, computerSymbol);
            checkBoard();
            winCheck(computerSymbol);
        }
    }

};