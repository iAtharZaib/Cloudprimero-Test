import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Splash from '../screens/Splash';
import AddPost from '../screens/AddPost';
import MyProfile from '../screens/MyProfile'


const Stack = createNativeStackNavigator();

export default function AppNav() {
  return (
    
      <Stack.Navigator initialRouteName="Splash" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="AddPost" component={Home} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyProfile" component={MyProfile} />
      </Stack.Navigator>
    
  );
}