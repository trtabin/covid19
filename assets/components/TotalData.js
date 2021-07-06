import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
export default function TotalData({data}) {
    return(
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.active}>
                    <Text style={{color:'#687089'}}>Total Cases</Text>
                    <Text style={{textAlign:"right", color:'#303139', fontSize:18,fontWeight:'bold'}}>{(data.cases/1000000).toFixed(2)} M</Text>
                </View>
                <View style={styles.active}>
                    <Text style={{color:'#687089'}}>Active Cases</Text>
                    <Text style={{textAlign:"right", color:'#303139', fontSize:18,fontWeight:'bold'}}>{(data.active/1000000).toFixed(2)}M</Text>
                </View>
            </View>

            <View style={styles.subContainer}>
                <View style={styles.active}>
                    <Text style={{color:'#687089'}}>Recovered</Text>
                    <Text style={{textAlign:"right", color:'#303139', fontSize:18,fontWeight:'bold'}}>{(data.recovered/1000000).toFixed(2)}M</Text>
                </View>
                <View style={styles.active}>
                    <Text style={{color:'#687089'}}>Death</Text>
                    <Text style={{textAlign:"right", color:'#303139', fontSize:18,fontWeight:'bold'}}>{(data.deaths/1000000).toFixed(2)}M</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width: windowWidth,
      backgroundColor: "#fff",
      flex:1,
    },
    subContainer: {
        width: windowWidth,
        flex:1,
        flexDirection:'row',
        justifyContent:"space-between"
    },
    active: {
        width:140,
        height:100,
        borderRadius:10,
        borderWidth:.4,
        borderColor: "rgba(00,00,00,.25)",
        padding: 10,
        margin:10,
        flex:1,
        justifyContent:'space-around'
    },
    topCountries: {
        borderRadius:1,
        borderWidth:.4,
        borderColor: "rgba(00,00,00,.25)",
        margin:10,
        padding:10,
        marginBottom:50,
    },
    contryContainer: {
        marginBottom:10,
        padding: 10,
        borderColor: "#fff",
        borderBottomColor:"rgba(00,00,00,.25)",
        borderWidth:.4,
    },
    countryData: {
        color: '#rgba(26,32,38,.8)',
        fontSize:12,
    }

  });