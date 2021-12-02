import AsyncStorage from '@react-native-async-storage/async-storage';

const setToken = async(value) => {
    try {
        console.log('set', value);
        await AsyncStorage.setItem('token', value);
        console.log(value);
    } catch (error) {
        console.log(error);
    }
}
export default setToken