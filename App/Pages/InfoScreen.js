import { StyleSheet, Text, View } from "react-native";
import Button from '../components/Button';


function Info({route}){
    const {user} = route.params;

    return(
        <View>
            <Text style={styles.complete}>KAYIT BAŞARILI</Text>
            <Text style={styles.label}>Üye Şehri: {user.userName}</Text>
            <Text style={styles.label}>Üye Adı:{user.userLast}</Text>
            <Text style={styles.label}>Üye Soyadı:{user.userMail} </Text>
            <Text style={styles.label}>Üye Mail: {user.userCity}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    label:{
        fontWeight:'bold',
        fontSize:15,
        justifyContent:'center',
        alignItems:'center',
        color:'black',
        margin:5,
    },
    complete:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:50,
        color:'black',
        margin:10
    }
})
export default Info;