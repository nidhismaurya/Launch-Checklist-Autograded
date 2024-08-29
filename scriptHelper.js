// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   
    document.getElementById("missionTarget").innerHTML =
    
                `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src=${imageUrl}>`;
    
    
 }
 
 function validateInput(testInput) {
    if (testInput === ""){
        return "Empty";
    } else if (isNaN(testInput)){
        return "Not a Number";
    } else {
        return "Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    let faultyItems = document.getElementById("faultyItems");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let launchStatus = document.getElementById("launchStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let ready = true;
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
   copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(fuelLevel) === "Not a Number"|| validateInput(cargoMass) === "Empty"||  validateInput(cargoMass)=== "Not a Number") {
        alert("All fields are required!");
        faultyItems.style.visibility = 'visible';
        launchStatus.innerHTML = "Awaiting Information Before Launch";
        
            }
            if (fuelLevel < 10000) {
                ready = false;
                fuelStatus.innerHTML = "Fuel level too low for launch";
                //launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                faultyItems.style.visibility = "visible";
                launchStatus.style.color = "red";
            }else {
                fuelStatus.innerHTML = "Fuel level high enough for launch";
                //launchStatus.innerHTML = "Shuttle is Ready for launch";
                // faultyItems.style.visibility = "hidden";
                // launchStatus.style.color = "green";
            }
             if (cargoMass > 10000) {
               ready = false;
                cargoStatus.innerHTML = "Cargo mass too heavy for launch";
                faultyItems.style.visibility = "visible";
                launchStatus.style.color = "red";
            } else{
                cargoStatus.innerHTML = "Cargo mass low enough for launch";
                //launchStatus.innerHTML = "Shuttle is Ready for launch";
                // faultyItems.style.visibility = "hidden";
                // launchStatus.style.color = "green";
            }
            if (ready) {             
                launchStatus.innerHTML = "Shuttle is Ready for launch";
                launchStatus.style.color = "green";
                faultyItems.style.visibility = "hidden";
                cargoStatus.innerHTML = "Cargo mass low enough for launch"
                fuelStatus.innerHTML = "Fuel level high enough for launch";
            } else {
               launchStatus.innerHTML = "Shuttle Not Ready for Launch";  
               faultyItems.style.visibility = "visible";
               launchStatus.style.color = "red";
            }
        }
 
 async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        return response.json();
    });

    return planetsReturned;
}
 

        

 
 
 function pickPlanet(planets) {
    let randomPlanet= Math.floor(Math.random() * planets.length);
    return planets[randomPlanet];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;