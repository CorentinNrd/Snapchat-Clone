import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

function RegisterForm(props) {

    const [email, onChangeEmail] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);

    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "email": email,
        "password": password
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    const RegisterFunction = () => {
        fetch("http://snapi.epitech.eu:8000/inscription", requestOptions)
            .then(response => response.text())
            .then(result => console.warn(result)) 
            .catch(error => console.log('error', error));
            props.navigation.navigate('Connexion');
    }

    return (
        <View style={styles.regform}>
            <Text style={styles.header}>Registration</Text>

            <TextInput style={styles.input} onChangeText={onChangeEmail} placeholder="email" underlineColorAndroid={"transparent"} />


            <TextInput style={styles.input} onChangeText={onChangePassword} placeholder="password" secureTextEntry={true} underlineColorAndroid={"transparent"} />

            <TouchableOpacity style={styles.button}
                onPress={() => RegisterFunction()}
                title="SignUp">
                <Text style={styles.btntext}>Sign Up</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />

        </View>
    );
}


const styles = StyleSheet.create({
    regform: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
        width: "100%",
    },
    input: {
        alignSelf: 'stretch',
        fontSize: 25,
        marginBottom: 30,
        height: 40,
        borderBottomWidth: 2,
        borderBottomColor: "black",
        marginLeft: 30,
        marginRight: 30,
    },
    header: {
        fontSize: 30,
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomWidth: 2,
        borderBottomColor: "black",
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
    btntext: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20,
    }
});

export default RegisterForm;