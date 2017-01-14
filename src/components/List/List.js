import React, { Component } from 'react';
import { Modal } from 'react-native';
import { List, Container, Content, H1 } from 'native-base';
import Single from './Single/Single.js';
import Show from './Show/Show.js';
import _ from 'lodash';
import Snap from '../../../models/Snap.js'

export default class SnapList extends Component {
  state = {
    snaps: [],
    viewingPicture: false
  }

  componentDidMount() {
    this.refresh();  
    setInterval(() => {
      this.refresh();  
    }, 10000);
  }

  itemPressed(id) {
    this.setState({
      viewingPicture: true,
      viewingId: id
    })
  }

  getShowId() {
    return this.state.viewingId;
  }

  refresh() {
    Snap.findAll()
    .then((snaps) => {
      this.setState({
        snaps: snaps
      });
      this.props.updateListCount(snaps.length);
    });
  }

  back(id) {
    Snap.destroy(id)
      .then(() => {
        _.remove(this.state.snaps, (snap) => {return snap.id === id})
        this.setState({
          snaps: this.state.snaps
        });
        this.props.updateListCount(this.state.snaps.length);
        this.setState({
          viewingPicture: false
        });
      })

  }

  render() {
    return (
      <List>
        <Modal
            animationType={"fade"}
            transparent={false}
            style={{backgroundColor: "black"}}
            visible={this.state.viewingPicture}
            >
            <Show getShowId={this.getShowId.bind(this)} back={this.back.bind(this)}/>
        </Modal>
        {this.renderSnaps()}
      </List>
    );
  }

  renderSnaps() {
    if (this.state.snaps.length === 0) return this.renderEmpty();
    
    return this.state.snaps.map((snap, i) => {
      return(
        <Single 
          key={i}
          snap={snap}
          itemPressed={this.itemPressed.bind(this)}
        />
      )
    })
  }

  renderEmpty() {
    return(
        <Container>
            <Content style={{padding: 30}}>
                <H1>Aucuns Snap pour le moment :(</H1>
            </Content>
        </Container>
      )
  }
}