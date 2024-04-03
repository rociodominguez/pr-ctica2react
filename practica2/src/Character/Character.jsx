import React, { useState } from 'react';
import './Character.css';

const Character = ({ character }) => {
  const [rotated, setRotated] = useState(false);

  return (
    <div className="character" onClick={() => setRotated(!rotated)}>
      <img src={character.image} className={rotated ? 'rotated' : ''} />
        <h3>{character.name}</h3>
        <p>Género: {character.gender}</p>
        <p>Especie: {character.species}</p>
        <p>Origen: {character.origin.name}</p>
    </div>
  );
}

export default Character;