
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Splash from '../src/screens/Splash';
import AppNav from './navigation/AppNav';
import { persistor, store } from './store/store';

const App = () => {


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppNav />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
