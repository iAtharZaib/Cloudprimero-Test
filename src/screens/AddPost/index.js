
import React, {useEffect,useState} from 'react';
import {TextInput, SafeAreaView, Text, View, Dimensions} from 'react-native';
import styles from './styles';
// import Header from '../../components/Header';
// import Button from '../../components/Button';
import {COLORS} from '../../const/colors';
// import {AddPost} from '../../modules/app/appActions';
import Snackbar from 'react-native-snackbar';
import { useDispatch } from 'react-redux';
const {width, height} = Dimensions.get('window');

export default function index(props) {
  const dispatch = useDispatch();
  const [title, settitle] = useState('');
  const [body, setbody] = useState('');

  const Submit = () => {
    if (!title || !body) {
      Snackbar.show({
        text: 'Title & Description are required',
        duration: Snackbar.LENGTH_SHORT,
      });
    } else {
      let payload = {
        userId: 1,
        id: Math.random().toFixed(0),
        title: title,
        body: body,
      };
      dispatch(AddPost(payload));
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* <Header middleText="Add Post" /> */}

      <Text style={styles.Title}>TITLE</Text>
      <View style={styles.InputCont}>
        <TextInput
          placeholder="Enter the title"
          style={styles.Input}
          value={title}
          onChangeText={text => settitle(text)}
        />
      </View>
      <Text style={styles.Title}>DESCRIPTION</Text>
      <View style={[styles.InputCont, {height: height * 0.2}]}>
        <TextInput
          placeholder="Enter the description"
          style={styles.Input}
          multiline
          textAlignVertical="top"
          value={body}
          onChangeText={text => setbody(text)}
        />
      </View>
      <View style={styles.BtnCont}>
        {/* <Button Text="Add New Post" Color={COLORS.PRIMARY} 
        onPress={Submit}
        /> */}
      </View>
    </SafeAreaView>
  );
}
