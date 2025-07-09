import './App.css'
import { Routes, Route } from "react-router-dom";
import Cart from './pages/Cart'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Pizza from './pages/Pizza'
import Register from './pages/Register'
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
  
        {/* Rutas públicas: solo si NO hay token */}
        <Route path="/register" element={
          <PublicRoute token={token}>
            <Register />
          </PublicRoute>
        } />
        <Route path="/login" element={
          <PublicRoute token={token}>
            <Login />
          </PublicRoute>
        } />

        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />

        {/* Ruta protegida: solo si hay token */}
        <Route path="/profile" element={
          <ProtectedRoute token={token}>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
