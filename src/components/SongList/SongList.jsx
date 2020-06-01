import React, {useState, useEffect} from 'react';
import SongCard from '../SongCard/Songcard';
import BasicButton from '../shared-components/BasicButton/BasicButton';
import './SongList.css';

const SongList = ({
  setList,
  starterTimeString,
  timeAvailableString,
  handleDeletion,
  onDeleteSetlist
  }) => {

  const [timeAlmostOut, triggerWarning] = useState(false)

  const generateSongCards = () => setList.map((song) =>
    <SongCard
      key={`${song.songName},${song.songTime}`}
      name={song.songName}
      time={song.songTime}
      timeInMls={song.timeInMls}
      onDelete={handleDeletion}
    />
  )

  const editSetName = () => onDeleteSetlist()
  
  useEffect(() => {
    if (timeAvailableString && Number(timeAvailableString.split(':')[0] < 2)) {
      triggerWarning(true)
    }
  }, [timeAvailableString]);

  return (
    <div className="songList">
      <div className="songList_title">
        <label>My Setlist</label>
        <BasicButton className="basicButton" type="button" label="Edit" action={editSetName}/>
      </div>
      <div className="songList_songs">
      {setList.length > 0 ? generateSongCards() : (
        // Below is an implementation of a React Fragment without declaring it explicitally
        <>
          <h3>No songs yet</h3>
          <p>Use the form on the left to add songs to your setlist</p>
        </>
      )}
      <div className="timers">
        {starterTimeString && <span>Time set: {starterTimeString} mins</span>}
        {setList.length > 0 && <span>Time remaining: {timeAvailableString} mins</span>}
        {timeAlmostOut && <span className="timewarning">You have less than 2 minutes left!</span>}
      </div>
        {setList.length > 0 && <div className="songList_actions">
          <BasicButton className="basicButton" type="button" label="Clear set" action={editSetName}/>
        </div>}
      </div>
    </div>
  )
}

export default SongList;