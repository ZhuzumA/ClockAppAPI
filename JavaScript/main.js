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

/**getting user's geolocation using IP API*/
function getGeolocation() {
	fetch('https://api.ipbase.com/v2/info?ip=&apikey=jCCyOoFPcwi6VA88GDElu5Vps1A3VOamOWSGxHIC', {
		method: "GET",
		headers: {
			'apikey': 'jCCyOoFPcwi6VA88GDElu5Vps1A3VOamOWSGxHIC'
		}
	})
.then(res => {
	return res.json()
})
.then(function(data) {
	/*const objQuote = data[0];*/
	console.log(data);
})
.catch(error => console.log('Error'))
}

/**
 * //getting Timezone object
 * const timezone = bigObj.timezone;
 * //getting Location object
 * const location = bigObj.location;
 */

/**
 *{
    "timezone": {
        "id": "Europe/Berlin",
        "current_time": "2022-10-18T23:47:17+02:00",
        "code": "CEST",
        "is_daylight_saving": true,
        "gmt_offset": 7200
    },
    "ip": "77.4.61.151",
    "type": "v4",
    "connection": {
        "asn": 6805,
        "organization": "Telefonica Germany",
        "isp": "Telefonica Germany GmbH & Co.OHG"
    },
    "location": {
        "geonames_id": null,
        "latitude": 48.17570877075195,
        "longitude": 11.537500381469727,
        "zip": "80992",
        "continent": {
            "code": "EU",
            "name": "Europe",
            "name_translated": "Europe"
        },
        "country": {
            "alpha2": "DE",
            "alpha3": "DEU",
            "calling_codes": [
                "+49"
            ],
            "currencies": [
                {
                    "symbol": "€",
                    "name": "Euro",
                    "symbol_native": "€",
                    "decimal_digits": 2,
                    "rounding": 0,
                    "code": "EUR",
                    "name_plural": "Euros"
                }
            ],
            "emoji": "🇩🇪",
            "ioc": "GER",
            "languages": [
                {
                    "name": "German",
                    "name_native": "Deutsch"
                }
            ],
            "name": "Germany",
            "name_translated": "Germany",
            "timezones": [
                "Europe/Berlin",
                "Europe/Busingen"
            ],
            "is_in_european_union": true
        },
        "city": {
            "name": "Munich",
            "name_translated": "Munich"
        },
        "region": {
            "fips": null,
            "alpha2": null,
            "name": "Bavaria",
            "name_translated": "Bavaria"
        }
    }
}
 */