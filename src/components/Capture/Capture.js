import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Grid, Col } from 'native-base';
import Camera from 'react-native-camera';

export default class Capture extends Component {
  
  snap() {
    this.camera.capture()
      .then((data) => {
        this.props.toggleSend("data:image/png;base64," + data.data);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <View style={styles.main}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          captureTarget="memory"
          style={styles.camera}
          aspect={Camera.constants.Aspect.fill}>
        </Camera>
        <View style={styles.buttonContainer}>
          <View style={styles.smallButtonContainer}>
            <Button 
              onPress={this.snap.bind(this)} 
              transparent 
              style={styles.captureButton}>
              <Icon name='ios-camera-outline' />
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  main: {
    flex: 1
  },

  camera: {
    opacity: 1, 
    position: "absolute", 
    backgroundColor: 'white', 
    flex: 1,
    height: Dimensions.get('window').height, 
    width: Dimensions.get('window').width
  },

  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  smallButtonContainer: {
    width: 50, 
    height: 50, 
    marginBottom: 50
  },

  captureButton: {
    borderRadius: 100, 
    width: 50, 
    height: 50, 
    backgroundColor: "white"
  }
}
