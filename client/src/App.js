import React, {Component} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import io from 'socket.io-client';

class App extends Component {

  socket = io('http://localhost:3000')

  componentDidMount() {
    /**
     * Client listen data from server.
     */
    this.socket.on('message', res => {
      // const res = res.json();
      console.log(res)
    })
  }

  sendMessage = () => {
    /**
     * Client send data to server.
     */
    this.socket.emit('message', 'jack message')
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Jack</Text>
        <Button
          onPress={this.sendMessage}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;