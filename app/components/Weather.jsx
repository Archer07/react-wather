import React, {Component} from 'react';
import WeatherMsg from 'WeatherMsg';
import WeatherForm from 'WeatherForm';
import TEMP from 'openWeatherMap';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location:'Oujda',
      temp: 32
    }
  }
  handleSearch (city) {
    let that = this;
    //alert(TEMP.getTemp(city));
    // this.state({
    //   location:city,
    TEMP.getTemp(city).then((temp) => {
      that.setState({
        location:city,
        temp:temp
      });
    }, (err) => {
      alert(err);
    });
    // });

    //
    // let appid = 'b519e4388d6d14e4951410748a62beca';
    // $.ajax({
    //   url:'http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid='+appid,
    //   dataType:'json',
    //   cache:false,
    //   success: function(data) {
    //     this.setState({
    //       location:city,
    //       temp: data.main.temp
    //     });
    //     // alert(data.main.temp);
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     //this.setState({username:null});
    //     alert(err);
    //   }.bind(this)
    // });


  }
  render() {
    return (
      <div>
      <h2>Get The Weather:</h2>
      <WeatherForm onSearch={this.handleSearch.bind(this)}/>
      <WeatherMsg {...this.state} />
      </div>
    );
  }
}


export default Weather
