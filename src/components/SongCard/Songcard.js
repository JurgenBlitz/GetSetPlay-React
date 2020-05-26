import React from 'react';
import BasicButton from '../shared-components/BasicButton/BasicButton';
import './SongCard.css';

const SongCard = ({ name, time, timeInMls, onDelete }) => {

  const editSongInfo = () => {
    // Method to edit song
  }

  const deleteSong = () => {
    onDelete({ name, time, timeInMls })
  }

  return (
    <div className="card">
      <label>{name}</label>
      <span>{time}</span>
      <div className="actions">
        <BasicButton className="secondaryButton" type="button" label="edit" action={editSongInfo} />
        <BasicButton className="secondaryButton" type="button" label="del." action={deleteSong} />
      </div>
    </div>
  )
}

export default SongCard;