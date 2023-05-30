import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
import api from '../api';

const UserPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = async () => {
    try {
    //   await axios.delete(`/api/user_config/${id}`);
      await api.delete(`/user_config/${id}`);
      navigate('/users');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="user-page">
      <h2>Delete User</h2>
      <p>Are you sure you want to delete this user?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default UserPage;
