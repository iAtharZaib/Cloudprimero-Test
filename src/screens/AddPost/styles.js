import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../const/colors';
import fonts from '../../const/fonts';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  PostItem:{
    width: '90%',
    padding: '5%',
    borderWidth:1,
    borderColor:'#000',
    alignSelf:'center',
    marginVertical: 10
  },
  titleText:{
    fontFamily: fonts.SANS_BOLD,
    paddingVertical:10,
    fontSize: width * 0.035,
    paddingLeft: '5%'
  },
  Desc:{
    fontFamily: fonts.SANS_REGULAR,
    fontSize: width * 0.033,
  },
  InputCont:{
    width: '90%',
    alignSelf:'center',
    borderWidth:1,
    borderColor: 'transparent',
    borderRadius:width * 0.02,
    padding: 15,
    backgroundColor: COLORS.INPUTBACK
  },
  Input:{
    fontFamily: fonts.SANS_REGULAR,
    fontSize: width* 0.04
  },
  BtnCont:{
    position: 'absolute',
    bottom:'5%',
    alignSelf:'center',
    width: '100%'
  }
});
