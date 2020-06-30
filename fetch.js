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
    console.log(list)
    
}

function addPeople(object){
    // console.log(object)
    // const ul = document.querySelector("ul")
    // const li = document.createElement("li")

    // ul.appendChild(li)
}

fetchPeople();
peoplesList();
addPeople();

//JSON 

// https://swapi.dev/api/people/.json
    



