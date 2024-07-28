import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaRegEdit, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/')
      .then(result => {
        setUsers(result.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:4000/deleteUser/${id}`)
      .then(res => {
        console.log(res);
        setUsers(users.filter(user => user._id !== id)); // Update the state to remove the deleted user
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="birthday-list">
      {
        users.map((user, index) => (
          <div key={index} className="text-container">
            <h4>{user.name}</h4>
            <h4>{user.date.split('T')[0]}</h4>  
            <Link to={`/update/${user._id}`}>
              <h4 className='icon'><FaRegEdit className="x-icon" id='edit' /></h4>
            </Link>
            <h4 className='icon' onClick={() => handleDelete(user._id)}>
              <FaTimes className="x-icon" />
            </h4>
          </div>
        ))
      }
    </div>
  );
}

export default Footer;
