import React, { useState, useEffect } from 'react';
import Character from './Character/Character';
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
  }, []);

  return (
      <div>
        {characters.map(character => (
          <Character key={character.id} character={character} />
        ))}
      </div>
  );
}

export default App;