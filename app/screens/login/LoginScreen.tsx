import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { login_style } from './login.style';


interface LoginSCreenProps{
    navigation: any;
}


const LoginScreen = (props: LoginSCreenProps) => {

    const login = () => props.navigation.navigate("Home");
    const register = () => props.navigation.navigate("Register");

    return (
        <KeyboardAvoidingView
            style={login_style.container}
            behavior="padding" 
        >
        <View style={login_style.inputContainer}>
        <TextInput
            placeholder="Email"
            style={login_style.input}
        />
        <TextInput
            placeholder="Password"
            style={login_style.input}
            secureTextEntry
        />
        </View>

        <View style={login_style.buttonContainer}>
            <TouchableOpacity
                onPress = {login}
                style={login_style.button}
            >
                <Text style={login_style.buttonText}>Login</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                onPress = {register}
                style={[login_style.button, login_style.buttonOutline]}
            >
                <Text style={login_style.buttonOutlineText}>Register</Text>
            </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

