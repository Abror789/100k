import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ScrollView} from "react-native";

const Regions = ({navigation}) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('HomeScreen')}
                >
                    <Image source={require('../assets/left-arrow.png')}/>
                </TouchableOpacity>
                <Text style={{fontSize:20}}>
                    Viloyatni tanlang
                </Text>
                <View></View>
            </View>
            <View style={{marginTop:10,marginBottom:50}}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('District')}
                    style={styles.region}>
                    <View>
                        <Text style={{fontSize:18}}>Toshkent shahri</Text>
                    </View>
                    <View>
                        <Image style={{width:20,height:20}} source={require('../assets/next.png')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('District')}
                    style={styles.region}>
                    <View>
                        <Text style={{fontSize:18}}>Toshkent shahri</Text>
                    </View>
                    <View>
                        <Image style={{width:20,height:20}} source={require('../assets/next.png')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('District')}
                    style={styles.region}>
                    <View>
                        <Text style={{fontSize:18}}>Toshkent shahri</Text>
                    </View>
                    <View>
                        <Image style={{width:20,height:20}} source={require('../assets/next.png')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('District')}
                    style={styles.region}>
                    <View>
                        <Text style={{fontSize:18}}>Toshkent shahri</Text>
                    </View>
                    <View>
                        <Image style={{width:20,height:20}} source={require('../assets/next.png')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('District')}
                    style={styles.region}>
                    <View>
                        <Text style={{fontSize:18}}>Toshkent shahri</Text>
                    </View>
                    <View>
                        <Image style={{width:20,height:20}} source={require('../assets/next.png')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('District')}
                    style={styles.region}>
                    <View>
                        <Text style={{fontSize:18}}>Toshkent shahri</Text>
                    </View>
                    <View>
                        <Image style={{width:20,height:20}} source={require('../assets/next.png')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('District')}
                    style={styles.region}>
                    <View>
                        <Text style={{fontSize:18}}>Toshkent shahri</Text>
                    </View>
                    <View>
                        <Image style={{width:20,height:20}} source={require('../assets/next.png')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('District')}
                    style={styles.region}>
                    <View>
                        <Text style={{fontSize:18}}>Toshkent shahri</Text>
                    </View>
                    <View>
                        <Image style={{width:20,height:20}} source={require('../assets/next.png')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('District')}
                    style={styles.region}>
                    <View>
                        <Text style={{fontSize:18}}>Toshkent shahri</Text>
                    </View>
                    <View>
                        <Image style={{width:20,height:20}} source={require('../assets/next.png')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('District')}
                    style={styles.region}>
                    <View>
                        <Text style={{fontSize:18}}>Toshkent shahri</Text>
                    </View>
                    <View>
                        <Image style={{width:20,height:20}} source={require('../assets/next.png')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('District')}
                    style={styles.region}>
                    <View>
                        <Text style={{fontSize:18}}>Toshkent shahri</Text>
                    </View>
                    <View>
                        <Image style={{width:20,height:20}} source={require('../assets/next.png')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('District')}
                    style={styles.region}>
                    <View>
                        <Text style={{fontSize:18}}>Toshkent shahri</Text>
                    </View>
                    <View>
                        <Image style={{width:20,height:20}} source={require('../assets/next.png')}/>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default Regions;
const styles=StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:16,
        paddingVertical:20
    },
    region:{
        backgroundColor: "#fff",
        paddingHorizontal:16,
        flexDirection:"row",
        justifyContent: "space-between",
        paddingVertical: 15,
        marginTop:2
    }
})
