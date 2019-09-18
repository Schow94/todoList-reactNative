import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

import { Button, Icon } from 'react-native-elements';

import Item from './Item';
import EditForm from './EditForm';

class List extends Component {
  constructor(props) {
    super(props);

    this.edit = this.edit.bind(this);
    this.onDone = this.onDone.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.toggle = this.toggle.bind(this);
    // this.close = this.close.bind(this);
  }

  edit(item) {
    this.props.edit(item);
  }

  onRemove(id) {
    this.props.remove(id);
  }
  toggle(id) {
    this.props.toggle(id);
  }
  onDone(id) {
    this.props.doneStatus(id);
  }
  // close() {
  //   this.props.close();
  // }

  renderList() {
    console.log(this.props);
    return this.props.list.map(item =>
      !item.clicked ? (
        <Item
          key={item.id}
          id={item.id}
          item={item}
          name={item.name}
          onRemove={this.onRemove}
          toggle={this.toggle}
          onDone={this.onDone}
          // close={this.close}
        />
      ) : (
        <EditForm
          edit={this.edit}
          item={item}
          name={item.name}
          id={item.id}
          key={item.id}
          toggle={this.toggle}
        />
      )
    );
  }

  render() {
    return <View style={styles.container}>{this.renderList()}</View>;
  }
}

export default List;

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
