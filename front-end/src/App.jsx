import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/home';
import Marketplace from './Pages/marketplace';
import Rooms from './Pages/rooms';
import SignupPage from './Pages/signupPage';
import LoginForm from './Components/LoginForm';
// import DropPage from './Pages/DropPage';
// import DesignPage from './Pages/DesignPage';
// import SellPage from './Pages/SellPage';
// import PlansPage from './Pages/PlansPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<LoginForm />} />
        {/* <Route path="/design" element={<DesignPage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/plans" element={<PlansPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
