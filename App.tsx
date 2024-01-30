import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import Routes from './src/routes';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:"#fff"}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Routes />
    </SafeAreaView>
  );
};

export default App;