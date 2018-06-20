import React, { Component } from 'react'
import { Text } from 'react-native'
import { Card, CardSection, Button, Input } from './common'
import firebase from 'firebase'

class LoginForm extends Component {
  state = { email: '', password: '' , error: ''}

  onButtonPress() {
    const {email, password} = this.state

    this.setState({ error: '' })

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication Failed.'})
          })
      })
  }
  render () {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
        </CardSection>
        <CardSection>
        <Input
            placeholder="password"
            label="Pasword"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            secureTextEntry={true}
        />
        </CardSection>

        <Text style={ styles.errorTextStyle }>
          { this.state.error }
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
  }
}

export default LoginForm

