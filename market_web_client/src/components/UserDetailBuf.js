import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';


const UserDetailBuf = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get(`/user_details/${id}`, 
        {
          headers: {
              'Accept': 'application/x-google-protobuf',
          }
        });
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
          <p><strong>Resposta:</strong></p>
          <p>{user}</p>
        </div>
      ) : (
        <p>Loading user...</p>
      )}
    </div>
  );
}

export default UserDetailBuf;
