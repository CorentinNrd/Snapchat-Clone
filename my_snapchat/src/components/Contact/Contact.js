import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, SectionList, FlatList } from 'react-native';
import getToken from '../GetToken/GetToken';
import * as Contacts from 'expo-contacts';

function Contact(props) {

    const [currentToken, setcurrentToken] = useState(null);
    const [resultat, setResultat] = useState({ data: [] });

    useEffect(async () => {
        await getToken().then(token => {
            setcurrentToken(token)

            // alert(currentToken)

            var myHeaders = new Headers();
            myHeaders.append("token", token);

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch("http://snapi.epitech.eu:8000/all", requestOptions)
                .then(response => response.json())
                .then(result => { setResultat(result) })
                .catch(error => console.log('error', error));
            // response.map()

            // TEST ENVOIE DE SNAP

            // var formdata = new FormData();
            // formdata.append("duration", "5");
            // formdata.append("to", item.email);
            // formdata.append("image", fileInput.files[0], fichier);
            


            // var requestOptions = {
            //     method: 'GET',
            //     headers: myHeaders,
            //     redirect: 'follow'
            // };

            // fetch("snapi.epitech.eu:8000/snap", requestOptions)
            // .then(response => response.text())
            // .then(result => console.log(result))
            // .catch(error => console.log('error', error));
        })
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView>
                {resultat.data.map(item => <TouchableOpacity
                    style={styles.button}
                    onPress={() => console.log('envoie')}>
                    <Text>{item.email}</Text>
                </TouchableOpacity>)}
            </ScrollView>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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

export default Contact;