import React, {Component} from 'react';
import WeatherMsg from 'WeatherMsg';
import WeatherForm from 'WeatherForm';
import TEMP from 'openWeatherMap';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true
    }
  }
  handleSearch (city) {
    let that = this;
    setTimeout(() => {
      this.setState({isLoading:true});
      TEMP.getTemp(city).then((temp) => {
        // debugger;  
        that.setState({
            location:city,
            temp:temp,
            hasData:true,
            isLoading:false
        });
      }, (err) => {
        alert(err)
        this.setState({isLoading:false})
      });
    },1000);


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
    let renderMsg =  () => {

      if (this.state.isLoading && this.state.hasData) {
        return (<img src="img/loading.gif" alt="loading..." width="100"></img>);
      } else if (this.state.location && this.state.temp) {
        return (  <WeatherMsg {...this.state} />);
      } else {
        return (<h3>{this.state.error}</h3>);
      }
    };
    return (
      <div>
      <h2>Get The Weather:</h2>
      <WeatherForm onSearch={this.handleSearch.bind(this)}/>
      {renderMsg()}
      </div>
    );
  }
}


export default Weather
