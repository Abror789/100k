import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, TextInput} from "react-native";
import {useLoginHook, useRequestPasswordHook} from "./Auth/hooks";

const Kod = ({navigation, route}) => {
    const [count, setCount] = useState(0);
    const [countInTimeout, setCountInTimeout] = useState(0);
    let {onSubmitPassword, setPassword, loading, password} = useLoginHook()
    let {username} = route.params

    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../assets/bee.png')}/>
            </View>
            <View style={{marginTop: 50}}>
                <Text style={{color: "#fff", fontWeight: "bold", fontSize: 20}}>
                    Avtorizatsiya
                </Text>
            </View>
            <View style={{width: "60%", marginTop: 60}}>
                <TextInput style={{
                    textAlign: "center",
                    fontSize: 50,
                    color: "#fff",
                    borderBottomColor: "#7d797c",
                    borderBottomWidth: 1,
                    width: "100%",
                    borderColor: "#000"
                }}
                           onChangeText={setPassword}
                           value={password}
                           keyboardType="numeric"
                           maxLength={5}
                />
            </View>
            <View style={{width: "80%", marginTop: 40}}>
                <TouchableOpacity onPress={() => onSubmitPassword(username)} style={{
                    borderRadius: 8,
                    width: "100%",
                    backgroundColor: "#ffd247",
                    paddingVertical: 15
                }}>
                    <Text style={{textAlign: "center"}}>
                        Tizimga kirish
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Kod;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FEA832"
    },
})
