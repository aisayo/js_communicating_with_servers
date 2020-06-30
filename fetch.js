// Fetching Data

function fetchPeople(){
    fetch("https://swapi.dev/api/people/")
    
        .then(function(resp){
            return resp.json();
        })

        .then(function(json){
            peoplesList(json["results"])
        })
}

function peoplesList(list){
    for (const person in list){
        //console.log(list[person])
        addPeople(list[person])
    }

}

function addPeople(object){
    console.log(object)
     const ul = document.querySelector("ul")
     const li = document.createElement("li")
     li.innerText = object.name
    ul.appendChild(li)
}

fetchPeople();

//JSON 

// https://swapi.dev/api/people/.json
    


// For..of

// const myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
 
// for (const element of myArray) {
//   console.log(element);
// }


// For...in

// const address = {
//     street1: '11 Broadway',
//     street2: '2nd Floor',
//     city: 'New York',
//     state: 'NY',
//     zipCode: 10004
//   };
   
//   for (const key in address) {
//       console.log(address[key]);
//   }