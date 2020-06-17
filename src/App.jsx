// React dependencies
import React, { Component } from 'react';
// Components
import Appheader from './components/shared-components/AppHeader/AppHeader';
import InitialTimeForm from './components/InitialTimeForm/InitialTimeForm';
import SongForm from './components/SongForm/SongForm';
import SongList from './components/SongList/SongList';
// Styles and vars
import './App.css';
// --- //

const millisecs = (mins, secs) => ((mins * 60) + secs) * 1000;

class App extends Component {

  state = {
    starterTimeString: null,
    starterTimeInMls: 0,
    setList: [],
  }

  // Allows the user to set an amount of time for the setlist.
  // Would allow the app to know when the user is about to exceed that time
  // and display warnings accordingly.
  setTimer = (timeFormData) => {
    this.setState({
      starterTimeString: timeFormData,
      starterTimeInMls: millisecs(Number(timeFormData), 0)
    });
  }

  addSong = (data) => {
    const updatedSet = [...this.state.setList, data]
    this.setState({ setList: updatedSet })
  }

  deleteSong = (data) => {
    const modifiedSetlist = this.state.setList.filter((song) => song.songName !== data.name);
    this.setState({ setList: modifiedSetlist })
  }

  // eturns the setlist to an empty state
  deleteSetlist = () => {
    this.setState({ setList: [] })
  }

  render() {
    return (
      <div className="App">
        <Appheader />
        {!this.state.starterTimeString && <InitialTimeForm onTimeSelection={this.setTimer} />}
        <div className="App_mainWorkSpace">
          <SongForm onSave={this.addSong} />
          <SongList
            setList={this.state.setList}
            starterTimeInMls={this.state.starterTimeInMls}
            starterTimeString={this.state.starterTimeString}
            handleDeletion={this.deleteSong}
            onDeleteSetlist={this.deleteSetlist} />
        </div>
      </div>
    );
  }
}

export default App;
