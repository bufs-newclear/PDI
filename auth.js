import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Crypto from "expo-crypto"
import { BACKEND_URL } from './config';
import { api } from './misc/tools';

let authToken = null;

// 사용자 토큰 생성
const generateUserToken = async () => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for(let counter = 0; counter < 24; counter++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
};
  
// 주어진 username과 password를 통해 계정을 등록합니다. 
const register = async (userToken) => {
  try {
    const res = await api(`${BACKEND_URL}/users/login/`, {
      username: userToken,
      password: await Crypto.digest(Crypto.CryptoDigestAlgorithm.SHA256, userToken)
    });

    if (!res.ok) {
      // Handle error responce
      const err = await res.json();
      throw new Error(err.message || '계정을 생성할 수 없습니다');
    }

    return true;
  } catch (err) {
    console.error('Error registering in:', err);
    throw err;
  }
}

// 사용자 토큰(ID)을 반환합니다. 저장된 토큰이 없다면 새로 생성한 뒤 계정을 생성하고 반환합니다.
export const getUserToken = async () => {
  const userToken = await AsyncStorage.getItem('userToken');

  if (userToken !== null) {
    return userToken;
  } else {
    const newToken = await generateUserToken();
    
    await register(newToken);
    await AsyncStorage.setItem('userToken', newToken);

    return newToken;
  }
};


// 로그인(실제 )을 수행한 뒤 인증 토큰을 반환합니다.
export const getAuthToken = async () => {
  if (authToken) { return authToken; }
  const userToken = await getUserToken();

  try {
    const res = await api(`${BACKEND_URL}/users/login/`, {
      username: userToken,
      password: await Crypto.digest(Crypto.CryptoDigestAlgorithm.SHA256, userToken)
    });

    if (!res.ok) {
      // Handle error responce
      const err = await res.json();
      throw new Error(err.message || '로그인할 수 없습니다');
    }

    const resData = await res.json();
    authToken = resData.token;

    return authToken;
  } catch (err) {
    console.error('Error logging in:', err);
    throw err;
  }
}

