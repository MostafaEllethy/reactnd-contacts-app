import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput'
import SerializeForm from 'form-serialize'

export default class CreateUser extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onCreateContact && this.props.onCreateContact(SerializeForm(e.target, { hash: true }))
    }

    render() {
        return <div>
            <Link to='/' className='close-create-contact'>Close</Link>
            <form className='create-contact-form' onSubmit={this.handleSubmit}>
                <ImageInput className='create-contact-avatar-input' name='avatarUrl' maxHeight={64} />
                <div className='create-contact-details'>
                    <input type='text' name='name' placeholder='Name' />
                    <input type='text' name='handle' placeholder='Handle' />
                    <button type='submit'>
                        Add Contact
                    </button>
                </div>
            </form>
        </div>
    }
}