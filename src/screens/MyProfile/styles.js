import {StyleSheet, Dimensions} from 'react-native';
import { COLORS } from '../../const/colors';
import fonts from '../../const/fonts';
//DIMENSTION
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: '2.5%'
  },
  Logo:{
    width: width * 0.4,
    height: width * 0.4,
  },
  RadioRow:{
    width: '90%',
    flexDirection:"row",
    alignItems:'center',
    justifyContent: 'space-around',
    marginVertical: height * 0.015
  },
  RadioOption:{
    flexDirection:"row",
    alignItems:"center",
    width: '40%',
    justifyContent: 'flex-end',
    paddingHorizontal: '10%'
  },
  Radio:{
    width: 15,
    height:15 ,
    borderWidth:1,
    borderRadius: 15/2
  },
  textInputCont: {
    alignSelf: 'center',
    borderRadius: width * 0.035,
    paddingLeft: '5%',
    height: height * 0.07,
    backgroundColor: '#F5F5F5',
    width: '90%',
    justifyContent:'center',
    marginVertical: height * 0.0075,
  },
  Label:{
    fontSize: 15,
    // fontweight:'bold',
    fontFamily: fonts.SANS_BOLD,
    paddingLeft: '5%',
    paddingVertical: 10
  },
  AvatarCont:{
    alignSelf: 'center',
    width: 180,
    height:180,
    marginVertical:10,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: COLORS.INPUTBACK,
    borderRadius: 100
  },
  Img:{
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: 50,
    alignSelf: 'center',
    marginVertical: 10,
  },
  labelText:{
    fontFamily:fonts.SANS_REGULAR,
    fontSize:width*0.043,
    marginHorizontal:5
  },
  imageView: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
});
