import React from "react"
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Header from "./Header";
import Body from "./Body";

export default function Home({ navigation }) {
    return(
        <View style={styles.container}>
            <Header props={{header:"Covid-19 Statistics"}} />
            <Body />
            <StatusBar hidden={true} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });