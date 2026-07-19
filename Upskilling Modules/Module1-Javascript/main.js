import {
    collegeName,
    displayPortalInfo,
    categories
} from "./eventModule.js";

// ======================================
// Exercise 1 - JavaScript Basics
// ======================================

console.log("Welcome to the Community Portal");

window.onload = function () {
    alert("Welcome! The Community Portal has loaded successfully.");
};

// ======================================
// Exercise 2 - Variables & Operators
// ======================================

const eventName = "Music Festival";
const eventDate = "25 July 2026";
let availableSeats = 100;

console.log(`Event Name : ${eventName}`);
console.log(`Event Date : ${eventDate}`);
console.log(`Available Seats : ${availableSeats}`);

availableSeats--;

console.log(`Remaining Seats : ${availableSeats}`);

// ======================================
// Exercise 3 - Events Array
// ======================================

const events = [

    {
        name: "Music Festival",
        date: "25 July 2026",
        category: "Music",
        seats: 50,
        isPast: false
    },

    {
        name: "Food Carnival",
        date: "30 July 2026",
        category: "Food",
        seats: 0,
        isPast: false
    },

    {
        name: "Marathon",
        date: "10 August 2026",
        category: "Sports",
        seats: 40,
        isPast: false
    }

];

// ======================================
// Exercise 4 - Functions
// ======================================

// Add Event

function addEvent(name, date, category, seats) {

    events.push({
        name: name,
        date: date,
        category: category,
        seats: seats,
        isPast: false
    });

    console.log(`${name} added successfully.`);
}

addEvent("Coding Workshop", "20 August 2026", "Education", 60);

// Register User

function registerUser(eventName) {

    try {

        let found = false;

        events.forEach(function (event) {

            if (event.name === eventName) {

                found = true;

                if (event.seats <= 0) {

                    throw new Error("No Seats Available.");

                }

                event.seats--;

                console.log(`Registered Successfully for ${event.name}`);
                console.log(`Remaining Seats : ${event.seats}`);
            }

        });

        if (!found) {

            console.log("Event Not Found.");

        }

    }

    catch (error) {

        console.log(error.message);

    }

}

registerUser("Music Festival");
registerUser("Food Carnival");

// Filter Events

function filterEventsByCategory(category) {

    console.log(`\n${category} Events`);

    events.forEach(function (event) {

        if (event.category === category) {

            console.log(event.name);

        }

    });

}

filterEventsByCategory("Music");

// Closure

function registrationCounter() {

    let total = 0;

    return function () {

        total++;

        console.log(`Total Registrations : ${total}`);

    };

}

const counter = registrationCounter();

counter();
counter();
counter();

// Higher Order Function

function displayEvents(callback) {

    callback(events);

}

displayEvents(function (list) {

    console.log("\nAll Events");

    list.forEach(function (event) {

        console.log(event.name);

    });

});

// ======================================
// Exercise 5 - Objects & Prototypes
// ======================================

class Event {

    constructor(name, date, category, seats) {

        this.name = name;
        this.date = date;
        this.category = category;
        this.seats = seats;

    }

}

Event.prototype.checkAvailability = function () {

    if (this.seats > 0) {

        console.log(`${this.name} : Seats Available (${this.seats})`);

    }

    else {

        console.log(`${this.name} : Event Full`);

    }

};

const event1 = new Event(
    "Music Festival",
    "25 July 2026",
    "Music",
    50
);

const event2 = new Event(
    "Food Carnival",
    "30 July 2026",
    "Food",
    0
);

event1.checkAvailability();
event2.checkAvailability();

console.log("\nEvent Details");

Object.entries(event1).forEach(function (entry) {

    console.log(entry[0] + " : " + entry[1]);

});

// ======================================
// Exercise 6 - Arrays & Methods
// ======================================

console.log("\n========== Exercise 6 ==========");

// push()

events.push({

    name: "Tech Expo",
    date: "28 August 2026",
    category: "Technology",
    seats: 80,
    isPast: false

});

console.log("Tech Expo Added Successfully");

// filter()

const availableEvents = events.filter(function(event){

    return event.seats > 0;

});

console.log("\nAvailable Events");

availableEvents.forEach(function(event){

    console.log(event.name);

});

// map()

const eventNames = events.map(function(event){

    return event.name;

});

console.log("\nEvent Names");

console.log(eventNames);

// find()

const sportsEvent = events.find(function(event){

    return event.category === "Sports";

});

console.log("\nSports Event");

console.log(sportsEvent);

// Display All Events

console.log("\nComplete Event List");

events.forEach(function(event){

    console.log(

        `${event.name} | ${event.category} | Seats : ${event.seats}`

    );

});

// ======================================
// Exercise 7 - DOM Manipulation
// ======================================

console.log("\n========== Exercise 7 ==========");

// Select Heading

const heading = document.getElementById("mainHeader");

heading.innerHTML = "Welcome to Community Event Portal using JavaScript";

// Select Event Container

const container = document.getElementById("eventContainer");

// Create New Card

const newCard = document.createElement("div");

newCard.className = "eventCard";

newCard.innerHTML = `
<h3>Science Exhibition</h3>
<p>Date : 5 September 2026</p>
`;

container.appendChild(newCard);

console.log("New Event Card Added");

// Remove Last Event Card after 5 seconds

setTimeout(function(){

    const cards = document.querySelectorAll(".eventCard");

    if(cards.length > 0){

        cards[cards.length-1].remove();

        console.log("Last Event Removed");

    }

},5000);

// ======================================
// Exercise 8 - Event Handling
// ======================================

console.log("\n========== Exercise 8 ==========");

// Button Click Event

const registerButton = document.getElementById("registerBtn");

registerButton.addEventListener("click", function () {

    alert("Registration button clicked!");

    console.log("Register Button Clicked");

});

// ======================================
// Exercise 9 - Form Validation
// ======================================

console.log("\n========== Exercise 9 ==========");

const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const nameError = document.getElementById("nameError");

    const emailError = document.getElementById("emailError");

    nameError.textContent = "";
    emailError.textContent = "";

    let isValid = true;

    if(name === ""){

        nameError.textContent = "Name is required";

        isValid = false;

    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!emailPattern.test(email)){

        emailError.textContent = "Enter a valid email address";

        isValid = false;

    }

    if(isValid){

        alert("Registration Successful!");

        console.log("Form Submitted Successfully");

        form.reset();

    }

});

// Keyboard Event

const nameInput = document.getElementById("name");

nameInput.addEventListener("keyup", function () {

    console.log("Typing : " + nameInput.value);

});

// Focus Event

nameInput.addEventListener("focus", function () {

    console.log("Name field focused");

});

// Blur Event

nameInput.addEventListener("blur", function () {

    console.log("Name field lost focus");

});

// ======================================
// Exercise 10 - Fetch API & Async/Await
// ======================================

console.log("\n========== Exercise 10 ==========");

// Promise Example

const promiseExample = new Promise(function(resolve){

    setTimeout(function(){

        resolve("Promise Executed Successfully");

    },2000);

});

promiseExample.then(function(message){

    console.log(message);

});

// Fetch Events

async function loadEvents(){

    try{

        const response = await fetch("events.json");

        const data = await response.json();

        console.log(data);

        const container = document.getElementById("fetchEvents");

        data.forEach(function(event){

            const card = document.createElement("div");

            card.className = "eventCard";

            card.innerHTML = `
                <h3>${event.name}</h3>
                <p>${event.date}</p>
            `;

            container.appendChild(card);

        });

    }

    catch(error){

        console.log("Fetch Error : ",error);

    }

}

loadEvents();

// ======================================
// Exercise 11 - Local Storage
// ======================================

console.log("\n========== Exercise 11 ==========");

// Get Form Elements
const registrationForm = document.getElementById("registrationForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");

// Load Saved Data (if available)
window.addEventListener("load", function () {

    const savedName = localStorage.getItem("userName");
    const savedEmail = localStorage.getItem("userEmail");

    if (savedName) {
        nameField.value = savedName;
    }

    if (savedEmail) {
        emailField.value = savedEmail;
    }

});

// Save Data on Form Submission
registrationForm.addEventListener("submit", function () {

    localStorage.setItem("userName", nameField.value);
    localStorage.setItem("userEmail", emailField.value);

    console.log("User details saved in Local Storage");

});

// Display Saved Data
console.log("Saved Name :", localStorage.getItem("userName"));
console.log("Saved Email :", localStorage.getItem("userEmail"));

// ======================================
// Exercise 12 - AJAX / Fetch API
// ======================================

console.log("\n========== Exercise 12 ==========");

async function fetchEventData() {

    try {

        const response = await fetch("events.json");

        if (!response.ok) {

            throw new Error("Unable to fetch event data.");

        }

        const events = await response.json();

        console.log("Event Data Received");

        events.forEach(function(event){

            console.log(
                `${event.name} - ${event.date}`
            );

        });

    }

    catch(error){

        console.log("Error :", error.message);

    }

}

fetchEventData();

// ======================================
// Exercise 13 - Using ES6 Modules
// ======================================

console.log("\n========== Exercise 13 ==========");

console.log("College Name :", collegeName);

displayPortalInfo();

console.log("Event Categories :");

categories.forEach(function(category){

    console.log(category);

});

// ======================================
// Exercise 14 - Final Project Integration
// ======================================

console.log("\n========== Exercise 14 ==========");

// Update Portal Status
const statusMessage = document.getElementById("statusMessage");

statusMessage.textContent = "Community Portal Ready!";

statusMessage.style.color = "green";

statusMessage.style.fontWeight = "bold";

// Display Current Date
const currentDate = new Date();

console.log("Today's Date :", currentDate.toDateString());

// Count Total Event Cards
const totalEvents = document.querySelectorAll(".eventCard").length;

console.log("Total Event Cards :", totalEvents);

// Project Summary
const features = [

    "Event Registration",

    "Form Validation",

    "DOM Manipulation",

    "Local Storage",

    "Fetch API",

    "ES6 Modules"

];

const summaryList = document.getElementById("summaryList");

features.forEach(function(feature){

    const li = document.createElement("li");

    li.textContent = feature;

    summaryList.appendChild(li);

});

console.log("Project Summary Loaded Successfully");

// Display Welcome Message
alert("Welcome to the Local Community Event Portal!");