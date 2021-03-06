import React, { Component } from 'react';

class Child extends Component {

    constructor (props) {
        super(props);

        this.state = {
            id: props.id,
            name: props.name,
            email: props.email,
            age: props.age,
            photo: props.photo,
            items: props.items
        }
    }
  
    render() {
        return (
        // This is the HTML (as JSX) for a Child
        <div>
            <h3><a href={"/user/" + this.state.id}>{this.state.name}</a></h3>
            <ul>
                <li>Email: {this.state.email} </li>
                <li>Age: {this.state.age} </li>
                <li> Photo: {this.state.photo} </li>
            </ul>
        </div>
        );
    }
}

export default Child;