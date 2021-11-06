import React, { Component } from 'react';
import ListContacts from './ListContacts';

class App extends Component {
    state = {
        contacts: [
            {
                "id": "karen",
                "name": "Karen Isgrigg",
                "handle": "karen_isgrigg",
                "avatarURL": "http://localhost:5001/karen.jpg"
            },
            {
                "id": "richard",
                "name": "Richard Kalehoff",
                "handle": "richardkalehoff",
                "avatarURL": "http://localhost:5001/richard.jpg"
            },
            {
                "id": "tyler",
                "name": "Tyler McGinnis",
                "handle": "tylermcginnis",
                "avatarURL": "http://localhost:5001/tyler.jpg"
            }
        ]
    }
    removeContact = (contact) => {
        this.setState((state) => ({
            contacts: state.contacts.filter(obj => obj.id !== contact.id)
        }))
    }
    render() {
        return (
            <ListContacts contacts={this.state.contacts} onRemoveContact={this.removeContact} />
        );
    }
}

export default App;
