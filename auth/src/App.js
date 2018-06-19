import React, { Component } from 'react'
import { View } from 'react-native'
import { Header } from './components/common'
import firebase from 'firebase'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDdWbkue9zJSy_qfyhd7C28W2LlkH56sAs',
      authDomain: 'authentication-34b74.firebaseapp.com',
      databaseURL: 'https://authentication-34b74.firebaseio.com',
      projectId: 'authentication-34b74',
      storageBucket: 'authentication-34b74.appspot.com',
      messagingSenderId: '674295334392'
    })
  }

  render () {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    )
  }
}

export default App
