import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from './src/components/Tabs'
import Counter from './src/demonstration/Counter'
const App = () => {
  return (
    <NavigationContainer>
      {/* we want to wrap all components inside tab navigator  */}
      {/* <Tabs /> */}
      <Counter />
    </NavigationContainer>
  );
};

export default App;
