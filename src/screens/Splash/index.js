import React, {useEffect} from 'react';
import {Image, ImageBackground} from 'react-native';
import { useSelector } from 'react-redux';
import {images} from '../../const/images';
import styles from './styles';


export default function index(props) {

  const userDetails = useSelector(state => state.mainReducer.userData);
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate(userDetails ? 'Home' : 'MyProfile');
    }, 2000);
  }, [userDetails]);


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
