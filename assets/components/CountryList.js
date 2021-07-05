import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, View, Text, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Header from "./Header";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function CountryList({ navigation }){
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

    if(error) {
        return(
            <Text>Something Went Wrong</Text>
        )
    }

    else if(!isLoaded){
        return(
            <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                <ActivityIndicator size='large' color="rgb(63, 65, 78)" />
            </View>
        )
    }

    else{
        return(
            <View>
            {/* <Header props={{header:"Top Countries"}} /> */}
            <ScrollView style={{backgroundColor:"#fff"}}>
                <Text style={{fontSize:25, fontWeight:"bold", paddingLeft:10, marginTop:25,}}>Top Countries</Text>
                <View style={styles.topCountries}>
                    {   
                        data.map(item => (
                            <TouchableOpacity onPress={() => navigation.navigate('Country', { countryName: item.country })}>
                            <View style={styles.contryContainer} key={item.country}>
                                <Text style={{fontSize:20,fontWeight:'bold', color:'#151522', marginBottom:10}}>{item.country}</Text>
                                <Text style={styles.countryData}>Affected - {item.cases/1000000}M</Text>
                                <Text style={styles.countryData}>Recovered - {item.recovered/1000000}M</Text>
                            </View>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </ScrollView>
            </View>
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