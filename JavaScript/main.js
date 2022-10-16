const quoteText = document.getElementById('quote-content')
const authorText = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('quote-button');

let apiQuotes = [];


  // Show New Quote
function newQuote() {
	// Pick a random quote from array
	const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
	// Check if Author field is blank and replace it with 'Unknown'
	if (!quote.author) {
		authorText.textContent = 'Unknown';
	} else {
	  authorText.textContent = quote.author;
	}
	// Set Quote, Hide Loader
	quoteText.textContent = quote.en;
  }
  
  // Get Quotes From API
  async function getQuotes() {
	const apiUrl = 'https://programming-quotes-api.herokuapp.com/Quotes/random';
	try {
	  const response = await fetch(apiUrl);
	  apiQuotes = await response.json();
	  newQuote();
	} catch (error) {
	  // Catch Error Here
	}
  }
  
  
  // Event Listeners
  newQuoteBtn.addEventListener("click", newQuote);
  
  // On Load
  getQuotes();