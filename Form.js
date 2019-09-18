import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Input } from 'react-native-elements';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ''
    };
    this.addItem = this.addItem.bind(this);
    this.changeText = this.changeText.bind(this);
    this.clear = this.clear.bind(this);
  }

  clear() {
    this.setState({
      task: ''
    });
  }

  addItem(item) {
    this.clear();
    this.props.add(item);
    // console.log(this.state);
  }

  changeText(e) {
    const { text } = e.nativeEvent;
    // console.log(e);
    this.setState({
      task: text
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Input
          containerStyle={{
            borderWidth: 1,
            borderRadius: 10
          }}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          // label="add a new to do item"
          placeholder="Add a new todo item"
          value={this.state.task}
          onChange={this.changeText}
          onSubmitEditing={this.addItem.bind(this, this.state.task)}
          style={styles.formContainer}
        />
        <TouchableOpacity
          onPress={this.addItem.bind(this, this.state.task)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add Item</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    margin: 10
  },
  label: {
    opacity: 0.5,
    marginLeft: 5,
    paddingBottom: 5
  },
  formContainer: {
    borderColor: 'grey',
    borderWidth: 0.5,
    borderRadius: 10,
    height: 40,
    paddingLeft: 20,
    margin: 5
  },
  button: {
    backgroundColor: '#1a73e8',
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: {
    letterSpacing: 5,
    fontWeight: '400',
    fontSize: 15,
    color: '#fff'
  }
});

export default Form;
