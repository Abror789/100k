import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {Provider} from "react-redux";
import {persistor, store} from "./redux/configureStore";
import AppNavigator from "./navigation/AppNavigator";
import {PersistGate} from "redux-persist/integration/react";


// screenOptions={{headerShown: false}}
const Stack = createStackNavigator()

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppNavigator/>
            </PersistGate>
        </Provider>
    );
};

export default App;
