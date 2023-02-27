import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "./screens/login/LoginScreen";
import RegisterScreen from "./screens/register/RegisterScreen";
import HomeScreen from "./screens/home/HomeScreen";
import SelectionScreen from "./screens/produits_selection/SelectionScreen";

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Navigator initialRouteName="Login">
            <Screen name="Login" component={LoginScreen}/>
            <Screen name="Register" component={RegisterScreen}/>
            <Screen name="Home" component={HomeScreen}/>
            <Screen name="Selection" component={SelectionScreen}/>
        </Navigator>
    </NavigationContainer>

)

export default AppNavigator;