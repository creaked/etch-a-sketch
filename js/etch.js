/* 
                      _            _ 
                     | |          | |
   ___ _ __ ___  __ _| | _____  __| |
  / __| '__/ _ \/ _` | |/ / _ \/ _` |
 | (__| | |  __/ (_| |   <  __/ (_| |
  \___|_|  \___|\__,_|_|\_\___|\__,_|   
  		github.com/creaked

  Etch a Sketch script
  http://www.theodinproject.com/web-development-101/javascript-and-jquery
*/

//grid variables
var rows = 16;	//default rows 16
var columns = 16;	//default columns 16

//default color
var color = 'black';

//	creates a grid at x * y 
function createGrid() {
	$('.header').append('<div class="container"></div>'); //create container
    var $row = $("<div />", {
    	class: 'row'
	});
	var $square = $("<div />", {
    	class: 'sq'
	});

    for (var i = 0; i < columns; i++) {
        $row.append($square.clone());
    }
    for (var i = 0; i < rows; i++) {
        $(".container").append($row.clone());
    }
}

function colors() {
	$('.sq').hover(function(){
		$(this).css('background', color);
	});
}

function refresh() {
	$('.container').remove();	//remove existing container
	createGrid();
	colors();
}

function setRows() {
	rows = prompt('How many rows would you like? (1-20)');
	if(rows < 1 || rows > 20) {
		confirm('Can not create grid. Please retry with a variable between 1 - 20')
	} else {
		refresh();
	}
}

function setCols() {
	columns = prompt('How many columns would you like? (1-20)');
	if(columns < 1 || columns > 20) {
		confirm('Can not create grid: Please retry with a variable between 1 - 20')
	} else {
		refresh();
	}
}

function changeColor() {
	color = prompt('What color would you like to switch to? (use for random colors)').toLowerCase();
	colors();
}

function grayScale() {
	$(".sq").hover(function() {
    	opacity = parseFloat($(this).css("opacity"));
        if(opacity == 1) {
            $(this).css("opacity","0.4");
        } else if (opacity > .7) {
            $(this).css("opacity","0.8");
        } else {
            opacity += 0.3; 
            $(this).css("opacity",opacity);
        }
    });
}

function randomColors() {
	$('.sq').hover(function(){
		var colors = ["#f00","#0f0","#00f", "#333", "#000", "violet", "pink", "purple"];
		var random = colors[Math.floor(Math.random() * colors.length)];
		$(this).css('background',random);
	});	 
}

$(document).ready(function() {
	//create grid
	createGrid();

	//bring in the....
	colors();
});
