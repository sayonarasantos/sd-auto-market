import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import api from '../api';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await api.get('/user');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div className="user-list">
      <h2>Lista de usuários</h2>
      <table>
        <thead>
          <tr>
            <th>Nome de usuário</th>
            <th>Data de criação</th>
            <th>Endereço</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.date_joined}</td>
              <td>{user.address_state}, {user.address_city}</td>
              <td>
                <Link to={`/users/${user.id}`}>
                  <FontAwesomeIcon icon={faInfoCircle} />
                </Link>
              </td>
              <td>
                <Link to={`/users-buf/${user.id}`}>
                  ProtoBuffer
                </Link>
              </td>
              <td>
                <Link to={`/users-xml/${user.id}`}>
                  XML
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
