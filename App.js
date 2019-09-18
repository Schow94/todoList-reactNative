import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import { Header, Button, ThemeProvider } from 'react-native-elements';
import uuid from 'uuid/v4';

import List from './List';
import Navbar from './Navbar';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: uuid(), name: 'Eat Dinner', completed: true, clicked: false },
        { id: uuid(), name: 'Sleep', completed: false, clicked: false },
        { id: uuid(), name: 'Go to the gym', completed: false, clicked: false },
        { id: uuid(), name: 'Do Laundry', completed: false, clicked: false }
      ]
    };

    this.remove = this.remove.bind(this);
    this.toggle = this.toggle.bind(this);
    this.doneStatus = this.doneStatus.bind(this);
    this.add = this.add.bind(this);
    this.edit = this.edit.bind(this);
  }

  remove(id) {
    const newList = this.state.list.filter(item => {
      return item.id !== id;
    });
    this.setState({ list: newList });
  }

  toggle(id) {
    const newList = this.state.list.map(item => {
      if (item.id === id) {
        return { ...item, clicked: !this.state.clicked };
      }
      return item;
    });
    this.setState({ list: newList });
  }

  doneStatus(id) {
    // console.log('passed as a prop', id);

    const completedTodos = this.state.list.map(item => {
      // console.log('from state', item.id);
      console.log(item);
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });

    this.setState({ list: completedTodos });
  }

  add(val) {
    // console.log('adding new item');
    //needs to map through list and add a new item to end of list
    newVal = {
      id: uuid(),
      name: val,
      completed: false
    };
    this.setState({
      list: [...this.state.list, newVal]
    });
  }

  edit(updatedItem) {
    alert('editing:', updatedItem);
  }

  render() {
    // console.log(this.state);
    return (
      <ThemeProvider theme={theme}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{
            text: 'To Do List',
            style: { fontSize: 20, color: '#fff' }
          }}
          rightComponent={{ icon: 'home', color: '#fff' }}
          containerStyle={{
            backgroundColor: '#3F51B5'
          }}
        />
        <View style={styles.container}>
          <Form style={styles.form} add={this.add} />
          <View style={styles.div} />
          <List
            edit={this.edit}
            list={this.state.list}
            doneStatus={this.doneStatus}
            remove={this.remove}
            toggle={this.toggle}
            // close={this.close}
          />
        </View>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontSize: 10,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 15
  },
  div: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    alignItems: 'center'
  }
});

const theme = {
  Icon: {
    containerStyle: {
      paddingRight: 1
    }
  }
};

export default App;
