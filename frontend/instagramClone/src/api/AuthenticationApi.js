import {setTokens} from '../redux/slices/User';
// import EncryptedStorage from 'react-native-encrypted-storage';
import * as SecureStore from 'expo-secure-store';
import { API_BASE_URL } from '../constants/config';



export const logIn = async (dispatch, {password, userName} , callback) => {
  let tokens = await fetch(`${API_BASE_URL}/api/token/`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      password,
      username: userName,
    }),
  });

  tokens = await tokens.json();
  dispatch(
    setTokens({accessToken: tokens.access, refreshToken: tokens.refresh}),
  );
  setTokensToStorage(tokens.access, tokens.refresh);
  callback(tokens.access)
};

// export const getTokensFromEncryptedStorage = async (dispatch, callback) => {
//   try {
//     let session = await EncryptedStorage.getItem('user_session');
//     session = JSON.parse(session);
//     if (session.accessToken !== undefined) {
//       dispatch(
//         setTokens({
//           accessToken: session.accessToken,
//           refreshToken: session.refresh,
//         }),
//       );
//       callback(session.accessToken)
//       return
//     }
//     callback()
    
//   } catch (error) {
//   }
  
// };

// export const setTokensToStorage = async (access, refresh) => {
//   try {
//     await EncryptedStorage.setItem(
//       'user_session',
//       JSON.stringify({
//         accessToken: access,
//         refreshToken: refresh,
//       }),
//     );
//   } catch (error) {}
// };

export const getTokensFromEncryptedStorage = async (dispatch, callback) => {
  try {
    let session = await SecureStore.getItemAsync('user_session');
    if (session) {
      session = JSON.parse(session);
      if (session.accessToken !== undefined) {
        dispatch(
          setTokens({
            accessToken: session.accessToken,
            refreshToken: session.refreshToken,
          })
        );
        callback(session.accessToken);
        return;
      }
    }
    callback();
  } catch (error) {
    console.error('Error retrieving tokens', error);
    callback();
  }
};


export const setTokensToStorage = async (access, refresh) => {
  try {
    await SecureStore.setItemAsync(
      'user_session',
      JSON.stringify({
        accessToken: access,
        refreshToken: refresh,
      })
    );
  } catch (error) {
    console.error('Error saving tokens', error);
  }
};


export const getCredentials = async (accessToken , callback) => {
  let data = await fetch(`${API_BASE_URL}/api/user/credentials/` , {headers : {Authorization: `Bearer ${accessToken}`}})
  data = await data.json();
  callback(data)
}