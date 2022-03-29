
import React, { useEffect } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Post from '../../components/Post'
import {BASE_URL,GET_POSTS} from '../../const/config'
import styles from './styles';
import axios from 'axios';
import { setPostsData } from '../../store/actions';

export default function index(props) {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.mainReducer.posts);

  useEffect(() => {
    if (posts?.length == 0) getPosts();
  }, []);

  const getPosts = () => {
      console.log(BASE_URL+GET_POSTS,"BASE_URL+GET_POSTS")
      axios.get(BASE_URL+GET_POSTS)
      .then((response) => {
        console.log(response,"response")
        dispatch(setPostsData(response.data))
      })
      .catch((error) => {
        console.log(error);
      });
   }
 

  return (
    <SafeAreaView style={styles.container}>
      <Header headingText="Home" />
      <FlatList
        data={posts}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item,index) => index.toString()}
        renderItem={({item, index}) => {
          return <Post item={item} />;
        }}
      />
      <Button
        label="Add New Post"
        onPress={() => props.navigation.navigate('AddPost')}
      />
    </SafeAreaView>
  );
}
