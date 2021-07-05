import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, View, Text, Dimensions } from "react-native";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Country({ route, navigation }){
    const [data,setData] = useState([{}]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState();

    // Country Name 
    const { countryName } = route.params;
    let address = "https://coronavirus-19-api.herokuapp.com/countries/" + countryName;
    useEffect(()=> {
        fetch(address)
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

    if(error) {
        return(
            <Text>Something Went Wrong</Text>
        )
    }

    else if(!isLoaded){
        return(
            <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                <ActivityIndicator size="large" color="rgb(63, 65, 78)" />
            </View>
        )
    }

    else{
    return(
        <ScrollView style={{backgroundColor:"#fff"}}>
            <Text style={{fontSize:25, fontWeight:"bold", paddingLeft:10, marginTop:25,}}>{data.country}</Text>
            <Text style={{fontSize:20, fontWeight:"bold", paddingLeft:10, marginTop:25,}}>Todays Data</Text>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <View style={styles.active}>
                        <Text style={{color:'#687089'}}>Todays Cases</Text>
                        <Text style={{textAlign:"right", color:'#303139', fontSize:18,fontWeight:'bold'}}>{data.todayCases}</Text>
                    </View>
                    <View style={styles.active}>
                        <Text style={{color:'#687089'}}>Active Cases</Text>
                        <Text style={{textAlign:"right", color:'#303139', fontSize:18,fontWeight:'bold'}}>{data.active}</Text>
                    </View>
                </View>

                <View style={styles.subContainer}>
                    <View style={styles.active}>
                        <Text style={{color:'#687089'}}>Critical</Text>
                        <Text style={{textAlign:"right", color:'#303139', fontSize:18,fontWeight:'bold'}}>{data.critical}</Text>
                    </View>
                    <View style={styles.active}>
                        <Text style={{color:'#687089'}}>Todays Death</Text>
                        <Text style={{textAlign:"right", color:'#303139', fontSize:18,fontWeight:'bold'}}>{data.todayDeaths}</Text>
                    </View>
                </View>
            </View>

            <Text style={{fontSize:20, fontWeight:"bold", paddingLeft:10, marginTop:25,}}>Total Data</Text>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <View style={styles.active}>
                        <Text style={{color:'#687089'}}>Total Cases</Text>
                        <Text style={{textAlign:"right", color:'#303139', fontSize:18,fontWeight:'bold'}}>{data.cases/1000000}M</Text>
                    </View>
                    <View style={styles.active}>
                        <Text style={{color:'#687089'}}>Cases Per OneMillion</Text>
                        <Text style={{textAlign:"right", color:'#303139', fontSize:18,fontWeight:'bold'}}>{data.casesPerOneMillion}</Text>
                    </View>
                </View>

                <View style={styles.subContainer}>
                    <View style={styles.active}>
                        <Text style={{color:'#687089'}}>Recovered</Text>
                        <Text style={{textAlign:"right", color:'#303139', fontSize:18,fontWeight:'bold'}}>{data.recovered/1000000}M</Text>
                    </View>
                    <View style={styles.active}>
                        <Text style={{color:'#687089'}}>Death</Text>
                        <Text style={{textAlign:"right", color:'#303139', fontSize:18,fontWeight:'bold'}}>{data.deaths/1000000}M</Text>
                    </View>
                </View>
            </View>

        </ScrollView>
    )
    }
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