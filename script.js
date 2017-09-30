var endDate = new Date("January 10, 2018");
function updateTimer(){
	// subtract enddate from now
	var now = new Date();
	var timeReamining = endDate.getTime() - now.getTime();
	// console.log(timeReamining);
	var b = timeReamining /1000;
	
	var a = b % 60;
	
	var seconds = Math.floor((timeReamining/1000) % 60);
	var minutes = Math.floor((timeReamining/1000 / 60) %60);
	var hours = Math.floor((timeReamining/(1000* 60 * 60)) % 24);
	var days = Math.floor((timeReamining/(1000*60* 60 * 24)) % 7);
	var weeks = Math.floor((timeReamining/(1000*60* 60 * 24 * 7)));
	document.getElementsByClassName('weeks')[0].innerHTML = weeks;
	document.getElementsByClassName('days')[0].innerHTML = days;
	document.getElementsByClassName('hours')[0].innerHTML = hours;
	document.getElementsByClassName('minutes')[0].innerHTML = minutes;
	document.getElementsByClassName('seconds')[0].innerHTML = seconds;
}
setInterval(function(){
	// update the html so the right number are shwoing
	updateTimer();
}, 1000)