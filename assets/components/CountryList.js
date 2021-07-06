import React, { useEffect, useState } from "react";
import { TextInput, ActivityIndicator, ScrollView, StyleSheet, View, Text, Dimensions, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Header from "./Header";
import Search from "./Search";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function CountryList({ navigation }){
    const [data,setData] = useState([{}]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState();
    const [keyword, setKeyword] = useState("");

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
            <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                <Text>Something Went Wrong</Text>
            </View>
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
        //const newData = data.slice(1);
        // const keyword = "BA";
        const PATTERN = keyword.toLowerCase();
        const searched = data.filter(item => item.country.toLowerCase().startsWith(PATTERN)? item :"")
        // console.log(searched)
        const list = keyword.length >0 ? searched : data.slice(1,40);


        return(
            <View style={{marginBottom:100}}>
            {/* <Header props={{header:"Top Countries"}} /> */}
            {/* <Search /> */}
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center', marginBottom:10, marginLeft: 20, marginRight: 20,}}>
                <Image
                    source={require('../Icons/search.png')}
                    resizeMode= "contain"
                    style={{ height:20,width:20,justifyContent:'center',alignItems:'center'}}
                />
                <TextInput
                    style={{ flex:7, paddingLeft: 25, borderRadius:10,borderColor:'#fff', borderBottomColor:"#eee" , height: 50}}
                    placeholder="Country Name"
                    onChangeText={text => setKeyword(text)}
                />
            </View>

            <ScrollView style={{backgroundColor:"#fff"}}>
                {/* <Text style={{fontSize:25, fontWeight:"bold", paddingLeft:10, marginTop:25,}}>Top Countries</Text> */}
                <View style={styles.topCountries}>
                    {   
                        list.map(item => (
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