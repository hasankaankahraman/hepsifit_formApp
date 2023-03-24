import React, { useState } from "react";
import { Alert, View } from "react-native";

import Input from '../components/Input';
import Button from '../components/Button';


function Sign({navigation}){


    function GoToInfoScreen(){
        navigation.navigate('InfoScreen');
    }

    const[userName,setUserName]= useState(null);
    const[userLast,setUserLast]= useState(null);
    const[userMail,setUserMail]= useState(null);
    const[userCity,setUserCity]= useState(null);


    function handleSubmit(){

        if(!userName || !userLast ||!userMail ||!userCity ){
            Alert.alert('hepsifit','Bilgiler boş bırakılamaz!');
        } else {
            const user = {
                userName,
                userLast,
                userMail,
                userCity
            }
    
            navigation.navigate('InfoScreen',{user})
        }
        
    }



    return(
        <View>
            <Input 
            label={"Üye Adı"}
            yazialani={"Üye adını giriniz..."}
            onChangeText={setUserName}
            />
            <Input 
            label={"Üye Soyadı"} 
            yazialani={"Üye soyadını giriniz..."}
            onChangeText={setUserLast}
            />
            <Input 
            label={"Üye E-posta"} 
            yazialani={"Üye e-posta giriniz..."}
            onChangeText={setUserMail}
            />
            <Input 
            label={"Üye İli"} 
            yazialani={"Üye ili giriniz..."}
            onChangeText={setUserCity}
            />

            <Button text={"Kaydı Tamamla"} onPress={handleSubmit}/>
        </View>
    )
}

export default Sign;