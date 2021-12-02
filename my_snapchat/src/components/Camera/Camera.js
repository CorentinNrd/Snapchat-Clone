import React, { useState, useEffect, useRef } from 'react';
import { Image, Button, StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackgroundBase } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getToken from '../GetToken/GetToken';
import Cercle from '../../assets/Cercle.png'
import Galery from '../../assets/Galery.png'
import Flash from '../../assets/flash.png'
import profil from '../../assets/Profil.png';
import close from '../../assets/close.png'
import { Camera, CameraPreview, ImageBackground } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';


function CameraForm(props) {

    const [hasPermission, setHasPermission] = useState(null);
    const [currentToken, setcurrentToken] = useState(null);
    const tokenToGet = async () => {
        setcurrentToken(await getToken());
    }
    tokenToGet();

    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const [cameraRef, setCameraRef] = useState(null)
    const [isPreview, setIsPreview] = useState(false);

    const takePicture = async () => {
        if (cameraRef) {
            const photo = await cameraRef.takePictureAsync()
            if (photo) {
                cameraRef.pausePreview();
                setIsPreview(true);
            }
            console.log(photo);
        }
    };

    const cancelPreview = async () => {
        await cameraRef.resumePreview();
        setIsPreview(false);
    };

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const pickFromGallery = async () => {
        let data = await ImagePicker.launchImageLibraryAsync();
    }

    const Profil = async () => {
        props.navigation.navigate('Profil');
    }

    const Contact = async () => {
        props.navigation.navigate('Contact');
    }

    return (
        <View>
            <Camera
                type={type}
                ref={ref => {
                    setCameraRef(ref)
                }}
                flashMode={flash}
            >
                <TouchableOpacity
                    style={styles.screen}
                    onPress={() => {
                        setType(
                            type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back
                        );
                    }}>
                </TouchableOpacity>

                <View style={styles.View}>

                    <TouchableOpacity
                        onPress={takePicture}>
                        <Image source={Cercle} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={pickFromGallery}>
                        <Image source={Galery} style={styles.Image} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            setFlash(
                                flash === Camera.Constants.FlashMode.off
                                    ? Camera.Constants.FlashMode.torch
                                    : Camera.Constants.FlashMode.off);
                        }}>
                        <Image source={Flash} style={styles.Flash} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.profil}
                        onPress={Profil}
                    >
                        <Image source={profil} />

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={cancelPreview}
                        style={styles.close}
                    >
                        <Image source={close} />
                    </TouchableOpacity>

                    {isPreview == true && (

                        <TouchableOpacity
                            style={styles.contact}
                            onPress={Contact}
                        >
                        </TouchableOpacity>
                    )}
                </View>


            </Camera>

        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        height: "100%",
    },
    View: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        bottom: 60,
        left: 140
    },
    Image: {
        width: 50,
        height: 50,
        top: 25,
        left: 170,
    },
    Flash: {
        top: 24,
        right: 100
    },
    profil: {
        backgroundColor: 'white',
        borderRadius: 50,
        bottom: 675,
        width: 50,
        height: 50,
        left: 165,
        margin: 10
    },
    close: {
        borderRadius: 50,
        bottom: 740,
        width: 50,
        height: 50,
        right: 110
    },
    contact: {
        backgroundColor: 'white',
        borderRadius: 50,
        bottom: 700,
        width: 50,
        height: 50,
        left: 165,
        margin: 10
    },
});


export default CameraForm