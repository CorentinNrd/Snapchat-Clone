import AsyncStorage from '@react-native-async-storage/async-storage';

const getToken = async() => {
    try {
        console.log('set');
        const token = await AsyncStorage.getItem('token');
        return token;
    } catch (error) {
        console.log(error);
    }
}
export default getToken