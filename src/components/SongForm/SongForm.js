import React, {Component} from 'react';
import BasicButton from '../shared-components/BasicButton/BasicButton';
import './SongForm.css';

const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

// const songTitlePattern = new RegExp(/^[-!#$%&'*,.\/ \/ç:+0-9=?ñA-Z^_a-z]{2,40}$/);
const minsAndSecsPattern = new RegExp(/^[0-5]\d:[0-5]\d$/);

const millisecs = (mins, secs) => ((mins * 60) + secs) * 1000;

class SongForm extends Component {

  state = {
    songName: '',
    songTime: '',
    timeInMls: 0,
    errors: {
      name: '',
      time: ''
    }
  }

   validateInputs = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
  
    switch (name) {
      case 'songName': 
        errors.name = 
          value.length > 20
            ? 'Try to choose a shortened name for the song'
            : '';
        break;
      case 'songTime': 
        errors.time = 
          minsAndSecsPattern.test(value)
            ? ''
            : 'Set a correct duration (ex: 01:30)';
        break;
      default:
        break;
    }
    this.setState({errors, [name]: value});
  } 

   handleSubmit = (event) => {
    const songName = this.songName.value
    const songTime = this.songTime.value
    event.stopPropagation();

    if (validateForm(this.state.errors)) {
      this.props.onSave({
        songName: songName,
        songTime: songTime,
        timeInMls: millisecs(
          Number(songTime.split(':')[0]),
          Number(songTime.split(':')[1]))
      })
    }
  }

  render() {
    return (
      <div className="Form">
        <form>
          <p className="inputContainer">
            <label htmlFor="songname">Song name</label>
            <input type="text"
              id="songName"
              name="songName"
              placeholder="Ex: 'I´m a sheep'"
              onBlur={this.validateInputs}
              ref={inputElement => this.songName = inputElement}/>
            <span className='error'>{this.state.errors.name}</span>
          </p>
  
          <p className="inputContainer">
            <label htmlFor="songtime">Song length</label>
            <input type="text"
              id="songTime"
              name="songTime"
              placeholder="mm:ss"
              onBlur={this.validateInputs}
              ref={inputElement => this.songTime = inputElement}/>
            <span className='error'>{this.state.errors.time}</span>
          </p>

          <BasicButton className="basicButton" type="reset" label="Save" action={this.handleSubmit}/>
        </form>
      </div>
    )
  }
}

export default SongForm;