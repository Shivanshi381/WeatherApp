import React from "react" 
import { FlatList, SafeAreaView ,StyleSheet,Text, View} from "react-native"
// we have declared a variable data it is having array which is having 3 objects 
const DATA=[
    {
        dt_txt:"2024-03-24 12:00:00",
        main:{
            temp_max:8.55,
            temp_min:7.55
        },
        weather:[{
            min:'Clear'
        }]
    },
    {
        dt_txt:"2024-03-24 15:00:00",
        main:{
            temp_max:8.55,
            temp_min:7.55
        },
        weather:[{
            min:'Clouds'
        }]
    },
    {
        dt_txt:"2024-03-24 18:00:00",
        main:{
            temp_max:8.55,
            temp_min:7.55
        },
        weather:[{
            min:'Rain'
        }]
    }
]
// creating a component item ,we r defining props in the parameter
const Item =(props)=>{
    // convenient nd clean way to access props inside the component 
    const {dt_txt,min,max,condition}=props
    return (
        <View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
        </View>

    )
}
const UpcomingWeather=()=>{
    return (
        <SafeAreaView styles={styles.container}>
            <Text>Upcoming Weather</Text>
            <FlatList
            // passing data here 
            data={DATA}
            renderItem={}
            />
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1
    }
})
export default UpcomingWeather