import React, { Component } from 'react';
import { Text, Modal, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, Badge } from 'native-base';
import Theme from '../styles/theme.js';
import Capture from './Capture/Capture.js';
import List from './List/List.js';

export default class App extends Component {
  
  state = {
    takingPicture: false
  }

  toggleModal() {
    this.setState({
      takingPicture: !this.state.takingPicture
    });
  }

  render() {
    return (
    <Container theme={Theme}>
      <Header>
        <Title>Snapps</Title>
      </Header>

      <Content style={{padding: 20}}>
        <List/>
        <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.takingPicture}
            >
            <Capture toggleModal={this.toggleModal.bind(this)}/>
        </Modal>
      </Content>

      <Footer>
        <FooterTab>
          <Button transparent>
            <Badge>2</Badge>
            <Icon name='ios-cloudy-outline' />
          </Button>  
          <Button transparent onPress={this.toggleModal.bind(this)}>
            <Icon name='ios-camera-outline' />
          </Button>  
        </FooterTab>
      </Footer>
      
    </Container>
    );
  }
}
