import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import DestinationPage from './pages/DestinationPage';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';
import Wishlist from './pages/WishlistPage';
import Footer from './components/Footer'; // Import the Footer component

function App() {
  const location = useLocation();
  const isDetailPage = /^\/detail\/[^/]+$/.test(location.pathname);

  return (
    <div className="app">
      {/* Navigation component conditionally rendered */}
      {location.pathname !== '/destination' &&
        !isDetailPage &&
        location.pathname !== '/wishlist' &&
        !location.pathname.startsWith('/search') && <Navigation />}
      
      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>

      {/* Footer component rendered on every route */}
      <Footer />
    </div>
  );
}

export default App;
