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
        style={[styles.input, {borderColor: isFocused ? 'darkblue' : '#888'}]}
        secureTextEntry={secureTextEntry}
        value={value}
        spellCheck={false}
        autoCorrect={false}
        onFocus={() => setIsFocused(!isFocused)}
        onBlur={() => setIsFocused(false)}
        onChangeText={data => {
          setLoginData(data);
        }}
      />
      <EvilIcons
        style={[
          styles.icon,
          {right: rightPosition, color: isFocused ? 'blue' : 'black'},
        ]}
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
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#111',
  },
  label: {
    marginBottom: 10,
    fontWeight: '900',
    fontSize: 16,
    color: '#888',
  },
  icon: {
    position: 'absolute',
    right: '0%',
    top: '50%',
  },
});

export default UserInput;
