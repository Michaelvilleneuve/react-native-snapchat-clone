import React, { Component } from 'react';
import { ListItem, Thumbnail, Text } from 'native-base';

export default class Single extends Component {
  render() {
    return (
      <ListItem>
        <Thumbnail size={40} source={{uri: this.props.user.image}} />
        <Text>{this.props.user.email}</Text>
        <Text note>Membre depuis le {this.props.user.created_at}</Text>
      </ListItem>
    );
  }
}