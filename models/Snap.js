import API from '../config.js';

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
      debt: content
    })

    return fetch(`${API.url}snaps`, {
            method: 'post',
            body: data
        })
        .then(response => response.json())
  }
}

export default Snap;