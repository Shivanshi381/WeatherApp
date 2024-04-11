import React, { useState ,useEffect} from "react";
import { ActivityIndicator, View, StyleSheet,Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from './src/components/Tabs'
import * as Location from 'expo-location'
import {WEATHER_API_KEY} from '@env'
import { useGetWeather } from "./src/hooks/useGetWeather";
const App = () => {
  const[loading,error,weather]=useGetWeather()
  console.log(loading,error,weather)
  
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
