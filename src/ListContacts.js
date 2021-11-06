import React from 'react'

const ListContacts = props => {
    return (
        <ol className='contact-list'>
            {
                props.contacts.map(obj => {
                    return (
                        <li key={obj.id} className='contact-list-item'>
                            <div className='contact-avatar' style={{ 'backgroundImage': `url(${obj.avatarURL})` }}></div>
                            <div className='contact-details'>
                                <p>{obj.name}</p>
                                <p>{obj.handle}</p>
                            </div>
                            <button className='contact-remove'>
                                Remove
                            </button>
                        </li>)
                })
            }
        </ol>
    )
}

export default ListContacts