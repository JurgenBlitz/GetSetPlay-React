// React dependencies
import React from 'react';
// Components
import Appheader from './components/shared-components/AppHeader/AppHeader';
import SongForm from './components/SongForm/SongForm';
import SongList from './components/SongList/SongList';
// Styles and vars
import './App.css';
import './components/SongForm/SongForm.css'
import './components/SongList/SongList.css'
// --- //

function App() {
  return (
    <div className="App">
    <Appheader />
      <div className="Main">
      <SongForm />
      <SongList />
      </div>
    </div>
  );
}

export default App;
