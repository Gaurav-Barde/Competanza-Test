import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Login} from '../store/actions';

import UserInput from '../Components/UserInput';
import Button from '../Components/Button';

// Google SignIn
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';

GoogleSignin.configure({
  webClientId:
    '886710162781-ecfe8818ifnvhorh7m7u9fkh53l291la.apps.googleusercontent.com',
});

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  const signIn = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (username === user.email) {
        dispatch(Login(user.email));
      } else {
        alert('User Does not exist');
      }
      console.log(user);
    });
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

  const goToSignUpScreen = () => navigation.navigate('SignUpScreen');

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
      <Button
        title="Sign In"
        pressHandler={signIn}
        backgroundColor="darkblue"
      />
      <Text style={{textAlign: 'center'}}>OR</Text>
      <Button
        title="Sign In with Google"
        pressHandler={googleSignIn}
        backgroundColor="#BE2320"
      />
      <View style={styles.signUpCTAContainer}>
        <Text>Don`t Have an Account?</Text>
        <Text
          style={styles.signUpCTA}
          onPress={() => navigation.navigate('SignUpScreen')}>
          Sign Up
        </Text>
      </View>
      {/* <Button
        title="Create an Account"
        pressHandler={goToSignUpScreen}
        backgroundColor="lightseagreen"
      /> */}
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
  signUpCTAContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  signUpCTA: {
    marginLeft: 5,
    color: '#0125FC',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
