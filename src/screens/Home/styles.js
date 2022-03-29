import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../const/colors';



//DIMENSTION
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  }
});
