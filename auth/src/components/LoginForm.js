import React, { Component } from 'react'
import { Text } from 'react-native'
import { Card, CardSection, Button, Input, Spinner } from './common'
import firebase from 'firebase'

class LoginForm extends Component {
  state = { email: '', password: '' , error: '', loading: false }

  onButtonPress() {
    const { email, password, loading } = this.state

    this.setState({ error: '', loading: true })

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this))
      })
  }

  onLoginFail() {
    this.setState({
      loading: false,
      error: 'Authentication Failed.'
    })
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    })
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />
    } else {
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Log in
        </Button>
      )
    }
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
          { this.renderButton() }
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

