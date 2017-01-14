import API from '../config.js';

const User = {
  isConnected: false,
  findAll() {
    return fetch(`${API.url}users`, {
    	headers: API.headers
    }).then(response => response.json())
  },
  isConnected() {
  	return false;
  },
  connect(content) {
  	const data = JSON.stringify(content);

  	return fetch(`${API.url}auth/sign_in`, {
    	method: 'post',
    	body: data
    }).then(response => {
    	if(response.status === 200) {
    		console.log(response)
	      	API.headers['access-token'] = response.headers.map['access-token'][0];
	      	API.headers['client'] = response.headers.map['client'][0];
	      	API.headers['uid'] = response.headers.map['uid'][0];
	    	User.isConnected = true;
	    }
    	return response;
    })
  }
}

export default User;