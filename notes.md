# Communicating With The Server

## Reminder of 3 pillars of web programming

1. Manipulating the DOM
2. Creating Events
3. Communicating with the server

## AJAX

* Stands for: Asynchronous JavaScript and XML
* Make requests to the server without reloading web page
* Moves fast and keeps user experience positive
* User see’s html and css, and behind the scenes JS fills in the rest of the action we want the page to offer
* Data sent back from the server is not html, it is JSON
* Allows to pull in dynamic content: updating without page loads
* Gmail!
* Allows getting data from multiple sources

  * <https://www.w3schools.com/xml/ajax_intro.asp>
  * <https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX>
  * <https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started>

### AJAX Technologies

* Promise(s)
* XMLHttpRequestObjects
* JSON
* Asynchronous input/output
* The event loop

* Modern browsers have abstracted all those components into a single function called `fetch()`

## Fetch()

* Very new to browsers
* Older code uses jquery.ajax or $.ajax
* Web users expect sites to load quickly and stay updated
* Abstraction of all AJAX technologies
* A function that retrieves data
* Global method on window object
* Can use in DevTools
  * <https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API>


### Fetching data with fetch() => Let’s break it down!

1. `fetch(“going to pass in a string representing URL to data source”)`

  * Will return an object that represents what we got from the data source. Not the actual content

2. `.then(function(response){ return response.json() })`

  * Taking in a function as an argument that receives the response as its argument

  * Need to return content that we have gotten out of response
  * Response can have some basic functions but most important ones are `.json()` & .`text()`
  * Usually one line: returning content from response
  * Here is where you tell js to ask network response to be turned into JSON

3. `.then(function(json){ }`

  * Use this data inside of json to do DOM manipulation
