import React from 'react';
import {View, TextInput, Text, Image, ScrollView, StyleSheet, StatusBar, TouchableOpacity} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser, selectUser} from "../redux/slices/user";
import {useProfileHook} from "./Profile/hooks";

const MyCabinet = ({navigation}) => {
    let {user, onLogout} = useProfileHook()
    return (
        <ScrollView>
            <StatusBar backgroundColor={"#FFCE34"}/>
            <View style={styles.shadowProp}>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                    <TouchableOpacity
                        onPress={onLogout}>

                        {/*<Image source={require('../assets/question.png')}/>*/}
                        <Text style={{color: "#ffce34", fontSize: 18}}>
                            Exit
                        </Text>
                    </TouchableOpacity>
                    <Text style={{fontSize: 20}}>Mening kabinetim</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Notifications')}
                    >
                        <Image source={require('../assets/bell.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{justifyContent: "center", alignItems: "center", marginTop: 5}}>
                <Image source={require('../assets/userBig.png')}/>
                <Text style={{fontSize: 20, fontWeight: "bold", marginTop: 15}}>{user.payload?.name}</Text>
                <Text style={{color: "#8A8A8A", fontSize: 14}}>{user.payload?.username}</Text>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-around", marginTop: 20, alignItems: "center"}}>
                <View style={{flexDirection: "column", alignItems: "center"}}>
                    <Image style={{height: 40, marginBottom: 7}} source={require('../assets/coding.png')}/>
                    <Text style={{fontWeight: "bold", fontSize: 14, marginBottom: 4}}>{user.payload?.about}</Text>
                    <Text style={{fontWeight: "300", color: "#8A8A8A", fontSize: 14}}>ID code</Text>
                </View>
                <View style={{flexDirection: "column", alignItems: "center"}}>
                    <Image style={{height: 40, marginBottom: 7}} source={require('../assets/wallet.png')}/>
                    <Text style={{fontWeight: "bold", fontSize: 14, marginBottom: 4}}>{user.payload?.balance} so’m</Text>
                    <Text style={{fontWeight: "300", color: "#8A8A8A", fontSize: 14}}>Hisobingiz</Text>
                </View>
                <View style={{flexDirection: "column", alignItems: "center"}}>
                    <Image style={{height: 40, marginBottom: 7}} source={require('../assets/rating.png')}/>
                    <Text style={{fontWeight: "bold", fontSize: 14, marginBottom: 4}}>{user.payload?.id}</Text>
                    <Text style={{fontWeight: "300", color: "#8A8A8A", fontSize: 14}}>Reyting</Text>
                </View>
            </View>
            <View style={{paddingHorizontal: 16, paddingLeft: 11, marginTop: 39, marginBottom: 72}}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Private')}
                        style={styles.btn}>
                        <Image style={{width: 45, height: 45}} source={require('../assets/settings.png')}/>
                        <Text style={styles.btnText}>xususiylshtirish</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Money')}
                        style={styles.btn}>
                        <Image style={{width: 45, height: 45}} source={require('../assets/hisob.png')}/>
                        <Text style={styles.btnText}>hisobni to'ldirish</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: "row", alignItems: "center", marginTop: 17}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Kuriyer')}
                        style={styles.btn}>
                        <Image style={{width: 45, height: 45}} source={require('../assets/kuriyer.png')}/>
                        <Text style={styles.btnText}>kuryer bolmoq</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('OnboardingScreen')}
                        style={styles.btn}>
                        <Image style={{width: 45, height: 45}} source={require('../assets/use.png')}/>
                        <Text style={styles.btnText}>foydalanish</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: "row", alignItems: "center", marginTop: 17}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('About')}
                        style={styles.btn}>
                        <Image style={{width: 45, height: 45}} source={require('../assets/info.png')}/>
                        <Text style={styles.btnText}>ilova tog’risida</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}>
                        <Image style={{width: 45, height: 45}} source={require('../assets/qollab.png')}/>
                        <Text style={styles.btnText}>qo'llab-quvvatlash</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: "row", alignItems: "center", marginTop: 17,marginBottom:100}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('NoInternet')}
                        style={styles.btn}>
                        <Image style={{width: 45, height: 45}} source={require('../assets/biznes.png')}/>
                        <Text style={styles.btnText}>biznes uchun</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('History')}
                        style={styles.btn}>
                        <Image style={{width: 52.14, height: 45}} source={require('../assets/history.png')}/>
                        <Text style={styles.btnText}>to'lovlar tarixi</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );
};

export default MyCabinet;
const styles = StyleSheet.create({
    shadowProp: {
        shadowColor: '#000',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        backgroundColor: "#fff",
        paddingVertical: 21,
        paddingHorizontal: 16
    },
    btn: {
        flexDirection: "column",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#8a8a8a",
        borderRadius: 15,
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 23,
        paddingVertical: 15,
        marginLeft: 5
    },
    btnText: {
        color: "#8a8a8a",
        fontSize: 14,
        fontWeight: "300",
        marginTop: 9
    }
})
