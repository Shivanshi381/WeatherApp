import React from "react"
import { View,Text, StyleSheet } from "react-native"
import {Feather} from '@expo/vector-icons'
const ListItem =(props)=>{
    // convenient nd clean way to access props inside the component 
    const {dt_txt,min,max,condition}=props
    const{item,date,temp}=styles
    return (
        <View style={item}>
            <Feather name={'sun'} size={50} color={'white'} />
            {/* curly braces used in case of props  */}
            <Text style={date}>{dt_txt}</Text>
            <Text style={temp}>{min}</Text>
            <Text style={temp}>{max}</Text>
        </View>

    )
}
const styles=StyleSheet.create({
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
    }
})
export default ListItem