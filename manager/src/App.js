import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import reducers from './reducers'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount () {
    const config = {
      apiKey: 'AIzaSyDuR6h57agPOPUXdqzquhg77kMGl4cWlP0',
      authDomain: 'manager-d89fd.firebaseapp.com',
      databaseURL: 'https://manager-d89fd.firebaseio.com',
      projectId: 'manager-d89fd',
      storageBucket: 'manager-d89fd.appspot.com',
      messagingSenderId: '477439549563'
    }

    firebase.initializeApp(config)
  }

  render () {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm/>
      </Provider>
    )
  }
}

export default App
