
import React,{useEffect} from 'react';
import {
  SafeAreaView, StyleSheet,
  Text
} from 'react-native';
import fonts from '../../const/fonts';

const App = () => {


  return (
    <SafeAreaView style={{backgroundColor:'white', flex:1, alignItems:'center', justifyContent:'center'}}>
     <Text style={{ fontFamily:fonts.SANS_BOLD_ITALIC}}>Profile</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
