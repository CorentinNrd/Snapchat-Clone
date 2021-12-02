import React, { useState, useEffect, useRef } from 'react';
import { Image, Button, StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackgroundBase } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import setToken from '../SetToken/SetToken';


function Profil(props) {

    const logout = async () => {

        try {
            await AsyncStorage.removeItem('token');
            setToken(null);
            props.navigation.navigate('Home');
        }
        catch (e) {
            console.log(e);
        }
        alert('Vous êtes déconnecté');

    }

    const retour = async () => {
        props.navigation.navigate('Camera');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={logout}
            >
                <Text style={styles.btntext}>Logout</Text>

            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonProfil}
                onPress={retour}
            >
                <Text style={styles.btntext}>Back</Text>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
        width: "100%",
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#9f5ccc',
        marginTop: 30,
        borderRadius: 50,
        marginLeft: 30,
        marginRight: 30,
    },
    buttonProfil: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'red',
        marginTop: 10,
        borderRadius: 50,
        marginLeft: 30,
        marginRight: 30,
    },
    btntext: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20,
    }
})

export default Profil