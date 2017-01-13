import React, { Component } from 'react';
import { View } from 'react-native';
import { ListItem, Thumbnail, Text, Icon } from 'native-base';

export default class Single extends Component {
  render() {
    return (
      <ListItem button onPress={this.props.hasSelected.bind(null, this.props.user.id)}>
        <Thumbnail source={{uri: this.props.user.image}} />
    	<Text>{this.props.user.email}</Text>
      </ListItem>
    );
  }
}