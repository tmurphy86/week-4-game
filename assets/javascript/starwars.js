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
		img: "assets/images/vader.jpg",
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

$(".charImg").on('click', function charSelect(){
	var you = $('.charImg').val(currentGame.name); //update pulled attributes from object
	currentGame.selected = true;
	console.log(you);
	$('.charImg').html(); //moves non selected images to the enemies boxes
	$('#youImg').html(); //update image location based on object location
});

$('attack').on('click', function attack(){
	//check if enemy is loaded to attack


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

