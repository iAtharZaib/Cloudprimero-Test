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
import fonts from '../../const/fonts';
const {width, height} = Dimensions.get('window');

const Post = ({item}) => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: '90%',
    padding: '3%',
    borderWidth: 1,
    borderColor: COLORS.BLACK,
    alignSelf: 'center',
    marginVertical: 10,
  },
  title: {
    fontFamily: fonts.SANS_BOLD,
    paddingBottom: 3,
    fontSize: width * 0.047,
    width: '100%',
  },
  description: {
    fontFamily: fonts.SANS_REGULAR,
    fontSize: width * 0.035,
  },
});

export default Post;
