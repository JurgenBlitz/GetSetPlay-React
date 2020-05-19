import React, {Component} from 'react';
import BasicButton from '../shared-components/BasicButton/BasicButton';

class SongForm extends Component {

  state = {
    songName: '',
    songTime: '',
  }

   handleSubmit = (event) => {

    const name = this.songName.value
    const time = this.songTime.value
    
    event.preventDefault();
    this.props.onSave([name, time])
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
              value={this.state.songName}
              onChange={ event => this.setState({songName: event.target.value})}
              ref={inputElement => this.songName = inputElement}/>
          </p>
  
          <p className="inputContainer">
            <label htmlFor="songtime">Song length</label>
            <input type="text"
              id="songtime"
              name="songtime"
              placeholder="mm:ss"
              value={this.state.songTime}
              onChange={ event => this.setState({songTime: event.target.value})}
              ref={inputElement => this.songTime = inputElement}/>
          </p>
          <BasicButton label="Save" action={this.handleSubmit}/>
        </form>
      </div>
    )
  }
}

export default SongForm;