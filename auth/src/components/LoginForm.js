import React, { Component } from 'react'
import { Card, CardSection, Button, Input } from './common'
import firebase from 'firebase'

class LoginForm extends Component {
  state = { email: '', password: '' }

  onButtonPress() {
    const {email, password} = this.state

    firebase.auth().signInWithEmailAndPassword(email, password)
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
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm

