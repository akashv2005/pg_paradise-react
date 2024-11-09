import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import Products from './Pages/Products';
import Navbar from './Components/Navbar';
import Tdashboard from './Pages/Tdashboard';
function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/dashboard" element={<Tdashboard/>} />
      </Routes>
    </Router>
  );
}
export default App;
