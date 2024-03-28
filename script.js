// Sample resource data (can be replaced with actual data)
const resources = [
    { title: "Mental Health Help", link: "https://www.nyc.gov/site/doh/health/health-topics/nyc-well.page" },
    { title: "Mental Health Information ", link: "https://www.samhsa.gov/mental-health" },
    { title: "Mental Health Activists", link: "https://www.goodgoodgood.co/articles/mental-health-activists" }
];

// Function to dynamically populate resource list
function populateResources() {
    const resourceList = $('#resource-list'); // Using jQuery for DOM manipulation
    resources.forEach(resource => {
        const li = $('<li></li>');
        const a = $('<a></a>').attr('href', resource.link).text(resource.title);
        li.append(a);
        resourceList.append(li);
    });
}

// Event listener for form submission
$('#contact-form').submit(function(event) {
    event.preventDefault(); // Prevent default form submission
    // Logic to handle form submission (e.g., sending data to server)
    // This can be implemented based on your backend setup
    alert('Thank you for your message!');
});

// Populate resources on page load
$(document).ready(function() {
    populateResources();
});

// Variable declaration and manipulation
let exampleVariable = 10;
console.log(exampleVariable); // Output: 10

// Data type identification and manipulation
let exampleString = "Hello";
let exampleNumber = 5;
console.log(typeof exampleString); // Output: string
console.log(typeof exampleNumber); // Output: number

// Complex conditional statements
let condition1 = true;
let condition2 = false;
if (condition1 && !condition2) {
    console.log("Condition 1 is true and Condition 2 is false");
} else {
    console.log("Conditions not met");
}

// Organize data in an array
let numbersArray = [1, 2, 3, 4, 5];

// Access data from an array and iterate over it
for (let i = 0; i < numbersArray.length; i++) {
    console.log(numbersArray[i]);
}

// Using array methods
let doubledArray = numbersArray.map(num => num * 2);
console.log(doubledArray);

// Use .val() to retrieve value from input field
const nameValue = $('#name').val();
console.log("Name value:", nameValue);

// Iterate over an array and display items using flexbox
const arrayItemsDiv = $('#array-items');
numbersArray.forEach(num => {
    const itemDiv = $('<div></div>').addClass('array-item').text(num);
    arrayItemsDiv.append(itemDiv);
}); 