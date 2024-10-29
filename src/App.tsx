import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Nav from './components/nav/Nav';
import './index.css';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Componente de navegación */}
        <Nav />

        {/* Definición de rutas */}
        <Routes>
          {/* Redirigir la ruta raíz ("/") a "/home" */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

// Inicializar la app en el elemento root
const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

export default App;
