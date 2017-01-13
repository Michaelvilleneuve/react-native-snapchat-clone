import React, { Component } from 'react';
import { List, Button, Container, Header, Title, Content } from 'native-base';
import Single from './Single/Single.js';
import User from '../../../models/User.js'
import Snap from '../../../models/Snap.js'
import Theme from '../../styles/theme.js';

export default class Send extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    User.findAll()
    .then((users) => {
      this.setState({
        users: users
      });
    });  
  }

  hasSelected(user_id) {
    const data = {
      recipient_id: user_id,
      image: this.props.getImageData().path
    }
    
    Snap.create(data)
    .then((data) => {
      console.log(data);
    })
  }

  render() {
    return (
      <Container theme={Theme}>
        <Header>
          <Title>Send</Title>
          <Button transparent onPress={this.props.toggleList}>Cancel</Button>
        </Header>
        <Content>
          <List>
            {this.renderUsers()}
          </List>
        </Content>
      </Container>
    );
  }

  renderUsers() {
    if (this.state.users.length === 0) return;
    return this.state.users.map((user, i) => {
      return(
        <Single 
          key={i}
          user={user}
          hasSelected={this.hasSelected.bind(this)}
        />
      )
    })
  }
}