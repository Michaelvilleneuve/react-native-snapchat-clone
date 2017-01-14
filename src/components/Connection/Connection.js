import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Container, Content, InputGroup, Input, Button, Icon, View, Text} from 'native-base';
import User from '../../../models/User.js';

export default class Connection extends Component {
  state = {
    errors: ""
  }
  connect() {
    User.connect(this.state)
    .then((response) => {
      if(response.status !== 200) {
        this.setState({
          errors: "Looks like your credentials are invalid."
        });
        return;
      }
      this.props.checkConnection();
    })
  }


  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Content>
            <View style={styles.bg}>
              <InputGroup style={styles.input}>
                <Icon name="ios-person" style={styles.icon}/>
                <Input placeholder="EMAIL" onChangeText={email => this.setState({ email, errors: "" })} />
              </InputGroup>
              <InputGroup style={styles.input}>
                <Icon name="ios-unlock-outline" style={styles.icon}/>
                <Input
                  placeholder="PASSWORD"
                  onChangeText={password => this.setState({ password, errors: "" })}
                  secureTextEntry
                />
              </InputGroup>
              <Button style={styles.btn} onPress={this.connect.bind(this)}>
                Login to Snap
              </Button>
              <Text style={styles.errors}>{this.state.errors}</Text>
            </View>
          </Content>
        </View>
      </Container>
    );
  }
}

const styles = {
    container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#60C49E',
  },
  shadow: {
    flex: 1,
    width: null,
    height: null,
  },
  errors: {
    color: "yellow",
    padding: 10
  },
  icon: {
    color: '#fff',
  },
  bg: {
    flex: 1,
    marginTop: Dimensions.get('window').height / 3.5,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
    bottom: 0,
  },
  input: {
    marginBottom: 20,
  },
  btn: {
    marginTop: 20,
    width: Dimensions.get('window').width - 40,
    borderRadius: 90,
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignSelf: 'center',
  }
}