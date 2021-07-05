import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./assets/components/Home";
import CountryData from "./assets/components/CountryData";

const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Country Data" component={CountryData}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


