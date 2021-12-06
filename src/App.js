import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Books from './components/Books/Books';
import Categories from './components/Categories/Categories';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
