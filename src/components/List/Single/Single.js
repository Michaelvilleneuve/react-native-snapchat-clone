import React, { Component } from 'react';
import { ListItem, Thumbnail, Text } from 'native-base';

export default class Single extends Component {
  render() {
    return (
      <ListItem>
        <Thumbnail size={40} source={{uri: this.props.snap.user.image}} />
        <Text>{this.props.snap.user.email}</Text>
        <Text note>Reçu le {this.props.snap.created_at}</Text>
      </ListItem>
    );
  }
}