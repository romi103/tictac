var cells = document.getElementsByClassName("cell");
var $cells = $(".cell");

var player = true;//true human, false - computer
var playerSymbol;

playerSymbol = "X";

var board = [];
var c0, c1, c2, c3, c4, c5, c6, c7, c8;


//pattern anazlizer

//function analizer() {
//    var winDist = [
//        [0, 1, 2],
//        [0, 3, 6],
//        [2, 5, 8],
//        [6, 7, 8],
//        [0, 4, 8],
//        [2, 4, 6]
//    ]
        
       var winDist = [[false, false, false, true, true, true, true, true, true],
        [false, true, true, false, true, true, false, true, true ],
        [true, true,false,true,true,false,true,true,false],
        [true, true,true,true,true,true,false,false,false],
        [false, true,true,true,false,true,true,true,false],
        [true, true,false,true,false,true,false,true,true]];
//
function wonGame (){
    alert("you win");
}      


function winCheck (valplayer) {
    
    switch  (true){
        case (board[0] === valplayer && board[1]  === valplayer && board[2] === valplayer):
            $("#0").addClass("red");
            $("#1").addClass("red");
            $("#2").addClass("red");
            wonGame();
            
        case (board[0] === valplayer && board[3] === valplayer  && board[6] === valplayer ):
        case (board[2] === valplayer  && board[5] === valplayer  && board[8] === valplayer ):
        case (board[6]  === valplayer && board[7] === valplayer  && board[8] === valplayer ):
        case (board[0]  === valplayer && board[4] === valplayer  && board[8] === valplayer ):
        case (board[2] === valplayer  && board[4] === valplayer  && board[6] === valplayer ):
        case (board[1] === valplayer  && board[4] === valplayer  && board[7] === valplayer ):
        case (board[3] === valplayer  && board[4]  === valplayer && board[5] === valplayer ):
               console.log("win");
            break;
  
    }
}
//choosing player symbol
$(".symbol").click(function(event){
    var target = event.target;
    var symbol = $(target).text();
    console.log(symbol);
    playerSymbol = symbol;
    
});
//main game 
$cells.click(function (event) {

    var element = event.target;
    var cellIndex = $(element).attr("id");
    if (player) {



        if (!board[cellIndex])  {
            $(element).text(playerSymbol);

            board[cellIndex] = playerSymbol;
           
            winCheck(playerSymbol);
            player = false;
            
            cellIndex = parseInt(cellIndex);
            switch (cellIndex){
                case 0:
                  c0 =  playerSymbol;
                    
                    break;
                 case 1:
                  c1 =  playerSymbol;
                    break;
                 case 2:
                  c2 =  playerSymbol;
                    break;
                     case 3:
                  c3 =  playerSymbol;
                    break;
                     case 4:
                  c4 =  playerSymbol;
                    break;
                 case 5:
                  c5 =  playerSymbol;
                    break;
                 case 6:
                  c6 =  playerSymbol;
                    break;
                 case 7:
                  c7 =  playerSymbol;
                    break;
                     case 8:
                  c8 =  playerSymbol;
                    break;
                
               
                
                
                    
            }
            console.log(c0);
            
            
            
        }


    } else {

       if (!board[cellIndex]) {
          
        
           player = true;
          


    }
}
    
});



