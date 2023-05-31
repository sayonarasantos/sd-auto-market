import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
import api from '../api';


const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`/users/update/${id}`, { state: { user } });
  };

  const handleDelete = (id) => {
    navigate(`/users/delete/${id}`);
  };

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

  return (
    <div className="user-detail">
      <h2 style={{ textAlign: 'center' }} >Informações de usuário</h2>
      {user ? (
        <div>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Nome de usuário:</strong> {user.username}</p>
          <p><strong>Endereço:</strong> {user.address_state}, {user.address_city}, {user.address_neighborhood}, {user.address_street}, {user.address_number}, {user.address_complement}</p>
          <div className="user-actions">
            <button className="button-update" onClick={() => handleUpdate(user.id)}>Atualizar</button>
            <button className="button-delete" onClick={() => handleDelete(user.id)}>Remover</button>
          </div>
        </div>
      ) : (
        <p>Loading user...</p>
      )}
    </div>
  );
}

export default UserDetail;
