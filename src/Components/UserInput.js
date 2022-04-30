import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const UserInput = ({
  label,
  iconName,
  iconSize,
  rightPosition,
  secureTextEntry,
  setLoginData,
  value,
}) => {
  return (
    <View style={styles.emailContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.emailInput}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={data => {
          setLoginData(data);
        }}
      />
      <EvilIcons
        style={[styles.icon, {right: rightPosition}]}
        name={iconName}
        size={iconSize}
        color="black"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  emailContainer: {
    marginTop: 40,
  },
  emailInput: {
    borderWidth: 1.5,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  label: {
    marginBottom: 10,
    fontWeight: '900',
    fontSize: 16,
  },
  icon: {
    position: 'absolute',
    right: '0%',
    top: '50%',
  },
});

export default UserInput;
