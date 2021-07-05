import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, Text, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Body(){
    const [data,setData] = useState([{}]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState();

    useEffect(()=> {
        fetch("https://coronavirus-19-api.herokuapp.com/countries")
        .then(response => response.json())
        .then(
            (result) => {
                setData(result);
                setIsLoaded(true);
            },
            (error) => {
                setError(error);
                setIsLoaded(true);
            }
        )
    }, [])
    return(
        <ScrollView>
            <Text style={{fontSize:25, fontWeight:"bold", paddingLeft:10, marginTop:25,}}>Global Data</Text>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <View style={styles.active}>
                        <Text style={{color:'#687089'}}>Total Cases</Text>
                        <Text style={{textAlign:"right", color:'#303139', fontSize:18,fontWeight:'bold'}}>{data[0].cases/1000000}M</Text>
                    </View>
                    <View style={styles.active}>
                        <Text style={{color:'#687089'}}>Active Cases</Text>
                        <Text style={{textAlign:"right", color:'#303139', fontSize:18,fontWeight:'bold'}}>{data[0].active/1000000}M</Text>
                    </View>
                </View>

                <View style={styles.subContainer}>
                    <View style={styles.active}>
                        <Text style={{color:'#687089'}}>Recovered</Text>
                        <Text style={{textAlign:"right", color:'#303139', fontSize:18,fontWeight:'bold'}}>{data[0].recovered/1000000}M</Text>
                    </View>
                    <View style={styles.active}>
                        <Text style={{color:'#687089'}}>Death</Text>
                        <Text style={{textAlign:"right", color:'#303139', fontSize:18,fontWeight:'bold'}}>{data[0].deaths/1000000}M</Text>
                    </View>
                </View>
            </View>

            <Text style={{fontSize:25, fontWeight:"bold", paddingLeft:10, marginTop:25,}}>Top Countries</Text>
            <View style={styles.topCountries}>
                {   
                    data.map(item => (
                        <View style={styles.contryContainer} key={item.cases}>
                            <Text style={{fontSize:20,fontWeight:'bold', color:'#151522', marginBottom:10}}>{item.country}</Text>
                            <Text style={styles.countryData}>Affected - {item.cases/1000000}M</Text>
                            <Text style={styles.countryData}>Recovered - {item.recovered/1000000}M</Text>
                        </View>
                    ))
                }
            <View style={styles.contryContainer}>
                <Text style={{fontSize:20,fontWeight:'bold', color:'#151522', marginBottom:10}}>USA</Text>
                <Text style={styles.countryData}>Affected - 121314</Text>
                <Text style={styles.countryData}>Recovered - 13335345</Text>
            </View>
            </View>
        </ScrollView>
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