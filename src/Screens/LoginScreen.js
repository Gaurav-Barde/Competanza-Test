import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Login} from '../store/actions';
import UserInput from '../Components/UserInput';

// Google SignIn
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId:
    '886710162781-ecfe8818ifnvhorh7m7u9fkh53l291la.apps.googleusercontent.com',
});

const LoginScreen = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  const signIn = () => {
    dispatch(Login(username, password));
  };

  const googleSignIn = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    const usernameDetails = await auth().signInWithCredential(googleCredential);

    dispatch(Login(usernameDetails.additionalUserInfo.profile.email));

    console.log(usernameDetails.additionalUserInfo.profile);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to Competanza</Text>
      <UserInput
        label="E-Mail"
        iconName="envelope"
        iconSize={29}
        rightPosition="1%"
        setLoginData={setUsername}
        value={username}
      />
      <UserInput
        label="Password"
        iconName="lock"
        iconSize={36}
        rightPosition="0%"
        secureTextEntry={true}
        setLoginData={setPassword}
        value={password}
      />
      <TouchableOpacity style={styles.signInButton} onPress={() => signIn()}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>
      <Text style={{textAlign: 'center'}}>OR</Text>
      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => googleSignIn()}>
        <Text style={styles.signInText}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'White',
    flex: 1,
    justifyContent: 'center',
    padding: '10%',
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    color: 'darkblue',
  },
  signInButton: {
    marginVertical: 20,
    width: '100%',
    paddingVertical: 15,
    backgroundColor: 'darkblue',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
});

export default LoginScreen;
