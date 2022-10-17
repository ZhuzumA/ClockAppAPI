/*const quoteText = document.getElementById('quote-content')
const authorText = document.getElementById('quote-author');
*/

document.getElementById('quote-button').addEventListener('click', getQuote);

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
	console.log(data)
	let authorQuote = data.author;
	let quoteText = data.quote;
	console.log(authorQuote, quoteText);

	document.getElementById('quote-author').innerHTML = authorQuote;
	document.getElementById('quote-content').innerHTML = quoteText;

})
.catch(error => console.log('Error'))
}


getQuote();