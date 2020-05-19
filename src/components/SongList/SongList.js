import React from 'react';
import SongCard from '../SongCard/Songcard';

//TODO: Assess the props required for this file
const SongList = () => {

  return(
    <div className="songList">
    <label>My Setlist</label>
      <h3>No songs yet</h3>
      <p>Use the form on the left to add songs to your setlist</p>
      <SongCard />
    </div>
  )

}

export default SongList;