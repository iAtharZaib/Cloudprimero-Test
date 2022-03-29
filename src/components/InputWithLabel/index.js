import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {COLORS} from '../../const/colors';
const {width, height} = Dimensions.get('window');

function index({placeholderText, isPassword, ...props}) {
  return (
    <>
      <Text style={styles.Label}>{props.Label}</Text>
      <View
        style={[
          styles.container,
          {height: props.height ?? height * 0.07, backgroundColor: '#F5F5F5'},
        ]}>
        <View style={styles.textInputCont}>
          <TextInput
            style={styles.textInput}
            onChangeText={props.onChange}
            value={props.value}
            placeholder={props.placeholder}
            secureTextEntry={isPassword}
          />
        </View>
        {props.Icon && (
          <TouchableOpacity style={styles.passwordIconCont}>
            <Image
              source={props.Icon}
              style={styles.ArrowIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: width * 0.035,
    paddingLeft: '5%',
    marginVertical: height * 0.0075,
  },
  PlaceHolderStye: {
    width: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCont: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: '50%',
    height: '50%',
  },
  textInputCont: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
  },
  textInput: {
    color: COLORS.BLACK,
    fontSize: width * 0.035,
  },
  Label: {
    color: COLORS.BLACK,
    paddingLeft: '5%',
    fontSize: width * 0.035,
    fontFamily: 'Product Sans Bold',
    alignSelf: 'flex-start',
  },
  passwordIconCont: {
    width: height * 0.06,
    height: height * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    zIndex: 999,
    bottom: 0,
  },
  isPasswordIcon: {
    width: '100%',
    height: '100%',
  },
  ArrowIcon: {
    width: '50%',
    height: '50%',
  },
});

export default index;
