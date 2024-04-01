import React from "react";
import { View, Text, StyleSheet } from 'react-native'; // Correct import statement
import { Feather } from '@expo/vector-icons';

const IconText = (props) => {
    const { iconName, iconColor, bodyText, bodyTextStyles } = props;
    const{container,textTheme}=styles
    return (
        <View style={container}>
            <Feather name={iconName} size={50} color={iconColor} />
            <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
            {/* array becos we ll be passing multiple sets of styles  */}
        </View>
    );
}

const styles = StyleSheet.create({ 
    container:{
        alignItems:'center'
        
    },
    textTheme: {
        fontWeight: 'bold'
    }
    
});

export default IconText;
