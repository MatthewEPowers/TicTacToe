

const blocksPressed = [];

function gameFunction(clicked_id) {
	


	let this_id = clicked_id;
	let listLength = blocksPressed.length;
	
	// Check if the block has been pressed before 
	if(blocksPressed.includes(this_id)){
		document.getElementById("blockspressed").innerHTML = this_id + "has been pressed";
	}
	else{
		document.getElementById("blockspressed").innerHTML = this_id + "has not been pressed";
		//blocksPressed.push(this_id);
		if(listLength % 2 == 0) {
			blocksPressed.push(this_id + "X");
		}
		else{
			blocksPressed.push(this_id + "O");
		}

		document.getElementById("testList").innerHTML = blocksPressed;
		changeBlock(this_id);
		//winner();
	}

	if(blocksPressed.length == 9){
		document.getElementById("playerTurn").innerHTML = "Game Over!";
		//winner();
	}

}

function changeBlock (clicked_id){

	let this_id = clicked_id;
	var setBlock = document.getElementById(this_id);
	let listLength = blocksPressed.length;

	document.getElementById("test").innerHTML = this_id + " was pressed";
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
	

	if(blocksPressed.at(1) == "Block1" && blocksPressed.at(3) == "Block2" && blocksPressed.at(5) == "Block3"){
		document.getElementById("playerwinner").innerHTML = "Player X is the Winner!";
	}

}