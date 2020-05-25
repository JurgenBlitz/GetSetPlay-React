// React dependencies
import React, {Component} from 'react';
// Components
import Appheader from './components/shared-components/AppHeader/AppHeader';
import InitialTimeForm from './components/InitialTimeForm/InitialTimeForm';
import SongForm from './components/SongForm/SongForm';
import SongList from './components/SongList/SongList';
// Styles and vars
import './App.css';
// --- //

class App extends Component {

  state = { timeToPlay: null, setList: [] }

  setTimer = (timeFormData) => {
    this.setState({timeToPlay: timeFormData});
  }

  addSong = (data) => {
    this.setState({setList: [...this.state.setList, data]})
  }

  deleteSong = (data) => {
    const modifiedSetlist = this.state.setList.filter((song) => song.name !== data.name);
    this.setState({setList: modifiedSetlist})
  }

  render() {
    return (
      <div className="App">
      <Appheader />
      {!this.state.timeToPlay && <InitialTimeForm onTimeSelection={this.setTimer} />}
        <div className="Main">
        <SongForm onSave={this.addSong} />
        <SongList setList={this.state.setList} timeToPlay={this.state.timeToPlay} handleDeletion={this.deleteSong}/>
        </div>
      </div>
    );
  }
}

export default App;
