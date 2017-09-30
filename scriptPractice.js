var endDate = new Date("January 10, 2018");

function countDown(){
	var now = new Date();
	// this is how much time is remaining until graduation date
	var timeTo = endDate.getTime() - now.getTime(); 

	var seconds = Math.floor((timeTo/1000) % 60)
}


setInterval(function(){
	countDown();
}, 1000);
