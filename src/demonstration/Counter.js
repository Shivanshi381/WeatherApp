import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [newCount, setNewCount] = useState(0);

    // [count] is the dependency array and value is updated only for count and not newCount
    // Square brackets are using array destructuring
    // useState is used for setting up some state for our component 
    // Here 0 is the initial value, setCount is the function used to pass new value of count
    // UseEffect with dependency array to log when count changes
    useEffect(() => {
        console.log('Count Changed');
        // Cleanup function for useEffect
        return () => {
            console.log('useEffect cleanup');
        };
    }, [count]);

    return (
        <View style={styles.container}>
            {/* Display current value of count */}
            <Text style={styles.title}>{`count: ${count}`}</Text>
            {/* Button to increase count */}
            <Button
                color={'red'}
                title={'Increase the count'}
                onPress={() => setCount(count + 1)}
            />
            {/* Button to decrease count */}
            <Button
                color={'green'}
                title={'Decrease the count'}
                onPress={() => setCount(count - 1)}
            />
            {/* Display current value of newCount */}
            <Text style={styles.title}>{`newCount: ${newCount}`}</Text>
            {/* Button to increase newCount */}
            <Button
                color={'red'}
                title={'Increase the newCount'}
                onPress={() => setNewCount(newCount + 1)}
            />
            {/* Button to decrease newCount */}
            <Button
                color={'green'}
                title={'Decrease the newCount'}
                onPress={() => setNewCount(newCount - 1)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange'
    },
    title: {
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 25
    }
});

export default Counter;
