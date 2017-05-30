$(document).ready(function(){

//listen for form submit

//check to see what city was chosen
var choice = [
	"New York", 
	"San Fancisco", 
	"Los Angeles", 
	"Austin", 
	"Sydney"
];

//listen for user selection

$('#city-type').change(changeBackground);

function changeBackground() {

	var city = $(this).val();

	switch (city) {
	case "0":
	$('body').attr('class', 'nyc');
	break;

	case "1":
	$('body').attr('class', 'sf');
	break;

	case "2":
	$('body').attr('class', 'la');
	break;

	case "3":
	$('body').attr('class', 'austin');
	break;

	case "4":
	$('body').attr('class', 'sydney');
	break;
	}
}



//"New York" make the background of the page nyc.jpg
//"San Francisco" make the background of the page sf.jpg
//"Los Angeles" make the background of the page la.jpg
//"Austin" make the background of the page austin.jpg
//"Sydney" make the background of the page sydney.jpg



});