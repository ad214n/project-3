import React, { Component } from 'react';
import axios from 'axios';

class NewUser extends Component {
  sendGet() {
    axios.get('/api/children')
      .then(function (response) {
        console.log(response);
      })
  }

  render() {
    return (
      // This is the HTML (as JSX) for the new user form
      // convert this to create a new user
      // action and inputs need to change
      <div>
        <h3>New User Sign Up</h3>
        <form action="/api/child/create" method="post">
        <div>
            <label class='text' for="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label class='text' for="email">Email</label>
            <input type="text" id="email" name="email" />
          </div>
          <div>
            <label class='text' for="age">Age</label>
            <input type="text" id="age" name="age" />
          </div>
          <div>
            <label class='text' for="photo">Photo URL</label>
            <input type="text" id="photo" name="photo" />
          </div>
          <input type="submit" value="Create Account" />
        </form>
        <button onClick={this.sendGet}>Testing</button>
      </div>
    );
  }
}

export default NewUser;