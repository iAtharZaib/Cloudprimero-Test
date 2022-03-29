import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../const/colors';
import fonts from '../../const/fonts';
const {width, height} = Dimensions.get('window');

function index(props) {
  return  (
      <View style={styles.centerTextContainer}>
        <Text style={styles.centerText}>{props?.headingText}</Text>
      </View>
  ) 
}

const styles= StyleSheet.create({
  
  centerTextContainer: {
    alignItems:'center',
    paddingVertical:height*0.02,
    backgroundColor:COLORS.PRIMARY,
    justifyContent:'center',
  },
  centerText: {
    fontSize: width * 0.07,
    fontFamily: fonts.SANS_BOLD,
    color: COLORS.WHITE,
    textAlign: 'center',
  }
});


export default index;
