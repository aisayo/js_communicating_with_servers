document.addEventListener("DOMContentLoaded", function() {
    fetchCharacters();
  });


function fetchCharacters(){
    fetch("https://swapi.dev/api/people/")
    .then(function(resp){
        return resp.json()
    })
    .then(function(people){
        const char = people["results"]
        addChar(char)
        //returns an array objects with all characters
    })
}


function addChar(char){
    console.log(char)
    // array of objects, iterate over it to access each element
    for (const x of char){
        console.log(x)
        const new_char = Object.assign({}, x, { school: "Flatiron School"})
        console.log(new_char)
     appendChar(x)
    }
}

function appendChar(c){
    const ul = document.querySelector("ul")
    const li = document.createElement("li")
    const innerLi = document.createElement("ol")
    li.innerHTML = c.name
    innerLi.innerHTML = "Gender: " + c.gender
    li.appendChild(innerLi)
    ul.appendChild(li)
}























// Fetching Data

// function fetchCharacters(){
//     fetch("https://swapi.dev/api/people/")
    
//         .then(function(resp){
//             return resp.json();
//         })

//         .then(function(json){
//             peoplesList(json["results"])
//         })
// }

// function peoplesList(list){
//     for (const person in list){
//         //console.log(list[person])
//         addPeople(list[person])
//     }

// }

// function addPeople(object){
//     //console.log(object)
//      const ul = document.querySelector("ul")
//      const h3 = document.createElement("h3")
//      h3.innerText = "Name:" + " " + object.name
//      ul.appendChild(h3)
//      checkStarship(object.starships)

// }

// function checkStarship(starship){
//     //console.log(starship)
//     if (starship.length !== 0){
//         for (const s of starship){
//             fetchStarship(s)
//         }
//     } else {
//         return "Not Available"
//     }
// }

// function fetchStarship(s){

//     fetch(`${s}`)
//     .then(function(resp){
//         return resp.json();
//     })

//     .then(function(json){
//         const header = document.querySelector("h3")
//         console.log(header)
//         const li = document.createElement("li")
//         li.innerText = "Starship:" + " " + json.name
//         header.appendChild(li)
//     })
// }


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