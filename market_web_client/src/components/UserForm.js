import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const UserForm = () => {
  const location = useLocation();
  const { user } = location.state || {};
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    address_cep: '',
    address_state: '',
    address_city: '',
    address_neighborhood: '',
    address_street: '',
    address_number: '',
    address_complement: '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username,
        password: user.password,
        address_cep: user.address_cep,
        address_state: user.address_state,
        address_city: user.address_city,
        address_neighborhood: user.address_neighborhood,
        address_street: user.address_street,
        address_number: user.address_number,
        address_complement: user.address_complement,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearchAddress = async () => {
    try {
      const response = await api.get(`/get_base_address/${formData.address_cep}/`);
      const { address_state, address_city, address_neighborhood, address_street } = response.data;
      setFormData({
        ...formData,
        address_state,
        address_city,
        address_neighborhood,
        address_street,
      });
    } catch (error) {
      console.error('Error searching address:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user) {
        await api.put(`/user_update/${user.id}`, formData);
      } else {
        await api.post('/user', formData);
      }
      navigate('/users');
    } catch (error) {
      console.error('Error creating/updating user:', error);
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
          <label htmlFor="address_cep">CEP</label>
          <div className="cep-input">
            <input
              type="number"
              name="address_cep"
              value={formData.address_cep}
              onChange={handleChange}
              required
            />
                <button
                  type="button"
                  className="search-icon"
                  onClick={handleSearchAddress}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
          </div>
        </div>
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
          <button type="submit">Salvar</button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
