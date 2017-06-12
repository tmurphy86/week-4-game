$(function(){
	var initialGameObject = {
		obiWan: {name: "Obi-Wan",
		img: "location",
		hp: "100",
		attack: "100",
		counterAttack: "",
		location: "start",
		},
		darthMaul:{name: "Darth Maul",
		img: "location",
		hp: "100",
		attack: "100",
		counterAttack: "",
		location: "start",
		},
		lukeSky:{name: "Luke Skywalker",
		img: "location",
		hp: "100",
		attack: "100",
		counterAttack: "",
		location: "start"
		},
		darthSid:{name: "Darth Sid",
		img: "location",
		hp: "100",
		attack: "100",
		counterAttack: "",
		location: "start",
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
	var you = $(this).attr('value'); //update pulled attributes from object
	$('.charImg').html(); //moves non selected images to the enemies boxes
	$('#youImg').html(); //update image location based on object location
});

$('attack').on('click', function attack(){
	//check if enemy is loaded to attack


	//apply attack  
	function cAttack() {
		var one = "hold";
	//currentGame.
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

