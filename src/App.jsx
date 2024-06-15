import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DestinationPage from './pages/DestinationPage';
// import ProtectedRoute from './hooks/ProtectedRoutes';
import DetailPage from './pages/DetailPage';
import Wishlist from './pages/Wishlist';

function App() {
  const location = useLocation();

  return (
    <div className="app">
      {location.pathname !== '/destination' &&
        location.pathname !== '/detail' &&
        location.pathname !== '/wishlist' && <Navigation />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> */}
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
