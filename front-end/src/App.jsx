import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages';
import Marketplace from './Pages/marketplace';
import Rooms from './Pages/rooms';
// import DropPage from './Pages/DropPage';
// import DesignPage from './Pages/DesignPage';
// import SellPage from './Pages/SellPage';
// import PlansPage from './Pages/PlansPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/rooms" element={<Rooms />} />
        {/* <Route path="/drop" element={<DropPage />} />
        <Route path="/design" element={<DesignPage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/plans" element={<PlansPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
