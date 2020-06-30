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

#### Modifying Objects

* Key word: destructive = modifying original values
* `Object.assign()` & `Object.keys()`
* Can use spread operator but this involves more code to write
* Data in a const pointing to array or object can still be changed but the value of the const can not be reassigned

* `Object.assign()`
    * Object is a global object that has a bunch of helpful methods we can use
    * Allows us to combine properties from multiple objects into a single object
    * First argument is initial object
    * Every additional argument is an object whose properties we want to merge into the first object
     Passing an empty object to Object.assign() as first argument will create an entirely new object instead of modifying or overwriting the properties of an existing object
    * <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>
    * <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign>

* `Object.keys()`
    * Return value is an array containing all of the keys at the top level of the object
    * <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys>

* Removing a property from an Object
    * `delete object.property`
    * <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete>

* Arrays
    * Array’s are objects
    * Can set, modify and access properties on an array just like objects
    * For accessing elements in an array, always use integers
    * Be wary of setting object-style props on an array
    * All object keys, including array indexes are strings

* Object iteration

    * Looping vs Iteration
        * Looping is the process of executing a set of statements repeatedly until a condition is met
        * Great for when we want to do something a specific number of times 
        * Iteration is the process of executing a set of statements once for each element in a collection

    * For loop
        * < need examples >

    * While loop
        * < need examples >

    * For of loop
        * Much cleaner
        * <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of>
        * <need examples>

    * For in loop
        * Usually used for iterating over props of an object.
        * Only passes in th keys
        * To access value, need to combine passed in key with bracket operator
        * Does not iterate in order, so do not use on array
            * <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in>


* Traversing Nested Objects
    * Objects in objects
    * Values in an object can be other objects

#### Asynchrony

* Allows browsers to execute multiple functionalities, efficiently,
* `Synchronous` => one thing after the other
* `Asynchronous` => All tasks seem to be advancing at the same time
* Looks a lot like event handlers
* Do this thing, go do whatever other thing until this thing is done then go back to it and do some work

#### What’s an API?

* Application programming interface
* Data or functionality that is exposed to the public for use
* We can use JavaScript to send a web request to an api and receive a collection of JSON in return
* You can find documentation on an api page to help out and give a road map
    * <https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82>
