
import React, {useState} from 'react';
import {TextInput, SafeAreaView, Text, View, Dimensions} from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import Button from '../../components/Button';
import {COLORS} from '../../const/colors';
import Snackbar from 'react-native-snackbar';
import {setSinglePost} from '../../store/actions'
import { useDispatch } from 'react-redux';
const {width, height} = Dimensions.get('window');

export default function index(props) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submitPost = () => {
    if (!title || !description) {
      Snackbar.show({
        text: 'Title & Description are required',
        duration: Snackbar.LENGTH_SHORT,
      });
    } else {
      let data = {
        userId: 1,
        id: Math.floor(Math.random() * 100),
        title: title,
        body: description,
      };
      dispatch(setSinglePost(data));
      Snackbar.show({
        text: 'Post Added Successfully',
        duration: Snackbar.LENGTH_SHORT,
      });
      props.navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header 
      headingText="Add Post" 
      />
      <Text style={styles.titleText}>TITLE</Text>
      <View style={styles.InputCont}>
        <TextInput
          placeholder="Enter the title"
          style={styles.Input}
          value={title}
          selectionColor={COLORS.BLACK}
          onChangeText={text => setTitle(text)}
        />
      </View>
      <Text style={styles.titleText}>DESCRIPTION</Text>
      <View style={[styles.InputCont, {height: height * 0.2}]}>
        <TextInput
          placeholder="Enter the description"
          style={styles.Input}
          multiline={true}
          textAlignVertical="top"
          value={description}
          selectionColor={COLORS.BLACK}
          onChangeText={text => setDescription(text)}
        />
      </View>
      <View style={styles.BtnCont}>
        <Button 
        label="Submit" 
        onPress={submitPost}
        />
      </View>
    </SafeAreaView>
  );
}
