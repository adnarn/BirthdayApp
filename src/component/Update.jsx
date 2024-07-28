import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
  const { id } = useParams(); // Call useParams as a function
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/getUser/${id}`)
      .then(result => {
        console.log(result);
        setName(result.data.name);

        // Format the date to yyyy-MM-dd
        const formattedDate = result.data.date.split('T')[0];
        setDate(formattedDate);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:4000/updateUser/${id}`, { name, date })
      .then(result => {
        console.log(result);
        navigate('/'); 
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form className='form-container' onSubmit={handleSubmit}>
        <div className="form-elements">
          <label htmlFor="Name">Name: </label>
          <input
            type="text"
            id='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-elements">
          <label htmlFor="Date">D.O.B: </label>
          <input
            type="date"
            id='Date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button className='submit-button' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Update;
