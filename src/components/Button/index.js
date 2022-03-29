import React from 'react';
import { Dimensions, Text, TouchableOpacity,StyleSheet } from 'react-native';
import { COLORS } from '../../const/colors';
import fonts from '../../const/fonts';
const {width, height} = Dimensions.get('window');

function index(props) {
  const {height} = Dimensions.get('window');
  return (
    <TouchableOpacity
      style={[
        styles.mainContainer,
        {
          backgroundColor: COLORS.PRIMARY,
          width: props.width ?? '85%',
          height: props.height ?? height * 0.065
        },
      ]}
      onPress={props.onPress}>
      <Text style={styles.labelText}>{props.label}</Text>
    </TouchableOpacity>
  );
}
const styles= StyleSheet.create({
  mainContainer: {
    borderRadius: width * 0.01,
    marginVertical: height * 0.0125,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  labelText: {
    fontSize: width * 0.05,
    fontFamily: fonts.SANS_BOLD,
    opacity: 1,
    color: COLORS.WHITE,
  },
}); 

export default index;
