import React, {useEffect} from 'react';
import {Image, ImageBackground} from 'react-native';
import {images} from '../../const/images';
import styles from './styles';

export default function index(props) {
  useEffect(() => {
    setTimeout(() => {
      // props.navigation.navigate(user ? 'Home' : 'PersonalInfo');
    }, 1500);
  }, []);

  return (
    <>
      <ImageBackground
        style={styles.mainContainer}
        source={images.backgroundImage}>
        <Image
          source={images.logo}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </ImageBackground>
    </>
  );
}
