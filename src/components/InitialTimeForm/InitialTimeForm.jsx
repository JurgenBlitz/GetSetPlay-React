import React, {Component} from 'react';
import BasicButton from '../shared-components/BasicButton/BasicButton';
import './InitialTimeForm.css';

class InitialTimeForm extends Component {

  state = {selectedTime: '', formError: ''};

  handleChange = (event) => {
    this.setState({selectedTime: event.target.value});
  }

  handleSubmit = (event) => {
    const minsAndSecsPattern = new RegExp(/^[0-9]{2,3}$/);
    const formValid = minsAndSecsPattern.test(this.state.selectedTime);
    event.preventDefault();
    this.setState({formError: !formValid ? 'Set the duration in minutes (ex: 30)' : ''})
    
    if (formValid) {
      this.props.onTimeSelection(this.state.selectedTime)
    } else {
      this.setState({selectedTime: ''})
    }
  }

  render() {
    return(
      <div className="initialTimeForm">
        <h3>Choose the total time for your setlist</h3>
        <form>
          <div className="timeInput">
          <input id="initialTime"
          name="initialTime"
          placeholder="mm:ss"
          onChange={this.handleChange}/>
          </div>
          <div>
            <span className='initialTimeForm_error'>{this.state.formError}</span>
          </div>
          <BasicButton className="basicButton" type="reset" label="Accept" action={this.handleSubmit}/>
        </form> 
      </div>
    )
  }

}

export default InitialTimeForm;