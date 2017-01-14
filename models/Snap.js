import API from '../config.js';
import { NativeModules } from 'react-native';

const Snap = {
  findAll() {
    return fetch(`${API.url}snaps`).then(response => response.json())
  },

  find(id) {
    return fetch(`${API.url}snaps/${id}`)
        .then(response => response.json())
  },

  destroy(id) {
    return fetch(`${API.url}snaps/${id}`, {
            method: 'delete'
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
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })

  }
}

export default Snap;