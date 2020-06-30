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

### Fetch()

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
  * Here is where you tell JS to ask network response to be turned into JSON

3. `.then(function(json){ }`

  * Use this data inside of json to do DOM manipulation

### JSON

* Javascript Object Notation
* A string that JS knows how to turn into an object
* A way to send a collection of data across the internet
* Formats and organizes data
* Allows for large and complicated amounts of data to be shared across platforms
  * <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON>
  * <https://www.w3schools.com/whatis/whatis_json.asp>

### Objects

* Great at modeling more complex structures
* `key/value` based data structure
* A way to store all information in a single data structure while maintaining a descriptive naming scheme
  * <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects>

#### What is an object?

* Collection of properties bound by curly braces
* Can point to values of any data type, even other objects
  * Empty objects `{}`
  * Single key/value pair `{ key: value }`
  * Multiple key/value pairs `{ key: value, key: value }`
* Key’s inside objects are identifiers for the real data we want from an object
  * Keys must be unique

#### Accessing object values

  1. Dot notation - go to strategy

* To access a property with dot notation, the key must follow the same naming rules applied to variables and functions
    * Camel case everything
    * Start with a lowercase letter
    * No spaces or punctuation
* All key’s are strings
* Will not evaluate variables
* Should be used when you know exact name of property

  2. Bracket notation
    * Need to be strings
    * Can also use bracket notation to access properties dynamically
    * Comes in handy when iterating over objects

* <https://codeburst.io/javascript-quickie-dot-notation-vs-bracket-notation-333641c0f781>
* <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors>
