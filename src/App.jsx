import Navigation from './components/Navigation';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DestinationPage from './pages/DestinationPage';

function App() {
  const location = useLocation();
  return (
    <div className="app">
      {location.pathname !== '/login' && location.pathname !== '/register' && location.pathname !== '/destination' &&  <Navigation />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path='/destination' element={<DestinationPage />} />
      </Routes>
    </div>
  );
}

export default App;
