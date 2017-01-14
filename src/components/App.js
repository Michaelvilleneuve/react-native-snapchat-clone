import React, { Component } from 'react';
import { Text, Modal, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, Badge } from 'native-base';
import Theme from '../styles/theme.js';
import Capture from './Capture/Capture.js';
import List from './List/List.js';
import Send from './Send/Send.js';

export default class App extends Component {
  
  state = {
    takingPicture: false,
    sendingPicture: false,
    listCount: ""
  }

  updateListCount(count) {
  	this.setState({
  		listCount: count
  	});
  }

  toggleCapture() {
    this.setState({
      takingPicture: !this.state.takingPicture,
      sendingPicture: false,
    });
  }

  toggleSend(data) {
    this.setState({
      takingPicture: false,
      sendingPicture: true,
      imageData: data,
    });
  }

  toggleList() {
    this.setState({
      takingPicture: false,
      sendingPicture: false,
    }); 
  }
  
  getImageData() {
  	return this.state.imageData;
  }

  render() {
    return (
    <Container theme={Theme}>

      <Content>
        <Header>
          <Title>SnapChat n°2</Title>
        </Header>
        <List updateListCount={this.updateListCount.bind(this)}/>

        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.takingPicture}
          >
          <Capture toggleSend={this.toggleSend.bind(this)}/>
        </Modal>

        <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.sendingPicture}
            >
            <Send toggleList={this.toggleList.bind(this)} getImageData={this.getImageData.bind(this)}/>
        </Modal>

      </Content>

      <Footer>
        <FooterTab>
          <Button transparent>
            <Badge>{this.state.listCount}</Badge>
            <Icon name='ios-cloudy-outline' />
          </Button>  
          <Button transparent onPress={this.toggleCapture.bind(this)}>
            <Icon name='ios-camera-outline' />
          </Button>  
        </FooterTab>
      </Footer>
      
    </Container>
    );
  }
}
