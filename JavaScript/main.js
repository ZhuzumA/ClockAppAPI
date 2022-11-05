//setting click function to show more quotes
document.getElementById('quote-button').addEventListener('click', getQuote);


//toggle button shows and hides adittional content area
(function () {
function showHide() {
	let timeContainer = document.getElementById("time-container");
	let icon = document.getElementById('icon-show');
	if(timeContainer.style.display == "none") {
		timeContainer.style.display = "block";
		icon.classList.remove("fa-angle-down");
		icon.classList.add("fa-angle-up");
	} else {
		timeContainer.style.display = "none";
		icon.classList.remove("fa-angle-up");
		icon.classList.add("fa-angle-down");
	}
}
document.getElementById('show-btn').addEventListener('click', showHide, true);
})();


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



//getting time data from API 
const getData = async () => {
	const res = await fetch("http://worldtimeapi.org/api/ip");
if (!res.ok) {
	throw new Error(`${res.status}: ${await res.text()}`);
}
return res.json();
}

//setting current time refreshing every second
const dataPromise = getData();

const setTime = async () => {
	const result = await dataPromise;
	const timeStr = result.datetime;
	let currentTime = timeStr.substr(11,5);
	document.getElementById('clock').innerHTML = currentTime;
	console.log(currentTime);
}
setInterval(setTime, 1000);


//placing aditional time data on the page in wrapped section
const setData = async () => {
	const result = await dataPromise;
	//placing data on the page
	document.getElementById('day-year').innerHTML = dataPromise.day_of_year;
	document.getElementById('day-week').innerHTML = dataPromise.day_of_week;
	document.getElementById('week-number').innerHTML = dataPromise.week_number;
	document.getElementById('current-zone').innerHTML = dataPromise.timezone;
}

setData();

//setting appropriate greetings according to the daytime 
const setGreetings = async () => {
	const result = await dataPromise;
	//getting current time
	const timeStr = result.datetime;
	let greetingsTime = timeStr.substr(11,2);
	//assigning variables the appropriate elements
	const sunIcon = document.getElementById('sun');
	const moonIcon = document.getElementById('moon');
	const bodyImg = document.getElementById('body');
	
	//placing on the page according to the current time 
	switch (parseInt(greetingsTime)) {
		case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 11:
		  document.getElementById('greetings').innerHTML = "Good morning";
		  moonIcon.remove();
		  bodyImg.style.backgroundImage="url(../resources/day.jpg)";
		  break;
		case 12:
		  document.getElementById('greetings').innerHTML = "It's lunch time";
		  moonIcon.remove();
		  bodyImg.style.backgroundImage="url(../resources/day.jpg)";
		  break;
		case 13: case 14: case 15: case 16:
		  document.getElementById('greetings').innerHTML = "Good afternoon";
		  moonIcon.remove();
		  bodyImg.style.backgroundImage="url(../resources/day.jpg)";
		  break;
		  case 17: case 18: case 19: case 20:
		  document.getElementById('greetings').innerHTML = "Good evening";
		  sunIcon.remove();
		  break;
		case 21: case 22: case 23: case 0: case 1: case 2: case 3:
		  document.getElementById('greetings').innerHTML = "Good night";
		  sunIcon.remove();
		  break;
		default:
			console.log('Er');
	}
}
setGreetings();