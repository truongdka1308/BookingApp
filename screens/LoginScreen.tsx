import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

const LoginScreen = () => {
    const [showPassword, setShowPassword] = useState(false);
    const setVisibility = () => {
        setShowPassword(!showPassword)
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.textLogo}>Login</Text>
            </View>
            <View style={styles.loginForm}>
                <TextInput style={styles.textInputPassword} placeholder='username'></TextInput>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.textInputPassword}
                        placeholder='password'
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity style={styles.eyeIcon} onPress={setVisibility}>
                        <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="gray" />
                    </TouchableOpacity>
                </View>

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
        justifyContent: 'center'
    },
    headerContainer: {
        justifyContent: 'flex-end',
        marginHorizontal: 20,
        paddingBottom: 20
    },
    textLogo: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold'

    },
    loginForm: {
        flexDirection: 'column',
        marginHorizontal: 20,

    },
    textInput: {

        paddingHorizontal: 20,


        backgroundColor: '#E0E0E0',
        fontSize: 20,
        width: "100%",

    },
    passwordContainer: {
        position: 'relative',
        width: '100%',
        justifyContent: 'center',
        marginVertical:20
    },

    textInputPassword: {
        backgroundColor: '#E0E0E0',
        paddingHorizontal: 20,
        fontSize: 18,
        width: "100%",
        borderRadius: 10,
        paddingRight: 45,
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
    },
    eyeIcon: {
        position: 'absolute',
        right: 15,
        top: 15
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
        color: 'black',
        marginHorizontal: "20%"
    }
})