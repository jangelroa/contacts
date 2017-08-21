import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    // const query = event.target.value;
    this.setState({ query: query.trim() });
  }

  render() {
    let showingContacts;
    if (this.state.query) {
      showingContacts = this.props.contacts.filter(contact => contact.name.match(this.state.query));
    } else {
      showingContacts = this.props.contacts;
    }
    return (
      <div className="list-contacts" >
        {JSON.stringify(this.state)}
        <div className="list-contacts-top" >
          <input className="search-contacts"
            type="text"
            placeholder="Search contacts"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)} />
        </div>
        <ol className='contact-list'>
          {showingContacts.map(contact => (
            <li key={contact.id} className='contact-list-item' >
              <div className='contact-avatar' style={{
                backgroundImage: `url(${contact.avatarURL})`
              }} >
              </div>
              <div className='contact-details' >
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
              <button onClick={() => this.props.onDeleteContact(contact)} className='contact-remove'>
                Remove
          </button>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}



export default ListContacts
