import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Grid, Col } from 'native-base';
import Camera from 'react-native-camera';

export default class Capture extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={{opacity: 1, position: "absolute", backgroundColor: 'white', flex: 1,height: Dimensions.get('window').height, width: Dimensions.get('window').width}}
          aspect={Camera.constants.Aspect.fill}>
        </Camera>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}>
          <View style={{width: 50, height: 50, marginBottom: 50}}>
            <Button onPress={this.props.toggleModal} transparent style={{borderRadius: 100, width: 50, height: 50, backgroundColor: "white"}}>
              <Icon name='ios-camera-outline' />
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
