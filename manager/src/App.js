import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import LoginForm from './components/LoginForm'

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

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
      <Provider store={ store }>
        <LoginForm/>
      </Provider>
    )
  }
}

export default App
