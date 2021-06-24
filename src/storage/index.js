import AsyncStorage from '@react-native-async-storage/async-storage';
const LIST_KEY = 'superCartList'

const storeGroceryList = async (list) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(LIST_KEY, jsonValue)
  } catch (e) {
    console.log('storeGroceryList error', e)
  }
};
const getGroceryList = async () => {
  try {
    const value = await AsyncStorage.getItem(LIST_KEY)
    if(value !== null) {
      return JSON.parse(value)
    }
  } catch (e) {
    console.log('getGroceryList error', e)
  }
};
