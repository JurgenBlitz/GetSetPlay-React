import React, {Component} from 'react';
import BasicButton from '../shared-components/BasicButton/BasicButton';

//TODO: Assess the props required for this file
class InitialTimeForm extends Component {

  constructor(props) {
    super(props);
    this.state = {selectedTime: 0};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({selectedTime: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onTimeSelection(this.state.selectedTime)
  }

  render() {
    return(
      <div className="initialTimeForm">
        <h3>Please choose the total time for your setlist</h3>
        <form>
          <div className="timeInput">
          <input id="initialTime" name="initialTime" placeholder="mm:ss" onChange={this.handleChange}/>
          </div>
          <BasicButton label="Accept" action={this.handleSubmit}/>
        </form> 
      </div>
    )
  }

}

export default InitialTimeForm;