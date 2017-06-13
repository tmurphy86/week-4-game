$(function(){
	var initialGameObject = {
		obiWan: {name: "Obi-Wan",
		img: "assets/images/obi.jpg",
		hp: "190",
		attack: "9",
		counterAttack: "9",
		location: "start",
		selected: false,
		},
		Ewok:{name: "Ewok",
		img: "assets/images/ewok.jpg",
		hp: "100",
		attack: "4",
		counterAttack: "3",
		location: "start",
		selected: false,
		},
		stormTrooper:{name: "Storm Trooper",
		img: "assets/images/storm.jpg",
		hp: "120",
		attack: "5",
		counterAttack: "7",
		location: "start",
		selected: false,
		},
		darthVadar:{name: "Darth Vadar",
		img: "assets/images/vadar.jpg",
		hp: "170",
		attack: "8",
		counterAttack: "5",
		location: "start",
		selected: false,
		},
	}
// var listOfObjects = [];
// var a = ["car", "bike", "scooter"];
// a.forEach(function(entry) {
//     var singleObj = {}
//     singleObj['type'] = 'vehicle';
//     singleObj['value'] = entry;
//     listOfObjects.push(singleObj);
// });	

//setting game variables
var currentGame = jQuery.extend({}, initialGameObject);
var kickOff = false;
var opp = false;
var player;
var baseAP;
var ap;
var playerHP;
var hits;
Object.keys(currentGame).forEach(key =>{
	if (!currentGame[key].selected) {
		var keyadd = key;
		$('.fighters').append($('<img>', {id: currentGame[key].name, alt: key , src: currentGame[key].img, width:"304", height:"236", class:"img-thumbnail charImg"}));
	}
});

$(".charImg").on('click', function charSelect(){
	var keySelect = $(this).attr('alt');
	console.log(keySelect);
	var objSel = currentGame[keySelect];
	objSel.selected = true;

	if (kickOff === false) {
		kickOff = true;
		player = objSel;
		playerHP = parseInt(player.hp);
		baseAP = parseInt(player.attack);
		ap = baseAP;
		hits = 1;
		
		$('#youDiv').append($('<img>', {id:"youImg", src: objSel.img, width:"304", height:"236", class:"img-thumbnail" })); //update image location based on object location
		$('#selected').html("You have selected:" + objSel.name);
		$('.pscore').html("Your current health:" + objSel.hp);
		$('#ava').html("Select an enemy!");
		this.remove();

	} else {

			opp = true;
			var enemy = objSel;
			console.log(enemy);
			$('#ava').html("Enemy Selected: " + objSel.name);
			$('.escore').html(objSel.name + " current health: " + objSel.hp);


			//check if enemy is loaded to attack
			if(opp === true) {

				//attack onclick
				console.log(ap);
				var enemyHP = parseInt(enemy.hp);
				console.log(enemyHP);
				var cap = parseInt(enemy.counterAttack);

				$('#attack').on('click', function attack(){
					enemyHP = (enemyHP-ap);
					playerHP = (playerHP-cap);
					ap = baseAP + ap;
					// Math.pow(baseAP, hits);
					hits++;
					console.log("enemyHP" + enemyHP);
					console.log("playerHP" + playerHP);
					console.log("attack" + ap);
					//console.log("exponental" + hits);
					console.log("shoudsay" + baseAP);
					$('.pscore').html("Your current health:" + playerHP);
					$('.escore').html(objSel.name + " current health: " + enemyHP);

					if (enemyHP <=0){
							console.log("gameover");
							opp = false;
							$('.fighters').empty();

							Object.keys(currentGame).forEach(key =>{
								if (!currentGame[key].selected) {
									$('.fighters').append($('<img>', {id: currentGame[key].name, src: currentGame[key].img, width:"304", height:"236", class:"img-thumbnail" }));
								}
							});
							enemy = "";


					}
				});

			}else {
				this.remove();
			}
		}

});




$("#restart").on('click', function restart(){
	currentGame = jQuery.extend({}, initialGameObject);
	console.log(currentGame);
	hits = 1;
	kickOff = false;
});


});

