import React from "react"
import CurrentWeather from "./src/Screens/CurrentWeather"
import UpcomingWeather from "./src/Screens/UpcomingWeather"
import City from "./src/Screens/City"
import IconText from "./src/components/IconText"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
// Initializing tab Object(
const Tab=createBottomTabNavigator()
const App =()=>{

  return (
    <NavigationContainer>
      {/* we want to wrap all components inside tab navigator  */}
      <Tab.Navigator>
        <Tab.Screen name={'Current'} component={CurrentWeather}/>
        <Tab.Screen name={'Upcoming'} component={UpcomingWeather}/>
        <Tab.Screen name={'City'} component={City}/>
    
  
    
    {/* rendering currentweather inside the component  */}
   
    </Tab.Navigator>
    </NavigationContainer>
    
  )


}

export default App