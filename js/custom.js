var cells = document.getElementsByClassName("cell");
var $cells = $(".cell");

var x = true;
var board = [];
//pushing x o to array
function pushX0() {
    $.each(cells, function(index, elemnt) {

        board.push(cells[index].innerHTML);
    });
}

//x true - human
//x false - computer



//add XO
function XO(turn, target, boardIndex) {

	if(!board[boardIndex]) {
		

    if (turn) {

        $(target).text("X");
        x = false;
        board[boardIndex] = "X";
        console.log(board);


    } else if (!turn) {

        $(target).text("O");
        x = true;
        board[boardIndex] = "O";
        console.log(board);


    }
}
//function call to cross out winning pattern
}


//$cells.click(XO());
/*
$cells.click(function(event) {
    var element = event.target;
    var cellIndex = $(element).attr("id");

    XO(x, element, cellIndex);
});
*/
///////////////////////////////////////////
if(x) {



	$cells.click(function(event) {
    var element = event.target;
    var cellIndex = $(element).attr("id");

    XO(x, element, cellIndex);
});

} else {
	alert("computer");
}



//for (var i=0; i<cells.length; i++ ){
//	console.log(cells[i].innerHTML);
//};


//console.log(cells[2].innerHTML);
