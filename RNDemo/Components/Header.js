import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constant from '../AppConstants/Constant';

const Header = () => {
  return (
    <View style={styles.container}>
    <Text>Albums!</Text>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: Constant.APP_THEME_COLOR
  },

});

export default Header;
