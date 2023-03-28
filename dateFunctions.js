// returns value as day of the year, 1-365
function today() {
	let date = new Date();
	var thisMonth = date.getMonth();
	var total = 0;
	for ( i=0; i<thisMonth; i++) {
		total += daysPerMonth[ i ];
	}
	total += date.getDate();
	return total;
}

// takes argument as the day per year, 1-365
// returns string, ex: "April 1, 2023"
function numberToDate(num) {
	var thisMonth, thisDate;
	var hold = num;
	var i = 0;
	while (num > 0) {
		num -= daysPerMonth[i];
		i++
		if (i < daysPerMonth[ i + 1]) getM(i);
	}
	function getM(i) {
		thisMonth = i - 1;
	}
	var thisDate = hold - daysPerMonth.slice(0, thisMonth).reduce( function(a,b) {return a+b}) ;
	return `${months[thisMonth]} ${thisDate}, 2023`;
}


function getDayInWeek(day, current) {
	wantedDOTW = days[ day ];
	currentDOTW = new Date(numberToDate(current)).getDay();
	return current + (wantedDOTW - currentDOTW);
}

var daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var days = {
	"Sunday": 0,
	"Monday": 1,
	"Tuesday": 2,
	"Wednesday": 3,
	"Thursday": 4,
	"Friday": 5,
	"Saturday": 6
}