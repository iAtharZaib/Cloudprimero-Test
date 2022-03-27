import React, { useEffect } from "react";
import { Dimensions, Image, NativeModules, Platform, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../store/actions";
import styles from "./styles";
const {width} = Dimensions.get('window')
const Home = (props) => {
  const dispatch = useDispatch()
  const languageID = useSelector((state) => state.resourcesReducer.languageID);

  useEffect(() => {
    var deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
    : NativeModules.I18nManager.localeIdentifier;
    deviceLanguage = deviceLanguage.slice(0,2)
    console.log(deviceLanguage,"deviceLanguage in home page");
  if(deviceLanguage == 'en') {
    dispatch(setLanguage(1))
  }
  else if(deviceLanguage == 'ar') {
    dispatch(setLanguage(2))
  }
  else if(deviceLanguage == 'ur') {
    dispatch(setLanguage(3))
  }
  }, []);
  
  return (

    <View style={styles.Container}>
      <TouchableOpacity
        style={[styles.ImgCont,{left:languageID != 1 && Platform.OS == 'ios' ? 0: width * 0.12, alignSelf:languageID != 1 && Platform.OS == 'ios' ? "baseline": "flex-end" }]}
        onPress={() => props.navigation.navigate("SelectLanguage")}
      >
        <Image
          source={languageID == 1 ? require("../../assets/images/smiley2.png") : require("../../assets/images/smiley2Reverse.png")}
          resizeMode='contain'
          style={styles.SmileyImage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
