import './App.css';
import NavBar from '../components/NavBar';
import LevelSelectCard from '../components/LevelSelectCard';
import { levelList } from '../assets/levelList'

function App() {
  return (
    <div className="App">
      <NavBar />
      <LevelSelectCard levelsList={levelList} />
    </div>
  );
}

export default App;
