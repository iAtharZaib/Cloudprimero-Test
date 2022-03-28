import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../const/colors';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent:"center",
    alignItems: "center",
  },
  logoImage:{
    width: width * 0.6,
    height: width * 0.6,
  }
  
});
