var table = [];
for (let i = 1; i <= 9; i++) {
    table[i] = [];
    for (let j = 1; j <= 9; j++) {
        table[i][j] = 0;
    }
}

function loadTable() {
	$('#start').remove();
	for (let i = 1; i <= 9; i++) {
		$('#table').append(`
			<tr></tr>
		`);
		for (let j = 1; j <= 9; j++) {
			$('#table').append(`
				<td><button type="button" class="btn btn-secondary btn-lg" id = "` + i + "" + j +`" ><i class="las la-stop"></i></button></td>
			`);
		}
	}
	setTimeout(function(){ generateBeer(); }, 1000);
	table[9][5] = 1; 
	document.getElementById("95").innerHTML = "🥴";
}

function generateBeer() {
	const column =  Math.floor(Math.random() * 9 + 1);
	const id = 1 + "" + column;
	document.getElementById(id).innerHTML = "🍺";
	setTimeout(function(){ generateBeer(); }, 1000);
	setTimeout(function(){ fallingBeer(1, column); }, 500);
}

function fallingBeer(row, column) {
	const newRow = row + 1;
	const id = newRow + "" + column;
	document.getElementById(id).innerHTML = "🍺";
	document.getElementById(row + "" + column).innerHTML = ('<i class="las la-stop"></i>');
	if (row + 1 == 9 && table[9][column] == 1) {
		loseGame();
	} else if (row + 1 == 9) {
		document.getElementById(id).innerHTML = ('<i class="las la-stop"></i>');
	}
	setTimeout(function() {fallingBeer(row + 1, column)}, 500);
}

function loseGame() {
	document.getElementById("status").innerHTML = "You got drunk...";
	document.getElementById("status").style.color = "red";
}

var drunkManPosition = 5;

document.addEventListener('keyup', (event) => {
	table[9][drunkManPosition] = 0;
	const id = 9 + "" + drunkManPosition;
	document.getElementById(id).innerHTML = ('<i class="las la-stop"></i>');
	if (event.key == "ArrowLeft" && drunkManPosition - 1 >= 1) {
		drunkManPosition -= 1;
	} else if (event.key == "ArrowRight" && drunkManPosition + 1 <= 9) {
		drunkManPosition += 1;
	}
	document.getElementById(9 + "" + drunkManPosition).innerHTML = "🥴";
	table[9][drunkManPosition] = 1;
});