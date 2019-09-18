import React, { Component } from 'react';

import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  StyleSheet
} from 'react-native';

import { Input } from 'react-native-elements';

class EditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      task: this.props.name
    };

    this.changeText = this.changeText.bind(this);
    this.toggleOff = this.toggleOff.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.edit(this.state.task);
    this.toggleOff();
    this.props.toggle(this.props.id);
  }

  toggleOff() {
    this.setState({ modalVisible: false });
  }

  changeText(e) {
    // console.log(e);
    const { text } = e.nativeEvent;
    this.setState({
      task: text
    });
  }

  render() {
    // console.log(this.state);
    return (
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          console.log('Modal has been closed.');
        }}
      >
        <View style={styles.modal}>
          <Text style={styles.header}>Edit Todo Item</Text>
          <Input
            containerStyle={{
              borderWidth: 1,
              borderRadius: 10
            }}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            value={this.state.task}
            onChange={this.changeText}
            onSubmitEditing={this.handleSubmit}
          />

          <TouchableHighlight
            style={styles.submitButton}
            onPress={this.handleSubmit.bind(this, this.props.id)}
          >
            <Text style={styles.buttonText}>Submit Change</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    );
  }
}
export default EditForm;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    opacity: 0.8
  },
  header: {
    color: 'white',
    fontSize: 30,
    fontWeight: '400',
    letterSpacing: 2,
    marginBottom: 10
  },
  submitButton: {
    backgroundColor: 'blue',
    marginTop: 20,
    borderRadius: 10,
    padding: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400'
  }
});
