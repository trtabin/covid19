import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CountryList from "./CountryList";
import Country from "./Country";

const Stack = createStackNavigator();

export default function CountryData() {
    return(        
        <Stack.Navigator initialRouteName="CountryList" screenOptions={{
            headerStyle: {
                backgroundColor: 'rgb(63, 65, 78)',
                height: 80,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize:23
            },
            }}>
            <Stack.Screen name="CountryList" component={CountryList} />
            <Stack.Screen name="Country" component={Country} />
        </Stack.Navigator>
    )
}