import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CountryList from "./CountryList";
import Country from "./Country";

const Stack = createStackNavigator();

export default function CountryData() {
    return(        
        <Stack.Navigator>
            <Stack.Screen name="Country List" component={CountryList} />
            <Stack.Screen name="Country" component={Country} />
        </Stack.Navigator>
    )
}