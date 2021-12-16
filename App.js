import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Linking, Vibration, ImageBackground, TouchableOpacity } from 'react-native';
import * as Contact from 'expo-contacts'
import image from './img/cookies.jpg';
// import { Button } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={image} 
        resizeMode="cover" 
        style={styles.image}>
        <Text style={styles.title}>
          hey Macarona.
        </Text>
        <StatusBar style="auto" />
        <TouchableOpacity 
          style={styles.eatButton} 
          onPress={() => Vibration.vibrate([100, 100, 100, 100], true)}>
          <Text style={styles.text}>
            Let's eat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.stopButton} 
          onPress={() => Vibration.cancel()}>
          <Text style={styles.text}>
            Take a break
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: 700,
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 150,
    color: '#777D54',
  },
  eatButton: {
    backgroundColor: '#CEB5A4',
    padding: 10,
    textAlign: "center",
    width: 200,
    marginLeft: 250,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  stopButton: {
    marginTop: 20,
    backgroundColor: '#94878B',
    padding: 10,
    textAlign: "center",
    width: 200,
    marginLeft: 250,
    borderRadius: 10,
    marginBottom: 140,
  }
});
