import './App.css';
import Head from './header';
import Login from './login/login';
import Movies from './movies/movies';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'



function App() {
  return (
    <Router>
      <div className="App" style={{height:'100vh',backgroundColor:'lightgrey'}}>
        <div style={{ position: 'sticky',top:'0',zIndex:1 }}>
          <Head />
        </div>
        <div>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/movies' element={<Movies />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;
