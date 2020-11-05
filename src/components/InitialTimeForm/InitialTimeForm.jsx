import React, { Component } from 'react';
import BasicButton from '../shared-components/BasicButton/BasicButton';
import './InitialTimeForm.css';

class InitialTimeForm extends Component {

  state = {
    activateForm: false,
    selectedTime: '',
    formError: ''
  };

  toggleForm = (value) => {
    this.setState({ activateForm: value })
  }

  handleChange = (event) => {
    this.setState({ selectedTime: event.target.value });
  }

  handleSubmit = (event) => {
    const minsAndSecsPattern = new RegExp(/^[0-9]{2,3}$/);
    const formValid = minsAndSecsPattern.test(this.state.selectedTime);
    event.preventDefault();
    this.setState({ formError: !formValid ? 'Set the duration in minutes (ex: 30)' : '' })

    if (formValid) {
      this.props.onTimeSelection(this.state.selectedTime)
    } else {
      this.setState({ selectedTime: '' })
    }
  }

  render() {
    return (
      <div className="initialTimeForm">
        <div className="initialTimeForm_tips">
          <h4>Set the time for your set?</h4>
          <span>Optional: you can set it later or dismiss it</span>
        </div>
        <div className="initialTimeForm_triggers">
          <BasicButton className="basicButton" type="button" label="Yes" action={() => this.toggleForm(true)} />
          <BasicButton className="basicButton" type="button" label="No" action={() => this.toggleForm(false)} />
        </div>
        {this.state.activateForm &&
          <div className="initialTimeForm_body">
            <h3>Choose the total time for your setlist</h3>
            <form>
              <div className="timeInput">
                <input id="initialTime"
                  name="initialTime"
                  placeholder="mm:ss"
                  onChange={this.handleChange} />
              </div>
              <div>
                <span className='initialTimeForm_error'>{this.state.formError}</span>
              </div>
              <BasicButton className="basicButton" type="reset" label="Accept" action={this.handleSubmit} />
            </form>
          </div>
        }

      </div>
    )
  }

}

export default InitialTimeForm;