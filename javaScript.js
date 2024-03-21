

const blocksPressed = [];
const blocksTracked = [];
let activeGame = true;

function gameFunction(clicked_id) {
	


	let block_id = clicked_id;
	//let listLength = blocksPressed.length;
	
	if(activeGame == true){
		setBlock(block_id);
		document.getElementById("isGameTrue").innerHTML = activeGame;
	}
	else{
		document.getElementById("isGameTrue").innerHTML = activeGame;
	}

	if(blocksPressed.length == 9){
		document.getElementById("playerTurn").innerHTML = "Game Over!";
		//winner();
	}
	winner();

}


function setBlock(clicked_id){
	let block_id = clicked_id;
	let listLength = blocksPressed.length;
	
	// Check if the block has been pressed before 
	if(blocksPressed.includes(block_id)){
		document.getElementById("blockspressed").innerHTML = block_id + "has been pressed";
	}
	else{
		document.getElementById("blockspressed").innerHTML = block_id + " has not been pressed";
		//blocksPressed.push(this_id);
		if(listLength % 2 == 0) {
			blocksPressed.push(block_id);
			blocksTracked.push(block_id + "X");	//change this to a new array to tack which block was pressed by who
		}
		else{
			blocksPressed.push(block_id);
			blocksTracked.push(block_id + "O"); //change this to a new array to tack which block was pressed by who
		}

		document.getElementById("testList").innerHTML = blocksPressed;
		document.getElementById("blocksTracked").innerHTML = blocksTracked;
		changeBlock(block_id);
		//winner();
	}
}


function changeBlock (clicked_id){

	let block_id = clicked_id;
	var setBlock = document.getElementById(block_id);
	let listLength = blocksPressed.length;

	document.getElementById("test").innerHTML = block_id + " was pressed";
	document.getElementById("testList").innerHTML = blocksPressed;
	document.getElementById("testListLength").innerHTML = listLength;
	
	if(listLength % 2 == 0) {
		document.getElementById("playerTurn").innerHTML = "Player X Turn";
		setBlock.innerHTML = "O";
		setBlock.style.color = "blue";
	}
	else{
		document.getElementById("playerTurn").innerHTML = "Player O Turn";
		setBlock.innerHTML = "X";
		setBlock.style.color = "red";
	}

}

function winner(){
	
/*
	if(blocksPressed.at(1) == "Block1" && blocksPressed.at(3) == "Block2" && blocksPressed.at(5) == "Block3"){
		document.getElementById("playerwinner").innerHTML = "Player X is the Winner!";
	}
	*/
	//document.getElementById("playerwinner").innerHTML = "Player X is the Winner!";

	if(blocksTracked.includes("Block1X") & blocksTracked.includes("Block2X") & blocksTracked.includes("Block3X")){
		document.getElementById("playerwinner").innerHTML = "Player X is the Winner!";
		activeGame = false;
	}

	if(blocksTracked.includes("Block4X") & blocksTracked.includes("Block5X") & blocksTracked.includes("Block6X")){
		document.getElementById("playerwinner").innerHTML = "Player X is the Winner!";
		activeGame = false;
	}

}