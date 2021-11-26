import React from 'react';
import {Image, Text, TouchableOpacity,StyleSheet, View} from "react-native";

const District = ({navigation}) => {
    return (
        <View>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Region')}
                >
                    <Image source={require('../assets/left-arrow.png')}/>
                </TouchableOpacity>
                <Text style={{fontSize:20}}>
                    Tumanni tanlang
                </Text>
                <View></View>
            </View>
            <View style={{marginTop:10,marginBottom:50}}>
                <TouchableOpacity onPress={() => navigation.navigate('AdMail')} style={styles.region}>
                    <View>
                        <Text style={{fontSize:18}}>Tuman</Text>
                    </View>
                    <View>
                        <Image style={{width:20,height:20}} source={require('../assets/next.png')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AdMail')} style={styles.region}>
                    <View>
                        <Text style={{fontSize:18}}>Tuman</Text>
                    </View>
                    <View>
                        <Image style={{width:20,height:20}} source={require('../assets/next.png')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AdMail')} style={styles.region}>
                    <View>
                        <Text style={{fontSize:18}}>Tuman</Text>
                    </View>
                    <View>
                        <Image style={{width:20,height:20}} source={require('../assets/next.png')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AdMail')} style={styles.region}>
                    <View>
                        <Text style={{fontSize:18}}>Tuman</Text>
                    </View>
                    <View>
                        <Image style={{width:20,height:20}} source={require('../assets/next.png')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AdMail')} style={styles.region}>
                    <View>
                        <Text style={{fontSize:18}}>Tuman</Text>
                    </View>
                    <View>
                        <Image style={{width:20,height:20}} source={require('../assets/next.png')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AdMail')} style={styles.region}>
                    <View>
                        <Text style={{fontSize:18}}>Tuman</Text>
                    </View>
                    <View>
                        <Image style={{width:20,height:20}} source={require('../assets/next.png')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AdMail')} style={styles.region}>
                    <View>
                        <Text style={{fontSize:18}}>Tuman</Text>
                    </View>
                    <View>
                        <Image style={{width:20,height:20}} source={require('../assets/next.png')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AdMail')} style={styles.region}>
                    <View>
                        <Text style={{fontSize:18}}>Tuman</Text>
                    </View>
                    <View>
                        <Image style={{width:20,height:20}} source={require('../assets/next.png')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AdMail')} style={styles.region}>
                    <View>
                        <Text style={{fontSize:18}}>Tuman</Text>
                    </View>
                    <View>
                        <Image style={{width:20,height:20}} source={require('../assets/next.png')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AdMail')} style={styles.region}>
                    <View>
                        <Text style={{fontSize:18}}>Tuman</Text>
                    </View>
                    <View>
                        <Image style={{width:20,height:20}} source={require('../assets/next.png')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AdMail')} style={styles.region}>
                    <View>
                        <Text style={{fontSize:18}}>Tuman</Text>
                    </View>
                    <View>
                        <Image style={{width:20,height:20}} source={require('../assets/next.png')}/>
                    </View>
                </TouchableOpacity>
            </View>


        </View>
    );
};

export default District;
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
