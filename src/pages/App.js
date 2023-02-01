import './App.css';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id='main-page'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
