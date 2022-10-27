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

//gettin user's time and date data
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
	//getting current time 
	const timeStr = objTime.datetime;
	let currentTime = timeStr.substr(11,5);
	document.getElementById('clock').innerHTML = currentTime;
})
.catch(error => console.log('Error'))
}

getTime();