Introduction
This Weather App provides real-time weather information for the user's current location and allows users to search for weather data in other cities or zip codes. The app displays the current temperature, weather conditions, date, time, and additional details such as sunrise and sunset times.

Features
Real-time weather updates for the user's current location.
Search functionality to find weather data for any city or zip code.
Displays temperature in Celsius and Fahrenheit.
Shows current date and time.
Includes additional weather details like humidity, sunrise, and sunset times.
Responsive design for use on various devices.
Technologies Used
React: JavaScript library for building user interfaces.
Axios: Promise-based HTTP client for making API requests.
OpenWeather API: Provides weather data.
React Live Clock: Real-time clock component.
React Animated Weather: Animated weather icons.
Getting Started
Follow these instructions to set up the project on your local machine.

Prerequisites
Node.js and npm installed on your machine.
OpenWeather API key.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/weather-app.git
cd weather-app
Install dependencies:

bash
npm install

Create a file named apiKeys.js in the src directory and add your OpenWeather API key:

javascript

// src/apiKeys.js
const apiKeys = {
  key: 'YOUR_API_KEY_HERE',
  base: 'https://api.openweathermap.org/data/2.5/',
};

export default apiKeys;
Start the development server:

bash
npm start

Usage
Open the app in your web browser.
By default, the app will detect your current location and display the weather information.
Use the input field to enter a city name or zip code and click "Search" to get the weather data for the specified location.
