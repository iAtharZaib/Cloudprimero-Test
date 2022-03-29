import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Splash from '../screens/Splash';
import AddPost from '../screens/AddPost';
import MyProfile from '../screens/MyProfile'

const Stack = createStackNavigator();

export default function AppNav() {
  return (
    
      <Stack.Navigator initialRouteName="Splash" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyProfile" component={MyProfile} />
        <Stack.Screen name="AddPost" component={AddPost} />
      </Stack.Navigator>
    
  );
}