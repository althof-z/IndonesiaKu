import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
import DestinationPage from './pages/DestinationPage';
// import ProtectedRoute from './hooks/ProtectedRoutes';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';
import Wishlist from './pages/WishlistPage';

function App() {
  const location = useLocation();
  const isDetailPage = /^\/detail\/[^/]+$/.test(location.pathname);

  return (
    <div className="app">
      {location.pathname !== '/destination' &&
        !isDetailPage &&
        location.pathname !== '/wishlist' &&
        !location.pathname.startsWith('/search') && <Navigation />}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> */}
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
