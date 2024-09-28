import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Weather = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [error, setError] = useState('');

    const API_KEY = 'dd3c83dcbff8dcb138dd19aac8a3a6ff'; // Replace with your API key
    const cities = ['Delhi', 'Lucknow', 'Chandigarh', 'Srinagar', 'Hyderabad'];

    useEffect(() => {
        // Function to fetch weather data for a given city
        const fetchWeatherForCities = async () => {
            try {
                const promises = cities.map(async (city) => {
                    const response = await axios.get(
                        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
                    );
                    return response.data;
                });

                const results = await Promise.all(promises);
                setWeatherData(results);
                setError('');
            } catch (err) {
                setError('Error fetching weather data.');
                setWeatherData([]);
            }
        };

        fetchWeatherForCities();
    }, []);
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 flex justify-center items-center">
            <div className="w-full max-w-4xl">
                <h1 className="text-4xl font-bold text-center text-white mb-10">Weather in Five Cities</h1>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {weatherData.length > 0 && weatherData.map((weather, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-bold text-gray-800">{weather.name}</h2>
                            <p className="text-lg text-gray-600">Temperature: {weather.main.temp}°C</p>
                            <p className="text-lg text-gray-600">Condition: {weather.weather[0].description}</p>
                            <p className="text-lg text-gray-600">Humidity: {weather.main.humidity}%</p>
                            <p className="text-lg text-gray-600">Wind Speed: {weather.wind.speed} m/s</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Weather