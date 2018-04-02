import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import DiceRoller from './DiceRoller'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
 
  render() {
    return (
      <DiceRoller/>
    );
  }
}

const styles = StyleSheet.create({
});
