import React from "react"
import {View, Text,SafeAreaView,StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons';
const CurrentWeather = () =>{
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        
       
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels Like 5</Text>
        <View style={styles.HighLowwrapper}>
        <Text style={styles.HighLow}>High:8</Text>
        <Text style={styles.HighLow}> Low:6</Text>
        </View>
        </View>
       <View style={styles.bodyWrapper}>
        <Text style={styles.description}>Its Sunny</Text>
        <Text style={styles.message}>Its Perfect t-shirt weather</Text>
       </View>
     
    </SafeAreaView>
    
  )
}
const styles=StyleSheet.create({
  wrapper:{
    flex:1,
    backgroundColor:'pink'
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