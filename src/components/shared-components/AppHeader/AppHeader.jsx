import React, { useState } from 'react';
import BasicButton from '../BasicButton/BasicButton';
import './AppHeader.css';

const AppHeader = () => {

  const [appLang, setLang] = useState('eng')

  const changeLang = (selection) => {
    setLang(selection)
    console.log(appLang)
  }

  return (
    <div className="appHeader">
      <div className="appHeader_content">
      <div className="appHeader_hidden">
        test
      </div>
        <div className="appHeader_title">
          <h1>GetSetPlay</h1>
        </div>
        <div className="appHeader_translate">
          <BasicButton className="basicButton" type="button" label="ENG" action={() => changeLang('eng')} />
          <BasicButton className="basicButton" type="button" label="SPA" action={() => changeLang('spa')} />
        </div>
      </div>
    </div>
  )
}

export default AppHeader;