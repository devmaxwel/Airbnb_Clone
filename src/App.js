import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import Searchpage from './components/Searchpage';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/page" element={<Searchpage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
