import API from '../config.js';
import { NativeModules } from 'react-native';

const Snap = {
  findAll() {
    return fetch(`${API.url}snaps`, {
      headers: API.headers
    })
    .then(response => response.json())
  },

  find(id) {
    return fetch(`${API.url}snaps/${id}`, {
      headers: API.headers
    })
    .then(response => response.json())
  },

  destroy(id) {
    return fetch(`${API.url}snaps/${id}`, {
        method: 'delete',
        headers: API.headers
    })
    .then(response => {
      return (response.status >= 200 && response.status <= 299);
    })
  },

  create(content) {
    const data = JSON.stringify({
      snap: content
    })

    return fetch(`${API.url}snaps`, {
      method: 'post',
      body: data,
      headers: API.headers
    })

  }
}

export default Snap;