import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import UserList from './components/UserList';
import UserForm from './components/UserForm';
import UserDetail from './components/UserDetail';
import UserDelete from './components/UserDelete';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <nav className="navbar">
            <Link to="/" className="navbar-brand">Gerenciar usuários</Link>
            <ul className="navbar-links">
              <li><Link to="/users">Listar</Link></li>
              <li><Link to="/users/create">Cadastrar</Link></li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route exact path="/users" element={<UserList />} />
          <Route exact path="/users/create" element={<UserForm />} />
          <Route exact path="/users/:id" element={<UserDetail />} />
          <Route exact path="/users/update/:id" element={<UserForm />} />
          <Route exact path="/users/delete/:id" element={<UserDelete />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
