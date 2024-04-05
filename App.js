import React, { useState ,useEffect} from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from './src/components/Tabs'

const App = () => {
  const [loading, setLoading] = useState(true);
  const [location,setLocation]=useState(null);
  const[error,setError]=useState(null)

  // Set loading to true as when the app launches it will see the activity indicator
  if (loading) {
    return (
      <View style={styles.container}> 
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {/* We want to wrap all components inside tab navigator */}
      <Tabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
});

export default App;
