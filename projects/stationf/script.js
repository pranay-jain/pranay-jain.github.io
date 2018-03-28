$(document).ready(function () {
	console.log("FIRST LOG");
	// let xhttp = new XMLHttpRequest();
	// xhttp.open("GET", "http://online.stationf.co/tests/rooms.json", true);
	// xhttp.setRequestHeader('Content-type', 'application/json');
	// xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
	//xhttp.send();

	// $.get("http://online.stationf.co/tests/rooms.json", {
	// 	headers: {
	// 		'Content-Type' : 'application/json',
	// 		'Access-Control-Allow-Origin': '*'
	// 	}	
	// }, function (data) {
	// 	console.log("HELLO WORLD");
	// 	console.log(data);
	// });

	$.ajax({
         url: "http://online.stationf.co/tests/rooms.json",
         type: "GET",
         beforeSend: function(xhr){xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost');},
         success: function() { console.log("HI"); }
      });
});