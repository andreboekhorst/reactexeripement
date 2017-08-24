import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'

export class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = {
      term: ''
    }
    this.onInputChange  = this.onInputChange.bind(this);
    this.onFormSubmit   = this.onFormSubmit.bind(this);
  }

  onInputChange(ev) {
    this.setState({
      term: ev.target.value + 'z'
    })
  }

  onFormSubmit(ev){
    ev.preventDefault();
    console.log(ev)
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder="type city"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
