import React, { Component } from 'react';
import { List } from 'native-base';
import Single from './Single/Single.js';
import Snap from '../../../models/Snap.js'

export default class SnapList extends Component {
  state = {
    snaps: []
  }

  componentDidMount() {
    Snap.findAll()
    .then((snaps) => {
      this.setState({
        snaps: snaps
      });
    });  
  }

  render() {
    return (
      <List>
        {this.renderSnaps()}
      </List>
    );
  }

  renderSnaps() {
    if (this.state.snaps.length === 0) return;
    return this.state.snaps.map((snap, i) => {
      return(
        <Single 
          key={i}
          snap={snap}
        />
      )
    })
  }
}