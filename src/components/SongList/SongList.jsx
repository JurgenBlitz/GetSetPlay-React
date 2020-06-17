import React, { useState, useEffect } from 'react';
// Components
import SongCard from '../SongCard/Songcard';
import BasicButton from '../shared-components/BasicButton/BasicButton';
// Helpers
import { TimeToString} from '../../utils/TimeToString';
// Styles
import './SongList.css';

const SongList = ({
  setList,
  starterTimeString,  // Optional, from App.jsx
  starterTimeInMls,   // Optional, from App.jsx
  handleDeletion,
  onDeleteSetlist
}) => {

  // -- States -- //
  const [timeUsed, checkSet] = useState(0)
  const [timeUsedToString, formatTime] = useState('')
  const [timeLeftToString, formatTimeLeft] = useState('')
  const [editModeState, onEditMode] = useState(false)
  const [setName, submitName] = useState('My setlist')
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

  useEffect(() => {
    const accumulatedTime = setList.reduce((sum, { timeInMls }) => sum + timeInMls, 0);
    checkSet(accumulatedTime);
    formatTime(TimeToString(accumulatedTime));

    if (starterTimeInMls) {
      const timeLeft = starterTimeInMls - accumulatedTime;
      const almostOut = timeLeft <= 120000;  // 2 mins, in mls
      formatTimeLeft(TimeToString(timeLeft))
      triggerWarning(almostOut)
    }
  }, [setList, starterTimeInMls])

  // Callback to parent component App.js to delete entire list
  const deleteSetlist = () => onDeleteSetlist()

  // Activates/deactivates input to edit
  const triggerNameEdition = () => {
    onEditMode(!editModeState)
  }

  const handleChange = (event) => {
    submitName(event.target.value);
  }

  // Replaces the default setlist name as long as it satisfies the conditions
  const editSetlistName = (event) => {
    event.preventDefault();
    onEditMode(!editModeState)
  }

  return (
    <div className="songList">
      <div className="songList_title">
        {editModeState ?
          <div className="songList_editTitle">
            <input type="text"
              id="setlistName"
              name="setlistName"
              placeholder="Write a new name"
              onChange={handleChange}
            />
            <button onClick={editSetlistName}>Yes</button>
            <button onClick={triggerNameEdition}>No</button>
          </div> :
          <label>{setName}</label>
        }
        {!editModeState && <BasicButton className="basicButton" type="button" label="Edit" action={triggerNameEdition} />}
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
          {timeUsed > 0 && <span>Time used: {timeUsedToString} mins</span>}
          {starterTimeInMls && <span>Time left: {timeLeftToString} mins</span>}
          {timeAlmostOut && <span>You have less than 2 mins left!</span>}
        </div>
        {setList.length > 0 && <div className="songList_actions">
          <BasicButton className="basicButton" type="button" label="Clear set" action={deleteSetlist} />
        </div>}
      </div>
    </div>
  )
}

export default SongList;