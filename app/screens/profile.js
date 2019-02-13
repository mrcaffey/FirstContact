import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View style={StyleSheet.container}>
        <Text style={StyleSheet.title}>
          User Profile
        </Text>
      </View>
    );
    }
  }

  const styles= StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    }
  });