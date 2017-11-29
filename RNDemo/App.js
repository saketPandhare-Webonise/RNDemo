import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header'

export default class App extends React.Component {
  render() {
    return (

    <Header> </Header>
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      //   <Text>Changes you make will automatically reload.</Text>
      //   <Text>Shake your phone to open the developer mode.</Text>
      //
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
