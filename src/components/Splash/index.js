import React from 'react';
import { ImageBackground, StatusBar, Image, View } from 'react-native';
import styles from './styles';

const Splash = () => {
  return (
    <ImageBackground source={require('../../assets/images/startBG.png')} style={styles.background}>
      <StatusBar backgroundColor="#292A24" barStyle="light-content" />
      <View style={styles.introAnimation}>
        <Image
          style={{ width: 150, height: 150 }}
          source={require('../../assets/images/IntroAnimation.gif')}
        />
      </View>
    </ImageBackground>
  );
}

export default Splash;
