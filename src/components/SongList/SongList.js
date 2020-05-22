import React from 'react';
import SongCard from '../SongCard/Songcard';
import './SongList.css';

const SongList = ({ setList, handleDeletion }) => {

  const generateSongCards = () => setList.map((song) =>
    <SongCard key={`${song.name},${song.time}`} name={song.name} time={song.time} onDelete={handleDeletion} />
  )

  return (
    <div className="songList">
      <label>My Setlist</label>
      <div>
      {setList.length > 0 ? generateSongCards() : (
        // Below is an implementation of a React Fragment without declaring it explicitally
        <>
          <h3>No songs yet</h3>
          <p>Use the form on the left to add songs to your setlist</p>
        </>
      )}
      </div>
    </div>
  )
}

export default SongList;