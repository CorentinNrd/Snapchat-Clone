import React from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import setToken from '../SetToken/SetToken';
// import getToken from '../GetToken/GetToken';

function LoginForm(props) {
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

    const LoginFunction = (result) => {
        var string;
        fetch("http://snapi.epitech.eu:8000/connection", requestOptions)
            .then(response => response.json())
            .then(async (response) => {
                if (response.data.token) {
                    setToken(response.data.token);
                    props.navigation.navigate('Camera');
                } else {
                    alert("Une erreur est survenue lors de la connexion");
                }
            })
            .catch(error => console.log('error', error));
    }

    return (
        <View style={styles.regform}>
            <Text style={styles.header}>Login</Text>

            <TextInput style={styles.input} onChangeText={onChangeEmail} placeholder="email" underlineColorAndroid={"transparent"} />


            <TextInput style={styles.input} onChangeText={onChangePassword} placeholder="password" secureTextEntry={true} underlineColorAndroid={"transparent"} />

            <TouchableOpacity style={styles.button}
                onPress={() => LoginFunction()}
                titre="SignIn">
                <Text style={styles.btntext}>Let's Go</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
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

export default LoginForm;