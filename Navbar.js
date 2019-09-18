import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.container}>
      <Text>Navbar Coming soon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
});

export default Navbar;
