import React, {useState, useEffect} from 'react';
import SongCard from '../SongCard/Songcard';
import './SongList.css';

const SongList = ({ setList, starterTimeString, handleDeletion }) => {

  const [timeLeft, checkTimeLeft] = useState(0)

  const generateSongCards = () => setList.map((song) =>
    <SongCard key={`${song.songName},${song.songTime}`}
    name={song.songName}
    time={song.songTime}
    timeInMls={song.timeInMls}
    onDelete={handleDeletion} />
  )

  // TODO: Component could now receive time string- replace this method
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
      {starterTimeString && <span>Time set: {starterTimeString} mins</span>}
      {setList.length > 0 && <span>Time remaining: {timeLeft} mins</span>}
      </div>
    </div>
  )
}

export default SongList;