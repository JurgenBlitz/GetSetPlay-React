// React dependencies
import React, {Component, useEffect} from 'react';
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
    // TODO: Rethink variable names, because these... ugh.
    starterTimeString: '',
    starterTimeInMls: 0,
    timeAvailable: 0,
    timeAvailableString:'',
    setList: [],
    almostOutOfTime: false
  }

  setTimer = (timeFormData) => {
    this.setState({
      starterTimeString: timeFormData,
      starterTimeInMls: millisecs(Number(timeFormData), 0),
      timeAvailable: millisecs(Number(timeFormData), 0)
    });
  }


  addSong = (data) => {
    const timeAfterAddition = this.state.timeAvailable - data.timeInMls;
    if (timeAfterAddition > 0) {
      this.setState({
        setList: [...this.state.setList, data],
        timeAvailable: timeAfterAddition,
        almostOutOfTime: timeAfterAddition < 120000 ? true : false,
      }, this.remainingTimeToString(timeAfterAddition))
    }
  }

  deleteSong = (data) => {
    const modifiedSetlist = this.state.setList.filter((song) => song.songName !== data.name);
    this.setState({
      setList: modifiedSetlist,
      timeAvailable: this.state.timeAvailable + data.timeInMls
    }, this.remainingTimeToString(this.state.timeAvailable + data.timeInMls))
  }

  deleteSetlist = () => {
    this.setState({setList: []})
  }

  remainingTimeToString = (duration) => {
    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor((duration / (1000 * 60)) % 60);
    const finalminutes = (minutes < 10) ? '0' + minutes : minutes;
    const finalseconds = (seconds < 10) ? '0' + seconds : seconds;

    this.setState({timeAvailableString: finalminutes + ':' + finalseconds})
  }

  render() {
    return (
      <div className="App">
      <Appheader />
      {!this.state.starterTimeString && <InitialTimeForm onTimeSelection={this.setTimer} />}
        <div className="Main">
        <SongForm onSave={this.addSong} />
        <SongList
          setList={this.state.setList}
          starterTimeString={this.state.starterTimeString}
          timeAvailableString={this.state.timeAvailableString}
          handleDeletion={this.deleteSong}
          onDeleteSetlist={this.deleteSetlist}/>
        </div>
      </div>
    );
  }
}

export default App;
