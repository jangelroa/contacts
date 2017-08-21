import React, { Component } from 'react';
import ListContacts from './ListContacts';

class App extends Component {
  contacts = [
    {
      "id": "ryan",
      "name": "Ryan Florence",
      "email": "ryan@reacttraining.com",
      "avatarURL": "http://localhost:5001/ryan.jpg"
    },
    {
      "id": "michael",
      "name": "Michael Jackson",
      "email": "michael@reacttraining.com",
      "avatarURL": "http://localhost:5001/michael.jpg"
    },
    {
      "id": "tyler",
      "name": "Tyler McGinnis",
      "email": "tyler@reacttraining.com",
      "avatarURL": "http://localhost:5001/tyler.jpg"
    }
  ];

  state = {
    contacts: this.contacts
  }

  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
  }

  resetContacts = () => {
    this.setState({ contacts: this.contacts })
  }

  render() {
    return (
      <div>
        <ListContacts
          onResetContacts={this.resetContacts}
          onDeleteContact={this.removeContact}
          contacts={this.state.contacts}
          originalContacts={this.contacts} />
      </div>
    );
  }
}

export default App;
