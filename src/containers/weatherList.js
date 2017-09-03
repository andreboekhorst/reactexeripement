import React, { Component } from 'react';
import { connect } from 'react-redux';

export class WeatherList extends Component {

  renderWeather(cityData){
    return (
      <tr>
        <td>cityData.name</td>
      </tr>
    )
  }

  render(){
    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>City</th>
          <th>Temprature</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </tr>
        </thead>
        <tbody>
        { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    )
  }

}

// function mapStateToProps(state){
//   return { weather: state.weather }
// }

// Same as above, but in ES6:
function mapStateToProps({ weather }){
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)