import React, { Component } from 'react';
import { Text, Modal, View } from 'react-native';
import storage from 'react-native-sync-storage';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, Badge } from 'native-base';
import Theme from '../styles/theme.js';
import User from '../../models/User.js';
import API from '../../config.js';
import Capture from './Capture/Capture.js';
import Connection from './Connection/Connection.js';
import List from './List/List.js';
import Send from './Send/Send.js';

export default class App extends Component {
  
  state = {
    isConnected: User.isConnected(),
    takingPicture: false,
    sendingPicture: false,
    listCount: ""
  }

  componentDidMount() {
    this.getToken();
  }

  async getToken() {
    await storage.init;
    const headers = storage.get('headers');
    if (headers) {
      API.headers = headers;
      this.checkConnection();
    }
  }

  updateListCount(count) {
  	this.setState({
  		listCount: count
  	});
  }

  checkConnection() {
    this.setState({
      isConnected: true
    })
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
    if(this.state.isConnected) {
      return(
        <Container theme={Theme}>
          <Content style={{backgroundColor: "#666"}}>
          <Header>
            <Title>SnapChat n°2</Title>
          </Header>
          <List updateListCount={this.updateListCount.bind(this)}/>

          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.takingPicture}
            onRequestClose={() => { return true}}
            >
            <Capture toggleSend={this.toggleSend.bind(this)}/>
          </Modal>

          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.sendingPicture}
            onRequestClose={() => { return true}}
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
      )
    }
    return(
      <Connection checkConnection={this.checkConnection.bind(this)}/>
    )
  }
}
