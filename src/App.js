// React dependencies
import React, {Component} from 'react';
// Components
import Appheader from './components/shared-components/AppHeader/AppHeader';
import InitialTimeForm from './components/InitialTimeForm/InitialTimeForm';
import SongForm from './components/SongForm/SongForm';
import SongList from './components/SongList/SongList';
// Styles and vars
import './App.css';
import './components/InitialTimeForm/InitialTimeForm.css'
import './components/SongForm/SongForm.css'
import './components/SongList/SongList.css'
// --- //

class App extends Component {
  constructor() {
    super()
    this.state = {
      timeToPlay: 0
    }
    this.setTimer = this.setTimer.bind(this);
  }

  setTimer(timeFormData) {
    this.setState({timeToPlay: timeFormData})
    console.log('received',timeFormData, this.state.timeToPlay);
  }

  render() {
    return (
      <div className="App">
      <Appheader />
      <InitialTimeForm onTimeSelection={this.setTimer} />
        <div className="Main">
        <SongForm />
        <SongList />
        </div>
      </div>
    );
  }
}

export default App;
