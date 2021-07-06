import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image } from 'react-native';

import Body from "./assets/components/Body";
import Home from "./assets/components/Home";
import CountryData from "./assets/components/CountryData";

const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator tabBarOptions = {{
        showLabel:false,
        style: {
          backgroundColor:'rgb(63, 65, 78)',
          position: 'absolute',
          bottom: 5,
          left:5,
          right:5,
          borderRadius:15,
        }
      }} >
        <Tab.Screen name="Body" component={Body} options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems:'center',justifyContent:'center'}}>
                <Image 
                  source={require('./assets/Icons/home.png')}
                  resizeMode = "contain"
                  style={{width:20,height:20, tintColor:focused?"#fff":"rgba(255, 255, 255,.5)"}} />
                <Text style={{color:focused?"#fff":"rgba(255, 255, 255,.5)"}}>Home</Text>
              </View>
            )
        }} />
        <Tab.Screen name="CountryData" component={CountryData}  options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems:'center',justifyContent:'center'}}>
                <Image 
                  source={require('./assets/Icons/list.png')}
                  resizeMode = "contain"
                  style={{width:20,height:20, tintColor:focused?"#fff":"rgba(255, 255, 255,.5)"}} />
                <Text style={{color:focused?"#fff":"rgba(255, 255, 255,.5)"}}>Country</Text>
              </View>
            )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


