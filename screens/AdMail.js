import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView} from "react-native";

const AdMail = ({navigation}) => {
    const [color, setColor] = useState("#fff")
    const [colorOne, setColorOne] = useState("#fff")
    const Handle = () => {
        if (color === "#fff") {
            setColor("#FFCD30")
            setColorOne("#fff")
        } else if (color === "#FFCD30") {
            setColor("#fff")
        }
    }
    const HandleOne = () => {
        if (colorOne === "#fff") {
            setColorOne("#FFCD30")
            setColor("#fff")
        } else if (colorOne === "#FFCD30") {
            setColorOne("#fff")
        }
    }
    const [type, setType] = useState('#fff')
    const [typeOne, setTypeOne] = useState('#fff')
    const [typeTwo, setTypeTwo] = useState('#fff')
    const Change = () => {
        if (type === "#fff") {
            setType("#FFCD30")
            setTypeOne("#fff")
            setTypeTwo("#fff")
        } else if (type === "#FFCD30") {
            setType("#fff")
        }
    }
    const ChangeOne = () => {
        if (typeOne === "#fff") {
            setTypeOne("#FFCD30")
            setType("#fff")
            setTypeTwo("#fff")
        } else if (typeOne === "#FFCD30") {
            setTypeOne("#fff")
        }
    }
    const ChangeTwo = () => {
        if (typeTwo === "#fff") {
            setTypeTwo("#FFCD30")
            setType("#fff")
            setTypeOne("#fff")
        } else if (typeTwo === "#FFCD30") {
            setTypeTwo("#fff")
        }
    }
    const [name, setName] = useState(null)
    const [number, setNumber] = useState(null)
    const [what, setWhat] = useState(null)
    const [none, setNone] = useState('none')
    const [nonee, setNonee] = useState('flex')

    const [money, setMoney] = useState('none')
    const [moneyy, setMoneyy] = useState('flex')
    const [price, setPrice] = useState(null)
    const [send,setSend]=useState(null)
    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('HomeScreen')}
                >
                    <Image source={require('../assets/left-arrow.png')}/>
                </TouchableOpacity>
                <Text style={{fontSize: 20}}>
                    Pochta qo’shish
                </Text>
                <View></View>
            </View>
            <View style={{marginTop: 32, paddingHorizontal: 16}}>
                <Text style={{fontSize: 16, fontWeight: "500"}}>
                    Qachon olish va yetkazib berish?
                </Text>
                <View style={{marginTop: 18, flexDirection: "row"}}>
                    <TouchableOpacity
                        onPress={() => {
                            Handle()
                        }}
                        style={[styles.btn, {backgroundColor: color}]}>
                        <Text>Hoziroq</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            HandleOne()
                        }}
                        style={[styles.btn, {marginLeft: 20, backgroundColor: colorOne}]}>
                        <Text>Vaqtincha belgilash</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{marginTop: 20, paddingHorizontal: 16}}>
                <Text>Nimadan yetqazish?</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{marginTop: 18}}
                >
                    <TouchableOpacity
                        onPress={() => {
                            Change()
                        }}
                        style={[styles.btn, {paddingHorizontal: 15, backgroundColor: type}]}>
                        <Text>
                            Yengil avtomobilda
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            ChangeOne()
                        }}
                        style={[styles.btn, {paddingHorizontal: 15, marginLeft: 10, backgroundColor: typeOne}]}>
                        <Text>
                            Yuk mashinasida
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            ChangeTwo()
                        }}
                        style={[styles.btn, {paddingHorizontal: 15, marginLeft: 10, backgroundColor: typeTwo}]}>
                        <Text>
                            Piyoda
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={{
                paddingBottom: 19,
                paddingHorizontal: 16,
                backgroundColor: "#fff",
                marginTop: 20,
                paddingTop: 19
            }}>
                <Text style={{fontSize: 16, marginBottom: 17}}>Qayerdan olish</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Region')}
                    style={styles.btnOne}>
                    <Image source={require('../assets/loaction.png')}/>
                    <Text style={{marginLeft: 10, color: "#8a8a8a", fontSize: 14}}>Viloyat,tuman</Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    keyboardType="default"
                    placeholder="Kocha nomi, uy raqami, mo’jal"
                />
                <TextInput
                    style={styles.input}
                    value={number}
                    onChangeText={setNumber}
                    keyboardType="numeric"
                    placeholder="+998(_ _)  _ _ _  _ _  _ _"
                />
            </View>
            <View style={{
                paddingBottom: 19,
                paddingHorizontal: 16,
                backgroundColor: "#fff",
                marginTop: 20,
                paddingTop: 19
            }}>
                <Text style={{fontSize: 16, marginBottom: 17}}>Qayerga yetkazib berish</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Region')}
                    style={styles.btnOne}>
                    <Image source={require('../assets/loaction.png')}/>
                    <Text style={{marginLeft: 10, color: "#8a8a8a", fontSize: 14}}>Viloyat,tuman</Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    keyboardType="default"
                    placeholder="Kocha nomi, uy raqami, mo’jal"
                />
                <TextInput
                    style={styles.input}
                    value={number}
                    onChangeText={setNumber}
                    keyboardType="numeric"
                    placeholder="+998(_ _)  _ _ _  _ _  _ _"
                />
            </View>
            <View style={{paddingVertical: 19, marginTop: 20, paddingHorizontal: 16, backgroundColor: "#fff"}}>
                <Text style={{fontSize: 16}}>
                    Nma yetqazib berish kerak?
                </Text>
                <TextInput
                    style={styles.input}
                    keyboardType="default"
                    value={what}
                    onChangeText={setWhat}
                    placeholder="Qo'shimcha ma'lumot kiriting"
                />
                <View style={{flexDirection: "row", marginTop: 14}}>
                    <Text
                        onPress={() => {
                            setWhat("Hujjat")
                        }}
                        style={styles.text}>Hujjat</Text>
                    <Text
                        onPress={() => {
                            setWhat("Sumka")
                        }}
                        style={styles.text}>Sumka</Text>
                    <Text
                        onPress={() => {
                            setWhat("Kalit")
                        }}
                        style={styles.text}>Kalit</Text>
                    <Text
                        onPress={() => {
                            setWhat("Mahsulot")
                        }}
                        style={styles.text}>Mahsulot</Text>
                </View>
                <View style={{marginTop: 14}}>
                    <View
                        style={{flexDirection: "row", alignItems: "center"}}>
                        <TouchableOpacity
                            onPress={() => {
                                setNonee('none')
                                setNone("flex")
                            }}
                            style={{display: nonee}}>
                            <Image
                                style={{width: 25, height: 25}}
                                source={require('../assets/restangle.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setNone('none')
                                setNonee("flex")
                            }}
                            style={{display: none}}>
                            <Image
                                style={{width: 25, height: 25}}
                                source={require('../assets/blackrestangle.png')}
                            />
                        </TouchableOpacity>
                        <Text
                            style={{fontSize: 14, fontWeight: "500", marginLeft: 12}}
                        >Katta hajimdagi jo’natma
                        </Text>
                    </View>
                    <View style={{flexDirection: "row", alignItems: "center", marginTop: 15}}>
                        <TouchableOpacity
                            onPress={() => {
                                setMoneyy('none')
                                setMoney('flex')
                            }}
                            style={{display: moneyy}}
                        >
                            <Image source={require('../assets/restangle.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setMoney('none')
                                setMoneyy('flex')
                            }}
                            style={{display: money}}
                        >
                            <Image source={require('../assets/blackrestangle.png')}/>
                        </TouchableOpacity>
                        <Text style={{fontSize: 14, fontWeight: "500", marginLeft: 13}}>
                            Jo’natma sug’urtalash
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{display:money,paddingVertical: 19, backgroundColor: "#fff", paddingHorizontal: 16, marginTop: 20}}>
                <Text style={{fontSize: 16, fontWeight: "500"}}>Mahsulot / jo’natma qiymati?</Text>
                <TextInput
                    style={styles.input}
                    value={price}
                    onChangeText={setPrice}
                    keyboardType="numeric"
                />
                <Text
                    style={{fontSize:14,color:"#8a8a8a",marginTop:13}}
                >
                    Avtomatic kalkulyator sizning qoldirgan sug’urtangizdan 0,5% yechib oladi, shuning dek ushbu
                    jo’natma faqat hamyonida yetarlicha mablag bo’lgan kuryerlarga ko’rsatiladi, mahsulotga yoki
                    jonatmaga zarar yetqazilgan taqdirda reglament boyicha 3 ish kunida ushbu summa tiklab beradi.
                </Text>

            </View>
            <View style={{marginTop:20,marginBottom:29,paddingVertical:19,paddingHorizontal:16,backgroundColor:"#fff"}}>
                <Text>Buyurtma summasini taklif qiling</Text>
                <TextInput
                    value={send}
                    onChangeText={setSend}
                    keyboardType="numeric"
                    style={styles.input}
                />
                <View style={{flexDirection:"row",marginTop:14}}>
                    <Text
                        onPress={()=>{
                            setSend("20 000")
                        }}
                        style={styles.text}>20 000</Text>
                    <Text
                        onPress={()=>{
                            setSend("30 000")
                        }}
                        style={styles.text}>30 000</Text>
                    <Text
                        onPress={()=>{
                            setSend("40 000")
                        }}
                        style={styles.text}>40 000</Text>
                    <Text
                        onPress={()=>{
                            setSend("50 000")
                        }}
                        style={styles.text}>50 000</Text>
                </View>
                <TouchableOpacity style={[styles.btnOne,{marginBottom:35,flexDirection:"column",marginTop:23,backgroundColor:"#FFC847"}]}>
                    <Text style={{fontSize:18,fontWeight:"500",textAlign:"center"}}>Yuborish</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};


export default AdMail;
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 20
    },
    btn: {
        paddingVertical: 12,
        paddingHorizontal: 22,
        borderRadius: 10,
        borderColor: "#DCDCDC",
        borderWidth: 1
    },
    input: {
        borderWidth: 1,
        borderColor: "#dcdcdc",
        borderRadius: 10,
        padding: 14,
        marginTop: 10
    },
    btnOne: {
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderRadius: 10,
        borderColor: "#DCDCDC",
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    text: {
        fontSize: 14,
        fontWeight: "500",
        marginRight: 20,
        color: "#8a8a8a"
    }
})
