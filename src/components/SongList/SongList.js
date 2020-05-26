import React, {useState, useEffect} from 'react';
import SongCard from '../SongCard/Songcard';
import './SongList.css';

const SongList = ({ setList, timeToPlay, handleDeletion }) => {

  const [timeLeft, checkTimeLeft] = useState(0)

  const generateSongCards = () => setList.map((song) =>
    <SongCard key={`${song.name},${song.time}`} name={song.name} time={song.time} onDelete={handleDeletion} />
  )

  // TODO: Set time with proper numbers- this is adding strings
  useEffect(() => {
    const timeOfSongsInList =  setList.reduce((accum,item) => accum + item.time, 0)
    checkTimeLeft(timeOfSongsInList)
  }, [setList]);

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
      {timeToPlay && <span>Time set: {timeToPlay} mins</span>}
      {setList.length > 0 && <span>Time remaining: {timeLeft} mins</span>}
      </div>
    </div>
  )
}

export default SongList;