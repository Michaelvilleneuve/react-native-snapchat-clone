import React, { Component } from 'react';
import { Image, View, Dimensions } from 'react-native';
import Snap from '../../../../models/Snap.js'
import { Button, Icon } from 'native-base';

export default class Show extends Component {
 
  state = {}

  componentDidMount() {
  	this.getImage();
  }

  getImage() {
  	Snap.find(this.props.getShowId())
  		.then((snap) => {
  			this.setState({
  				snap: snap
  			});
        setTimeout(() => {
          this.props.back(snap.id);
        }, 10000);
  		})
  }

  render() {
    return (
      <View style={styles.main}>
        <Image source={{uri: ((this.state.snap)? this.state.snap.image : "#")}} style={styles.image}/>
        <View style={styles.buttonContainer}>
          <View style={styles.smallButtonContainer}>
            <Button 
              onPress={this.props.back.bind(null, ((this.state.snap)? this.state.snap.id : 0))}
              transparent 
              style={styles.captureButton}>
              <Icon name='ios-close' style={{color: 'white'}}/>
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

  image: {
    flex: 1, 
    position: "absolute",
    height: Dimensions.get('window').height, 
    width: Dimensions.get('window').width, 
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
    borderColor: "white",
    borderWidth: 1,
    width: 50, 
    height: 50, 
    backgroundColor: "black"
  }
}
