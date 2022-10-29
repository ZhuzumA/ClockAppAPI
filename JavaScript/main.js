/*const quoteText = document.getElementById('quote-content')
const authorText = document.getElementById('quote-author');
*/

document.getElementById('quote-button').addEventListener('click', getQuote);

/*getting Quotes from Quote API and displaying on the page*/
function getQuote() {
	fetch('https://api.api-ninjas.com/v1/quotes?category=success', {
		method: "GET",
		headers: {
			'X-Api-Key': 'tPt7JbqQqLnpzzNq/8NOXA==U2qtoo66BgNzo3n4'
		}
	})
.then(res => {
	return res.json()
})
.then(function(data) {
	const objQuote = data[0];
	console.log(objQuote.quote);

    let authorQuote = objQuote.author;
	let quoteText = objQuote.quote;
	document.getElementById('quote-author').innerHTML = authorQuote;
	document.getElementById('quote-content').innerHTML = quoteText;

})
.catch(error => console.log('Error'))
}

//gettin user's time and location data 
let currentTime;
function getTime() {
	fetch("http://worldtimeapi.org/api/ip")
.then(res => {
	return res.json()
})
.then(function(data) {
	console.log(data);
	const objTime = data;
	//placing data on the page
	document.getElementById('day-year').innerHTML = objTime.day_of_year;
	document.getElementById('day-week').innerHTML = objTime.day_of_week;
	document.getElementById('week-number').innerHTML = objTime.week_number;
	document.getElementById('current-zone').innerHTML = objTime.timezone;
	//getting current time 
	const timeStr = objTime.datetime;
	currentTime = timeStr.substr(11,5);
	document.getElementById('clock').innerHTML = currentTime;

	//setting greetings according to the time
	let greetingsTime = timeStr.substr(11,2);
	switch (parseInt(greetingsTime)) {
		case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 89: case 10: case 11:
		  document.getElementById('greetings').innerHTML = "Good morning";
		  break;
		case 12:
		  document.getElementById('greetings').innerHTML = "It's lunch time";
		  break;
		case 13: case 14: case 15: case 16:
		  document.getElementById('greetings').innerHTML = "Good afternoon";
		  break;
		  case 17: case 18: case 19: case 20:
		  document.getElementById('greetings').innerHTML = "Good evening";
		  break;
		case 21: case 22: case 23:
		  document.getElementById('greetings').innerHTML = "Good night";
		  break;
		default:
			console.log('Er')
	}
})
.catch(error => console.log('Error'))
}

getTime();

console.log(`It's ${currentTime} so far`);

/*getting user's country data
function getCountry() {
		fetch("ipinfo.io/77.4.46.111?token=5a5e0b15098642")
	.then(res => {
		return res.json()
	})
	.then(function(data) {
		const objCountry = data;
		console.log(objCountry);
	
	//	document.getElementById('quote-content').innerHTML = quoteText;
	
	})
	.catch(error => console.log('Error'))
	}

	getCountry();
	*/


