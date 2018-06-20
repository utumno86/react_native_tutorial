import React, { Component } from 'react'
import { View } from 'react-native'
import { Header, Button, Spinner } from './components/common'
import firebase from 'firebase'
import LoginForm from './components/LoginForm'

class App extends Component {
  state = { loggedIn: null }

  componentWillMount () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDdWbkue9zJSy_qfyhd7C28W2LlkH56sAs',
      authDomain: 'authentication-34b74.firebaseapp.com',
      databaseURL: 'https://authentication-34b74.firebaseio.com',
      projectId: 'authentication-34b74',
      storageBucket: 'authentication-34b74.appspot.com',
      messagingSenderId: '674295334392'
    })

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true })
    } else {
      this.setState({ loggedIn: false })
    }
  })
}

renderContent() {
  switch (this.state.loggedIn) {
    case true:
      return (
        <Button onPress={() => firebase.auth().signOut()}>
          Log Out
        </Button>
      )
    case false:
      return <LoginForm />
    default:
      return <Spinner size="large" />
  }
}

  render () {
    return (
      <View>
        <Header headerText="Authentication" />
        { this.renderContent() }
      </View>
    )
  }
}

export default App
