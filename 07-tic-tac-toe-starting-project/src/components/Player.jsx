import { useState } from 'react';

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayetName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const btnCaption = () => (isEditing ? 'Save' : 'Edit');

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  const handleChange = (event) => setPlayetName(event.target.value);

  return (
    <li className={isActive ? 'active' : ''}>
      <span className='player'>
        {!isEditing ? (
          <span className='player-name'>{playerName}</span>
        ) : (
          <input
            type='text'
            required
            value={playerName}
            onChange={handleChange}
          />
        )}
      </span>
      <span className='player-symbol'>{symbol}</span>
      <button onClick={handleEditClick}>{btnCaption()}</button>
    </li>
  );
}
