import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/SafeTrailLogoHeader.png')}
        style={styles.logo}
      />
        <Image
        source={require('../assets/hamburger.png')}
        style={styles.hamburger}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000000',
    paddingTop:'10%'
  },
  logo: {
    width: 150,
    height: 50,
    margin: 10
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  hamburger: {
    height: 20,
    width: 20,
    margin: 20,
    marginLeft: 'auto'
  }
});

export default Header;