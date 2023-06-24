const weatherContainer = document.getElementById('weather-container');

// Define the URL to the Django endpoint that handles the weather data
const weatherUrl = '/weather/';

// Function to fetch the weather data and update the UI
const fetchWeatherData = (city) => {
  // Make the fetch request to the Django backend
  fetch(`${weatherUrl}?city=${city}`)
    .then(response => response.json())
    .then(data => {
      // Update the UI with the weather data
      const { city, temperature, description } = data;
      const weatherHtml = `<h3>${city}</h3><p>Temperature: ${temperature}°C</p><p>Description: ${description}</p>`;
      weatherContainer.innerHTML = weatherHtml;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      weatherContainer.innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
    });
};

// Example usage: fetch weather data when a form is submitted
const form = document.getElementById('weather-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const cityInput = document.getElementById('city-input');
  const city = cityInput.value;
  fetchWeatherData(city);
});