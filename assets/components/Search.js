import React, { useState } from 'react';
import {View, TextInput} from 'react-native'

export default function Search(){
    const [keyword, setKeyword] = useState();
    return(
        <View>
            <TextInput
                style={{paddingLeft: 25, marginBottom:10, marginLeft: 20, marginRight: 20 ,backgroundColor:'rgba(232, 106, 106, 0.5)', borderRadius: 50, height: 50}}
                placeholder="Country Name"
                onChangeText={text => setKeyword(text)}
            />
        </View>
    )
}