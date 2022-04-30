import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Login} from '../store/actions';

const HomeScreen = () => {
  const token = useSelector(state => state.Reducers.authToken);

  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(Login(null));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome Back</Text>
      <Text style={styles.username}>{token}</Text>
      <TouchableOpacity style={styles.signOutButton} onPress={() => signOut()}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0ECE6',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10%',
  },
  heading: {
    fontSize: 32,
    color: 'darkblue',
    marginVertical: 20,
    fontWeight: '700',
  },
  username: {
    fontSize: 18,
    color: 'hotpink',
    fontWeight: '500',
  },
  signOutButton: {
    position: 'absolute',
    bottom: 40,
    backgroundColor: '#EE5B47',
    width: '50%',
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signOutText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default HomeScreen;
