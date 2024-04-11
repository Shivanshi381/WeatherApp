import React, { useState, useEffect } from "react";
import * as Location from 'expo-location'; // Importing Location module from Expo
import { WEATHER_API_KEY } from '@env'; // Importing weather API key from environment variables

// Custom hook for fetching weather data
export const useGetWeather = () => {
  // State variables for loading state, location data, error message, weather data, latitude, and longitude
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  // Function to fetch weather data from the API
  const fetchWeatherData = async () => {
    try {
      // Fetch weather data using latitude, longitude, and API key
      const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
      const data = await res.json(); // Parse the response as JSON
      setWeather(data); // Set weather data state
    } catch (e) {
      setError('Could not fetch weather'); // Handle error if fetching data fails
    } finally {
      setLoading(false); // Set loading state to false after fetching data
    }
  };

  // Effect hook to fetch location and weather data on component mount and when latitude and longitude change
  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionAsync(); // Request permission to access device location
        if (status !== 'granted') { // If permission is not granted, set error message
          setError('Permission to access location was denied');
          return;
        }
        let location = await Location.getCurrentPositionAsync({}); // Get current device location
        setLat(location.coords.latitude); // Set latitude state
        setLon(location.coords.longitude); // Set longitude state
        await fetchWeatherData(); // Fetch weather data using location coordinates
      } catch (error) {
        setError(error.message); // Handle any errors
      }
    })();
  }, [fetchWeatherData]); // Dependencies: Fetch weather data function

  // Return loading state, error message, and weather data
  return [loading, error, weather];
};
