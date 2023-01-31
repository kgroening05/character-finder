import './App.css';
import NavBar from '../components/NavBar';
import LevelSelectCard from '../components/LevelSelectCard';

import ad2222 from '../assets/ad2222.jpg'
import roboCity from '../assets/robo-city.jpg'
import ultimateSpaceBattle from '../assets/ultimate-space-battle.jpg'
import universe113 from '../assets/universe113.jpg'

const levels = [{image: ad2222, name: "A.D. 2222"},
                {image: roboCity, name: "Robo City"},
                {image: ultimateSpaceBattle, name: 'Ultimate Space Battle'},
                {image: universe113, name: 'Universe 113'},
              ]

function App() {
  return (
    <div className="App">
      <NavBar />
      <LevelSelectCard levelsList={levels} />
    </div>
  );
}

export default App;
