import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from './src/components/Tabs'

const App = () => {
  return (
    <NavigationContainer>
      {/* we want to wrap all components inside tab navigator  */}
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
