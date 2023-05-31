import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

const UserDelete = () => {
  const navigate = useNavigate();
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
  }, [id]);

  const handleDelete = async () => {
    try {
      await api.delete(`/user_config/${id}`);
      navigate('/users');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="user-page">
      <h2>Delete User</h2>
      {user ? (
        <div>
          <p>Você tem certeza que quer remover o usuário {user.username}?</p>
          <button onClick={handleDelete}>Delete</button>
        </div>
      ) : (
        <p>Loading user...</p>
      )}
    </div>
  );
}

export default UserDelete;
