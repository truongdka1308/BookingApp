import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

const LoginScreen = () => {
     const [showPassword, setShowPassword] = useState('false');
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.textLogo}>Login</Text>
            </View>
            <View style={styles.loginForm}>
                <TextInput style={styles.textInput} placeholder='username'></TextInput>
                <TextInput style={styles.textInput} placeholder='password'></TextInput>
                 <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="gray" />
                <TouchableOpacity>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.normalText}>Don't have an account? Register</Text>
                </TouchableOpacity>
            </View>



        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginLeft: 20,
        paddingBottom: 20
    },
    textLogo: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold'

    },
    loginForm: {
        flexDirection: 'column',
        paddingHorizontal: 20,
        flex: 2,
    
    },
    textInput: {
        width: "100%",
       lineHeight:35,
        paddingHorizontal: 15,
        // borderColor: 'black',
        // borderWidth: 1,
        borderRadius: 10,
        marginBottom: 18,
        fontSize:20,
        backgroundColor: '#E0E0E0',
    },
    buttonText: {
        color: '#fff',
        borderColor: 'black',
        borderWidth: 1,
        textAlign: 'center',
        paddingVertical: 16,
        borderRadius: 12,
        backgroundColor: '#0066FF',
        fontWeight: 'bold'
    },
    normalText: {
        textAlign: 'center',
        marginTop: "5%",
        color:'black',
        marginHorizontal:"20%"
    }
})