import React, {Component} from 'react';
import BasicButton from '../shared-components/BasicButton/BasicButton';
import './SongForm.css';

class SongForm extends Component {

  state = {
    songName: '',
    songTime: '',
  }

   handleSubmit = (event) => {

    const name = this.songName.value
    const time = this.songTime.value
    
    event.stopPropagation();
    this.props.onSave({name: name, time: time})
  }

  render() {
    return (
      <div className="Form">
        <form>
          <p className="inputContainer">
            <label htmlFor="songname">Song name</label>
            <input type="text"
              id="songname"
              name="songname"
              placeholder="Ex: 'I´m a sheep'" 
              ref={inputElement => this.songName = inputElement}/>
          </p>
  
          <p className="inputContainer">
            <label htmlFor="songtime">Song length</label>
            <input type="text"
              id="songtime"
              name="songtime"
              placeholder="mm:ss"
              ref={inputElement => this.songTime = inputElement}/>
          </p>
          <BasicButton className="basicButton" type="reset" label="Save" action={this.handleSubmit}/>
        </form>
      </div>
    )
  }
}

export default SongForm;