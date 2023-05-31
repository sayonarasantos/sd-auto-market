import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const UserForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    address_state: '',
    address_city: '',
    address_neighborhood: '',
    address_street: '',
    address_number: '',
    address_complement: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/user', formData);
      navigate('/users');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="user-form">
      <h2>Cadastro de usuário</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="username">Nome de usuário</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <h3>Endereço</h3>
        <div className="form-row">
          <label htmlFor="address_state">Estado</label>
          <input
            type="text"
            name="address_state"
            value={formData.address_state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="address_city">Cidade</label>
          <input
            type="text"
            name="address_city"
            value={formData.address_city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="address_neighborhood">Bairro</label>
          <input
            type="text"
            name="address_neighborhood"
            value={formData.address_neighborhood}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="address_street">Rua</label>
          <input
            type="text"
            name="address_street"
            value={formData.address_street}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="address_number">Número</label>
          <input
            type="number"
            name="address_number"
            value={formData.address_number}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="address_complement">Complemento</label>
          <input
            type="text"
            name="address_complement"
            value={formData.address_complement}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <button type="submit">Criar</button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
