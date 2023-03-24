import * as React from 'react';
import { View,Text,StyleSheet} from 'react-native';

import Button from '../components/Button';

function Welcome({navigation}){

    function GoToSignScreen(){
        navigation.navigate('SignScreen');
    }
  
    return(
        <View style={styles.container}>
            <Text style={styles.header}>hepsifit</Text>
            <Button text="Üye Kaydı Oluştur" onPress={GoToSignScreen}/>
        </View>
    )
}

export default Welcome;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        

    },
    header:{
        fontSize:60,
        fontWeight:'bold',
        margin:10,
        color:'orange'
    }
})