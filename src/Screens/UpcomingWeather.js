import React from "react" 
import { FlatList, SafeAreaView ,StyleSheet,Text, View,StatusBar,ImageBackground} from "react-native"
// we have declared a variable data it is having array which is having 3 objects 
import {Feather} from '@expo/vector-icons'
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
        <View style={styles.item}>
            <Feather name={'sun'} size={50} color={'white'} />
            {/* curly braces used in case of props  */}
            <Text style={styles.date}>{dt_txt}</Text>
            <Text style={styles.temp}>{min}</Text>
            <Text style={styles.temp}>{max}</Text>
        </View>

    )
}
const UpcomingWeather = () => {
    const renderItem = ({ item }) => (
        <Item condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />
    );


    
    return (
        <SafeAreaView style={styles.container}>
            <Text>Upcoming Weather</Text>
            <ImageBackground source={require('../../assets/Upcoming_background.jpg')}  style={styles.Image}>
                <FlatList
                    // passing data here 
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item)=>item.dt_txt}
                />
            </ImageBackground>
        </SafeAreaView>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor:'teal'
    },
    item:{
        padding:20,
        marginVertical:8,
        marginHorizontal:16,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderWidth:5,
        backgroundColor:'pink'

    },
    temp:{
        color:'white',
        fontSize:20
    },
    date:{
        color:'white',
        fontSize:15
    },
    Image:{
      flex:1
    }
})
export default UpcomingWeather