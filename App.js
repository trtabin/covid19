import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from "./assets/components/Header";
import Body from "./assets/components/Body";



export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <StatusBar hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
