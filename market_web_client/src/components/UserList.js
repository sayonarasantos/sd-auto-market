import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await api.get('/user');
      setUsers(response.data);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    const filteredUsers = users.filter((user) => {
      const usernameMatch = user.username.toLowerCase().includes(searchQuery.toLowerCase());
      const addressMatch = user.address_state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.address_city.toLowerCase().includes(searchQuery.toLowerCase());
      return usernameMatch || addressMatch;
    });
    setSearchResults(filteredUsers);
  };

  return (
    <div className="user-list">
      <h2>Lista de usuários</h2>
      <div>
        <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search by username or address" />
        <button onClick={handleSearch}>Search</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nome de usuário</th>
            <th>Data de criação</th>
            <th>Endereço</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.date_joined}</td>
              <td>{user.address_state}, {user.address_city}</td>
              <td>
                <Link to={`/users/${user.id}`}>
                  JSON
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
