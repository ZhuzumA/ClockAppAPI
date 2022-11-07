# Frontend Mentor - Clock app solution

This is a solution to the [Clock app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clock-app-LMFaxFwrM). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- View the current time and location information based on their IP address
- View additional information about the date and time in the expanded state
- Be shown the correct greeting and background image based on the time of day they're visiting the site
- Generate random programming quotes by clicking the refresh icon near the quote

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript
- APIs


### What I learned

I learned how to implement API data to a project, get data and manipulate them in a separate functions using an async function. Also what was new for me is using many cases in Switch statements. So I used the Switch statement to place correct data on the page according to the current time.


```js
const getData = async () => {
	const res = await fetch("http://worldtimeapi.org/api/ip");
if (!res.ok) {
	throw new Error(`${res.status}: ${await res.text()}`);
}
return res.json();
}
```
```js
switch (parseInt(greetingsTime)) {
case 17: case 18: case 19: case 20:
		  document.getElementById('greetings').innerHTML = "Good evening";
		  sunIcon.remove();
		  break;
```

### Continued development

I definetly focusing more on learning React, I believe with React I would done this project faster. And I will practice more on Responsivness, not only with Flexbox but also using Grid.


## Author

- Frontend Mentor - [@ZhuzumA](https://www.frontendmentor.io/profile/ZhuzumA)
- Gmail - (zhuzum@gmail.com)

