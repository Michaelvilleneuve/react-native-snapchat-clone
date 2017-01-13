import API from '../config.js';

const User = {
  findAll() {
    return fetch(`${API.url}users`).then(response => response.json())
  }
}

export default User;