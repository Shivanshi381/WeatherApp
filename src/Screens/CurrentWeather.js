import React from "react"
import {View, Text,SafeAreaView,StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText  from "../components/RowText"
import { weatherType } from "../utilities/weatherType.js"
//  {}used becos we r importing object and not a component  

const CurrentWeather = () =>{
  const{wrapper,container,temp,feels,HighLowwrapper,HighLow,bodyWrapper,description,message}=styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        
       
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels Like 5</Text>
        <RowText messageOne={'High:8'} messageTwo={' Low:6'} containerStyles={HighLowwrapper} messageOneStyles={HighLow} messageTwoStyles={HighLow}/>
       
        </View>
        <RowText messageOne={'Its Sunny'} messageTwo={weatherType['Thunderstorm'].message} containerStyles={bodyWrapper} messageOneStyles={description} messageTwoStyles={message} />
       
     
    </SafeAreaView>
    
  )
}
const styles=StyleSheet.create({
  wrapper:{
    flex:1,
    backgroundColor:'lightblue'
  },
  container:{
    
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    // makes the whole content justfied in center of the page
  },
  temp:{
    color:'black',
    fontSize:48

  },
  feels:{
    color:'black',
    fontSize:30
  },
  HighLow:{
    color:'black',
    fontSize:20

  },
  HighLowwrapper:{
    flexDirection:'row'
  },
  bodyWrapper:{
    justifyContent:'flex-end',
    alignItems:'flex-start',
    paddingLeft:25,
    marginBottom:40
  },
  description:{
    fontSize:48
  },
  message:{
    fontSize:30
  }
 
})
export default CurrentWeather