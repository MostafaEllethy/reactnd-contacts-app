import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class ListContacts extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onRemoveContact: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }
    onQueryChange = (query) => {
        this.setState(() => ({
            query: query
        }))
    }
    render() {
        const { query } = this.state
        const { contacts, onRemoveContact } = this.props
        const showingContacts = query === '' ? contacts : contacts.filter(c => c.name.toLowerCase().includes(query.toLowerCase()))

        return <div className='list-contacts'>
            <div className='list-contacts-top'>
                <input className='search-contacts' type='text' value={query} onChange={(event) => this.onQueryChange(event.target.value)} />
                <Link to='/create' className='add-contact'>Add Contact</Link>
            </div>
            {contacts.length !== showingContacts.length && (
                <div className='showing-contacts'>
                    <span>Now showing {showingContacts.length} of {contacts.length}</span>
                    <button onClick={() => this.onQueryChange('')}>Show all</button>
                </div>
            )}
            <ol className='contact-list'>
                {
                    showingContacts.map(obj => {
                        return (
                            <li key={obj.id} className='contact-list-item'>
                                <div className='contact-avatar' style={{ 'backgroundImage': `url(${obj.avatarURL})` }}></div>
                                <div className='contact-details'>
                                    <p>{obj.name}</p>
                                    <p>{obj.handle}</p>
                                </div>
                                <button className='contact-remove' onClick={() => onRemoveContact(obj)}>
                                    Remove
                                </button>
                            </li>)
                    })
                }
            </ol>
        </div>
    }
}

export default ListContacts