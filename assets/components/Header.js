import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header(){
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Covid-19 Statistics</Text>
            {/* <View style={styles.footer}>
                <Text style={styles.tab}>Today</Text>
                <Text style={styles.tab}>Total</Text>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      height: 90,
      width: '100%',
      backgroundColor: 'rgb(63, 65, 78)',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      padding:25,
      paddingBottom:0,
    },
    header: {
        color: "#fff",
        fontSize: 25,
        fontWeight: "bold",
    },
    footer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-around',
        marginTop: 35,
    },
    tab: {
        color: "#fff",
        fontSize: 15,
        fontWeight: 'bold'
    }
  });