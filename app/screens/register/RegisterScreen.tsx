import { Alert, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import React from 'react'

interface RegisterScreenProps{
  navigation: any;
}

const RegisterScreen = (props: RegisterScreenProps) => {

    const createAccount = () => props.navigation.navigate("Login");

    return (
      <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
      >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder="Confirm password"
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
          <TouchableOpacity
              onPress = {createAccount}
              style={styles.button}
          >
              <Text style={styles.buttonText}>Create account</Text>
          </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },

    inputContainer:{
        width:'80%'
    },

    input:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },

    buttonContainer:{
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },

    button:{
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },

    buttonText:{
        color:'white',
        fontWeight: '700',
        fontSize: 16,
    }, 

})
