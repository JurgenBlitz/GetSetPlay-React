import React, {Component} from 'react';
// import BasicButton from '../shared-components/BasicButton/BasicButton';

class SongCard extends Component {

  editSongInfo() {
    // Method to edit song
  }

  deleteSong() {
  // Method to delete song from parent array in SongList.js
  }

  render() {
    return(
      <div className="card">
      <label>I'm a sheep</label>
      <span>04:20</span>
      <div className="actions">
      <button>$</button>
      <button>+</button>
      </div>
      </div>
    )
  }
}

export default SongCard;