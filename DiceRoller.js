import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FloatLabelTextInput from 'react-native-floating-label-text-input';


export default class DiceRoller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            diceType: 6,
            diceNumber: 2,
        };
    }
  render() {
    return (
        <View style={{flex: 1, flexDirection: 'column', paddingTop: 20}}>
        <View style={{width: 400, height: 200, backgroundColor: 'powderblue', flexDirection: 'row', flexWrap: 'wrap'}} >
          {[...Array(this.state.diceNumber)].map((dieNumber, index) =>
            <Text style={{backgroundColor: '#b24943', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, margin: 5, maxHeight: 30, minWidth: 40, textAlign: 'center', color: 'white'}}>
                {Math.floor(Math.random() * this.state.diceType) + 1}
            </Text>
          )}
        </View>
        <View style={{width: 400, height: 200, backgroundColor: 'skyblue', flexDirection: 'row'}} >
          <View style={{width: 200}} >
            <FloatLabelTextInput
              placeholder={"Dice Type (d4, d6...)"}
              value={this.state.diceType}
              onChangeTextValue={(text) => this.setState({diceType: Number(text)})}
            />
          </View>
          <View style={{width: 200}} >
            <FloatLabelTextInput
              placeholder={"Number of dice to roll"}
              value={this.state.diceNumber}
              onChangeTextValue={(text) => this.setState({diceNumber: Number(text)})}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
});
