import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView,Text,StyleSheet,ImageBackground,StatusBar } from "react-native";
const City=()=>{
return(
    <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../../assets/City_background.jpg')} style={styles.imageLayout}>
            <Text>London</Text>
            <Text>UK</Text>
            
        </ImageBackground>
    </SafeAreaView>
)
}
const styles=StyleSheet.create({
    // over here container is an attribute 
    conatiner:{flex:1,
        marginTop:StatusBar.currentHeight || 0
    },
    imageLayout:{
        flex:1
    }

})
export default City