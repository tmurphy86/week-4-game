$(function(){
	var initialGameObject = {
		obiWan: {name: "Obi-Wan",
		img: "assets/images/obi.jpg",
		hp: "100",
		attack: "100",
		counterAttack: "",
		location: "start",
		selected: false,
		},
		Ewok:{name: "Ewok",
		img: "assets/images/ewok.jpg",
		hp: "100",
		attack: "100",
		counterAttack: "",
		location: "start",
		selected: false,
		},
		stormTrooper:{name: "Storm Trooper",
		img: "assets/images/storm.jpg",
		hp: "100",
		attack: "100",
		counterAttack: "",
		location: "start",
		selected: false,
		},
		darthVadar:{name: "Darth Vadar",
		img: "assets/images/vadar.jpg",
		hp: "100",
		attack: "100",
		counterAttack: "",
		location: "start",
		selected: false,
		},


	}
console.log(initialGameObject);
// var listOfObjects = [];
// var a = ["car", "bike", "scooter"];
// a.forEach(function(entry) {
//     var singleObj = {}
//     singleObj['type'] = 'vehicle';
//     singleObj['value'] = entry;
//     listOfObjects.push(singleObj);
// });	

var currentGame = jQuery.extend({}, initialGameObject);
console.log(currentGame);
var kickOff = false;


$(".charImg").on('click', function charSelect(){
	var keySelect = $(this).attr('attr');
	console.log(keySelect);
	var objSel = currentGame[keySelect];
	objSel.selected = true;

	if (kickOff === false) {
		kickOff = true;
		
		

	//Object.keys(currentGame).forEach(key => $('.fighters').append($('<img>', {id: currentGame[key].name, src: currentGame[key].img, width:"304", height:"236", class:"img-thumbnail" })));
	// console.log(currentGame);

		$('#youDiv').append($('<img>', {id:"youImg", src: objSel.img, width:"304", height:"236", class:"img-thumbnail" })); //update image location based on object location
		$('#selected').html("You have selected:" + objSel.name);
		$('.score').append("Your current health:" + objSel.hp);
		this.remove();

	} else {

		var enemy = objSel;
		console.log(enemy);

	}

});


	$('attack').on('click', function attack(){
		//check if enemy is loaded to attack
		console.log("attack");


		//apply attack  
		function cAttack() {
			var one = "hold";
		//currentGame.
		//bigobject.function() being called then the smaller stuff use this.namedunederobject
		}

		function health() {
			var a = 2;
		}

});





$("#restart").on('click', function restart(){
	currentGame = jQuery.extend({}, initialGameObject);
	console.log(currentGame);
});





// Select 4 character ---once you pick the other remaining characters are your enemies
// Assigned HP if you go below zero you loss game ends and can't click again

// if they go down they loss and are removed
// if no one is selected nothing happens
// your HP attack power would get higher
// Restart button



// attack button - 

// 	click value add text for who they clciked on. One click event handlier for the 
});

