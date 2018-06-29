import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {
  renderWeather(cityData){ // to render a single row
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => (((temp - 273) * 9/5) + 32));
    const pressures = _.map(cityData.list.map(weather => weather.main.pressure), (pressure) => pressure * .03);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    //const lon = cityData.city.coord.lon;
    //const lat = cityData.city.coord.lat;
    const { lon, lat } = cityData.city.coord;

    return(
      <tr key={name}>
        {/* <td>{name}</td> */}
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="F" /></td>
        <td><Chart data={humidities} color="blue" units="%" /></td>
        <td><Chart data={pressures} color="green" units="inHg" /></td>
      </tr>
    );
  }  
  
  render() {
        return (
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>City</th>
                  <th>Temerature</th>
                  <th>Humidity</th>
                  <th>Pressure</th>
                </tr>
              </thead>
              <tbody>
                {this.props.weather.map(this.renderWeather)}
              </tbody>
            </table>
        )
    }
}

// function mapStateToProps(state){
//   return { weather: state.weather };
// }
// Above is the long version of below...

function mapStateToProps({ weather }){
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);