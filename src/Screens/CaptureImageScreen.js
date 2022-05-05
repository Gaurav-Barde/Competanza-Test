import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';

import Button from '../Components/Button';

const CaptureImageScreen = () => {
  const [image, setImage] = useState(
    'https://images.unsplash.com/photo-1464820453369-31d2c0b651af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=50',
  );

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };

  const chooseImageFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={{uri: image}}
          style={{height: 180, width: 180}}>
          <View></View>
        </ImageBackground>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Take Photo"
          pressHandler={takePhotoFromCamera}
          backgroundColor="darkblue"
        />
        <Button
          title="Choose Image from Library"
          pressHandler={chooseImageFromLibrary}
          backgroundColor="darkblue"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 15,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    width: '100%',
  },
  buttonContainer: {
    marginVertical: 25,
    backgroundColor: 'darkblue',
    padding: 10,
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default CaptureImageScreen;
