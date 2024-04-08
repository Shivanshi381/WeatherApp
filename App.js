import React, { useState ,useEffect} from "react";
import { ActivityIndicator, View, StyleSheet,Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from './src/components/Tabs'
import * as Location from 'expo-location'
import {WEATHER_API_KEY} from '@env'
const App = () => {
  const [loading, setLoading] = useState(true);
  const [location,setLocation]=useState(null);
  const[error,setError]=useState(null);
  const [weather,setWeather]=useState([]);
  const[lat,setLat]=useState([])
  const[lon,setLon]=useState([])
  constfetchWeatherData=asyn() => {
  try{
    const res=await fetch{`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}  `}
    const data=await Response.json()
    setWeather(data)
  
  }
  catch(e){
    setError('Could not fetch weather')

  }finally{
    setLoading(false)
  }
  
  
  useEffect(() => {
     // using async func 
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setError('Permission to access location was denied');
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLat(location.coords.latitude)
        setLon(location.coords.longitude)
        await fetchWeatherData()
      
    })();
     // as we want to immediately invoke this at the end of function we r using set of parenthesis 
  }, [lat,lon]);
    // passing empty array inside useeffect for the dependencies as it is empty this means that there r no dependencies and use effect will only run once when component is first rendered
if (weather){
  console.log(weather)
}
if (location){
  console.log(location)
}
  // Set loading to true as when the app launches it will see the activity indicator
  if (loading) {
    return (
      <View style={styles.container}> 
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    );
  }
 
  return (
    <NavigationContainer>
      {/* We want to wrap all components inside tab navigator */}
      <Tabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
});

export default App;
