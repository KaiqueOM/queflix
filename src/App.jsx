import './App.css'
import { BrowserRouter, Routes, Route,} from 'react-router-dom'

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Search from './pages/Search';
import Movie from './pages/Movie';

function App() {
  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
