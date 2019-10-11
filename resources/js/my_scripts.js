/*
	players is an array to hold each player's information.
	Fields:
		name - Football player's name
		img  - The relative/absolute path to the image file.
		alt  - The alternative text that describes the image.
		year - The student's year in college (Freshman, Sophomore, Junior, Senior).
		major- The student's current college major.
		games_played    - The number of football games the student has played for the Buffs.
		pass_yards      - The total number of passing yards in the student's football career for the Buffs.
		rushing_yards   - The total number of rushing yards in the student's football career for the Buffs.
		receiving_yards - The total number of receiving yards in the student's football career for the Buffs.
*/
var players = [{name:"John Doe", img: "../resources/img/player1.jpg", alt:"Image of Player 1", year:"Sophomore", major:"Art", games_played: 23, pass_yards: 435, rushing_yards: 200, receiving_yards: 88},
				{name:"James Smith", img: "../resources/img/player2.jpg", alt:"Image of Player 2", year:"Junior", major:"Science", games_played: 17, pass_yards: 192, rushing_yards: 102, receiving_yards: 344},
				{name:"Samuel Phillips", img: "../resources/img/player3.jpg", alt:"Image of Player 3", year:"Freshman", major:"Math", games_played: 8, pass_yards: 35, rushing_yards: 70, receiving_yards: 98},
				{name:"Robert Myers", img: "../resources/img/player4.jpg", alt:"Image of Player 4", year:"Senior", major:"Computer Science", games_played: 31, pass_yards: 802, rushing_yards: 375, receiving_yards: 128}];


function viewStudentStats(id, toggle){
	if(toggle == 1){
		document.getElementById(id).style.visibility = "visible";
		document.getElementById(id).style.height = "auto";
	}else{
		document.getElementById(id).style.visibility = "hidden";
		document.getElementById(id).style.height = 0;
	}
}

function changeColor(color){
	document.body.style.background = color;
}

function loadStatsPage(){
	var table = document.getElementById("stats_table");
	var win = 0;
	for (var rowCount = 2; rowCount < table.rows.length; rowCount++){
		if(parseInt(table.rows[rowCount].cells[2].innerHTML) > parseInt(table.rows[rowCount].cells[3].innerHTML)){
			table.rows[rowCount].cells[4].innerHTML = "CU Boulder";
			win++;
		}else{
			table.rows[rowCount].cells[4].innerHTML = table.rows[rowCount].cells[1].innerHTML;
		}
	}
	document.getElementById("wins").innerHTML = win;
	document.getElementById("losses").innerHTML = table.rows.length - (win + 2);
}
	//console.log(players[1].name);
function loadPlayersPage(){
			for(var i = 0; i < players.length;i++){
				var n = document.createElement('a');
				n.href = '#';
				n.text = players[i].name;
				n.setAttribute('class','dropdown-item');
				n.setAttribute('onClick', 'switchPlayers(' + i + ')');
				document.getElementById('player_selector').appendChild(n);
			}

}
function switchPlayers(playerNum){
	document.getElementById('p_year').textContent = players[playerNum].year;
	document.getElementById('p_major').textContent = players[playerNum].major;
	document.getElementById('g_played').textContent = players[playerNum].games_played;
	document.getElementById('player_img').src = players[playerNum].img;
	document.getElementById('player_img').alt = players[playerNum].alt;
	document.getElementById('p_yards').textContent = players[playerNum].pass_yards;
	document.getElementById('r_yards').textContent = players[playerNum].rushing_yards;
	document.getElementById('rec_yards').textContent = players[playerNum].rushing_yards;
	document.getElementById('avg_p_yards').textContent = Math.round(players[playerNum].pass_yards / players[playerNum].games_played);
	document.getElementById('avg_r_yards').textContent = Math.round(players[playerNum].rushing_yards / players[playerNum].games_played);
	document.getElementById('avg_rec_yards').textContent = Math.round(players[playerNum].receiving_yards / players[playerNum].games_played);
	//console.log((players[playerNum].passing_yards) );

}
/*
	Football Player Information Page
		loadPlayersPage method:
			parameters: none

			purpose: This method will populate the dropdown menu to allow the
					 user to select which player's information to view.

					 To handle this, you will need to iterate through the players array
					 and do the following for each player:
						1. Create an anchor tag
						2. Set the href to "#", this will make sure the
							anchor tag doesn't change pages
						3. Set the onclick to call switchPlayers method
							(this will need to pass in the index inside the players array)
						4. Set the anchor tag's text to the player's name.

					After setting all of the anchor tags, update the innerHTML of the dropdown menu.
					As a note, the id for the dropdown menu is player_selector.

		switchPlayers(playerNum) method:
			parameters:
				playerNum - The index of the football player in the players array.

			purpose:
				This method will update the the spans on the player's information pageX
				and calculate the average passing, rushing, and receiving yards.

				Span ids:
					p_year     - the player's year in college
					p_major    - the player's major in college
					g_played   - the number of games played for Buffs
					player_img - the player's photo (must set src and alt)
					p_yards    - the number of passing yards
					r_yards    - the number of rushing yards
					rec_yards  - the number of receiving yards

					Calculated values:
					  avg_p_yards   - the average number of passing yards for the player's Buff career
					  avg_r_yards   - the average number of rushing yards for the player's Buff career
					  avg_rec_yards - the average number of receiving yards for the player's Buff career
*/
