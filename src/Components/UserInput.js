import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
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
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.emailContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, {borderColor: isFocused ? 'darkblue' : '#ccc'}]}
        secureTextEntry={secureTextEntry}
        value={value}
        onFocus={() => setIsFocused(!isFocused)}
        onBlur={() => setIsFocused(false)}
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
  input: {
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
