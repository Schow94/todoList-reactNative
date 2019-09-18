import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

import { Button, Icon } from 'react-native-elements';

class Item extends Component {
  constructor(props) {
    super(props);
  }

  handleDone(id) {
    this.props.onDone(id);
  }

  handleRemove(id) {
    this.props.onRemove(id);
  }

  handleEdit(id) {
    this.props.toggle(id);
  }

  render() {
    const { id, completed, name } = this.props.item;

    return (
      <View
        style={styles.row}
        // onPress={() => this.alerter(item)}
        //above ^^ and below are equivalent
        // onPress={this.alerter.bind(this, item)}
      >
        <Text style={(styles.text, completed ? styles.completed : null)}>
          {this.props.name}
        </Text>
        <View style={styles.buttons}>
          <Icon
            raised
            reverse
            size={20}
            type="material"
            name="done"
            color="green"
            onPress={this.handleDone.bind(this, id)}
          />
          <Icon
            raised
            reverse
            size={20}
            type="material"
            name="create"
            color="orange"
            onPress={this.handleEdit.bind(this, id)}
          />
          <Icon
            raised
            reverse
            size={20}
            type="material"
            name="delete"
            color="red"
            onPress={this.handleRemove.bind(this, id)}
          />
        </View>
      </View>
    );
  }
}

export default Item;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    width: '100%'
  },
  row: {
    padding: 10,
    marginTop: 3,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#dedede',
    borderBottomWidth: 0.5
  },
  text: {
    color: 'black'
  },
  completed: {
    textDecorationLine: 'line-through'
  },
  buttons: {
    flexDirection: 'row'
  }
});
