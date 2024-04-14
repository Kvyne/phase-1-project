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
    