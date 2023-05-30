import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';
import api from '../api';


const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // const response = await axios.get(`/api/user_config/${id}`);
        const response = await api.get(`/user_config/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [id]); // Include 'id' in the dependency array

  return (
    <div className="user-detail">
      <h2>User Detail</h2>
      {user ? (
        <div>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <Link to={`/users/update/${user.id}`}>Update</Link>
          <Link to={`/users/delete/${user.id}`}>Delete</Link>
        </div>
      ) : (
        <p>Loading user...</p>
      )}
    </div>
  );
}

export default UserDetail;
