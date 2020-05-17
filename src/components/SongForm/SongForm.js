import React from 'react';
import BasicButton from '../shared-components/BasicButton/BasicButton';

const SongForm = () => {

  function handleSubmit (event) {
    event.preventDefault();
    console.log('clicked');
    // This method will pass the time and name of the song to its parent
  }

  return (
    <div className="Form">
      <form>
        <p className="inputContainer">
          <label htmlFor="songname">Song name</label>
          <input type="text" id="songname" name="songname" placeholder="Ex: 'I´m a sheep'" />
        </p>

        <p className="inputContainer">
          <label htmlFor="songtime">Song length</label>
          <input type="text" id="songtime" name="songtime" placeholder="mm:ss" />
        </p>
        <BasicButton label="Save" action={handleSubmit}/>
      </form>
    </div>
  )
}

export default SongForm;