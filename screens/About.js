import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet, ScrollView} from "react-native";

const About = ({navigation}) => {
    return (
        <View>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('My')}
                >
                    <Image source={require('../assets/left-arrow.png')}/>
                </TouchableOpacity>
                <Text style={{fontSize: 20}}>
                    Ilova tog’risida
                </Text>
                <View></View>
            </View>
            <View style={{alignItems: "center", justifyContent: "center", marginTop: 27}}>
                <Image style={{width: 90, height: 90}} source={require('../assets/bee.png')}/>
                <Text style={{fontSize: 24, marginTop: 22}}>100k Expressga</Text>
            </View>
            <View style={{paddingHorizontal:30,marginTop:40}}>
                <Text style={{textAlign:"center",fontSize:18}}>
                    2021 yilda tashkil topilgan 100k express taksi chaqirish, pochta yuborish, transport izlash uchun
                    tizimiga kiring. Agar sizda profile yaratilmagan bolsa muommo yoq, profile yaratish uchun telefon
                    raqamingizni kiritsangiz bas.
                </Text>
                <Text style={{textAlign:"center",fontSize:18}}>
                    2021 yilda tashkil topilgan 100k express taksi chaqirish, pochta yuborish, transport izlash uchun
                    tizimiga kiring. Agar sizda profile yaratilmagan bolsa muommo yoq, profile yaratish uchun telefon
                    raqamingizni kiritsangiz bas.
                </Text>
            </View>
            <View style={{marginTop:72,alignItems:"center",justifyContent:"center"}}>
                <Text style={{fontWeight:"500",fontSize:14}}>Qo’llab quvatlash xizmati</Text>
                <Text  style={{fontWeight:"500",fontSize:12,color:"#000"}}>+998 71 800 80 50</Text>
            </View>
        </View>
    );
};

export default About;
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 20,
        backgroundColor: "#fff"
    },
})
