import React, {Component} from 'react';

class WeatherForm extends Component {
  onSubmit(e) {
    e.preventDefault();
    let city = this.refs.inputEmail.value.trim();

    if (city.length > 0) {
      this.refs.inputEmail.value = '';
      this.props.onSearch(city);
    }

    // let appid = 'b519e4388d6d14e4951410748a62beca';
    // $.ajax({
    //   url:'http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid='+appid,
    //   dataType:'json',
    //   cache:false,
    //   success: function(data) {
    //     console.log(data);
    //     alert(data.main.temp);
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     //this.setState({username:null});
    //     alert(err);
    //   }.bind(this)
    // });
  }
  render() {
    return (
      <div className="Wform">
      <form onSubmit={this.onSubmit.bind(this)} className="form-horizontal">
        <div className="">
        <div className="input-group">
          <input className="input-group-field" type="search" ref="inputEmail" placeholder="Type the name of the City..." required/>
          <div className="input-group-button">
            <input type="submit" className="button" value="Submit"/>
          </div>
        </div>
        </div>
      </form>
      </div>
    );
  }
}


export default WeatherForm
