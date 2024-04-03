import React from 'react'
import {View,Text,Button,StyleSheet} from 'react-native'
const Counter=()=>{
    let count=0
    return (
        <View style={styles.container}>
            <Text style=
            {styles.title}>{`count:${count}`}</Text>
            {/* count:${count}: This is a template literal string where ${count} is used to embed the value of the count variable within the string. The backticks (`) indicate the start and end of the template literal string. */}
            <Button  
                color={'red'} 
                title={'Increase the count'}
                onPress={()=>{
                    count ++ 
                    console.log(count)}}/>
            <Button
             color={'green'} 
             title={'Decrease the count'}
             onPress={()=>{
                 count --
                }}/>
        </View>

)
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgorundColor:'orange'

    },
    title:{
        alignSelf:'center',
        fontSize:25,
        marginTop:25
    }
})

export default Counter