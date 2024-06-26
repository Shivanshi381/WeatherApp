import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text, StyleSheet, ImageBackground, View } from "react-native";
import IconText from "../components/IconText";

const City = () => {
    const{container,cityName,cityText,countryName,populationText,populationWrapper,riseSetText,riseSetWrapper,rowLayout,imageLayout}=styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/City_background.jpg')} style={imageLayout}>
                <Text style={[cityName, cityText]}>London</Text>
                <Text style={[countryName, cityText]}>UK</Text>
                <View style={[populationWrapper,rowLayout]}>
                    <IconText iconName={'user'} iconColor={'red'} bodyText={'8000'} bodyTextStyles={populationText} />
                </View>
                <View style={[riseSetWrapper,rowLayout]}>
                    <IconText iconName={'sunrise'} iconColor={'white'} bodyText={'10:46:48 am'} bodyTextStyles={riseSetText} />
                    <IconText iconName={'sunset'} iconColor={'white'} bodyText={'17:28:15 pm'} bodyTextStyles={riseSetText} />
                </View>
            </ImageBackground>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    imageLayout: {
        flex: 1
    },
    cityName: {
        fontSize: 40
    },
    countryName: {
        fontSize: 30
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    populationWrapper: {
        
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
        textAlign: 'center'
    },
    riseSetWrapper: {
       
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: 'white'
    },
    rowLayout:{
        flexDirection:'row',
        alignItems:'center'
    }
});

export default City;
