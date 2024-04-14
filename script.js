// Waits until the HTML document is fully loaded before running the function
document.addEventListener('DOMContentLoaded', function() {
  // Gets the form element by its ID
    const form = document.getElementById('bmiForm');

     // Add an event listener to the form for the 'submit' event
    form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission via HTTP

    // Retrieve the user's age, weight, and height from the form inputs by their IDs
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    
     // URL of the API endpoint that calculates BMI
    const url = 'https://fitness-calculator.p.rapidapi.com/bmi';
    const params = new URLSearchParams({
    age: age,
    weight: weight,
    height: height,
    });
    
    // Create URL search parameters with the user's age, weight, and height
    // the API key and host for authentication and authorization
    const options = {
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': '81bc4d1383msh8415e6041caaabdp10080ejsn7170723b4f79',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
    }
    };

    // Making a fetch request to a specified URL with parameters and options
        fetch(`${url}?${params}`, options)
    .then(response => {

          // Checking if the response is not okay
    if (!response.ok) {
        // Parsing the response body as json and throwing an error
    return response.json().then(json => {
    throw new Error(`err.message` ||'Network response was not ok');
    }).catch(() => {
    // If parsing the response body fails, throw a generic error
    throw new Error('Network response was not ok and error details could not be parsed');
    });
    }
    // If the response is okay, parsing the response body as json
    return response.json();
    })
    .then(data => {
           // Accessing the 'data' property from the response and updating the result in the HTML
    document.getElementById('result').innerText = `Your BMI is ${data.data.bmi}, which is considered ${data.data.health}. Healthy BMI range is ${data.data.healthy_bmi_range}.`;
    // Resetting the form after displaying the result
    form.reset();
    })
    .catch(error => {
        // Catching any errors that occur during the fetch request and logging the error
    console.error('Fetch error:', error);