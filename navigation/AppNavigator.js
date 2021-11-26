import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import OnboardingScreen from "../screens/OnboardingScreen";
import HomeScreen from "../screens/HomeScreen";
import Login from "../screens/Auth/Login/Login";
import Kod from "../screens/Kod";
import MyCabinet from "../screens/MyCabinet";
import Private from "../screens/Private";
import GetMoney from "../screens/GetMoney";
import About from "../screens/About";
import History from "../screens/History";
import NoInternet from "../screens/NoInternet";
import Notifications from "../screens/Notifications";
import AdMail from "../screens/AdMail";
import Regions from "../screens/Regions";
import District from "../screens/District";
import AddPassenger from "../screens/AddPassenger";
import AddLoad from "../screens/AddLoad";
import AddTransport from "../screens/AddTransport";
import Kuriyer from "../screens/Kuriyer";
import {useSelector} from "react-redux";
import {selectUser} from "../redux/slices/user";

const Stack = createStackNavigator()

const AppNavigator = () => {
    let user = useSelector(selectUser)
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {!user.data && <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}/>}
                <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                <Stack.Screen name="Login" component={Login}/>
                {/*<Stack.Screen name="My" component={MyCabinet}/>*/}
                <Stack.Screen name="Private" component={Private}/>
                <Stack.Screen name="Money" component={GetMoney}/>
                <Stack.Screen name="About" component={About}/>
                <Stack.Screen name="History" component={History}/>
                <Stack.Screen name="NoInternet" component={NoInternet}/>
                <Stack.Screen name="Notifications" component={Notifications}/>
                <Stack.Screen name="AdMail" component={AdMail}/>
                <Stack.Screen name="Region" component={Regions}/>
                <Stack.Screen name="District" component={District}/>
                <Stack.Screen name="AddPassenger" component={AddPassenger}/>
                <Stack.Screen name="AdLoad" component={AddLoad}/>
                <Stack.Screen name="AdTransport" component={AddTransport}/>
                <Stack.Screen name="Kuriyer" component={Kuriyer}/>
                {/*<Stack.Screen name="MyCabinetScreen" component={MyCabinet}/>*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
