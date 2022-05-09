import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import UserInput from '../Components/UserInput';
import Button from '../Components/Button';
import auth from '@react-native-firebase/auth';
// import firebase from '@react-native-firebase/app';

const SignUpScreen = ({navigation}) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const signUp = () => {
    auth()
      .createUserWithEmailAndPassword(username, password)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate('LoginScreen');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          alert('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <UserInput
        label="E-Mail"
        iconName="envelope"
        iconSize={29}
        rightPosition="1%"
        setLoginData={setUsername}
      />
      <UserInput
        label="Password"
        iconName="lock"
        iconSize={36}
        rightPosition="0%"
        secureTextEntry={true}
        setLoginData={setPassword}
      />
      <Button
        title="Sign Up"
        pressHandler={signUp}
        backgroundColor="lightseagreen"
      />
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
});

export default SignUpScreen;
