import React, { Component } from 'react';
import { ListItem, Thumbnail, Text, Icon } from 'native-base';

export default class Single extends Component {
  checkAction() {
    if (this.props.snap.viewed) return;
    this.props.itemPressed(this.props.snap.id);
  }

  iconToDisplay() {
    return this.props.snap.viewed ? 'ios-checkmark-outline' : 'ios-cloud-download-outline';
  }

  render() {
    return (
      <ListItem onPress={this.checkAction.bind(this)}>
        <Thumbnail size={40} source={{uri: this.props.snap.user.image}} />
        <Text style={{color: "#fff"}}>{this.props.snap.user.email}</Text>
        <Text note>Reçu le {this.props.snap.created_at}</Text>
        <Icon name={this.iconToDisplay()} style={{position: 'absolute', right: 10, color: "#fff"}}/>
      </ListItem>
    );
  }
}