import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = ({ friend }) => {
    const { id, name, email, username } = friend;
    return (
        <div className='friend-div'>
            <h3>Name: {name}</h3>
            <p>email: {email}</p>
            <p>
                <small>userName: <Link to={`/friend/${id}`}>{username}</Link></small>
            </p>
        </div>
    );
};

export default Friend;