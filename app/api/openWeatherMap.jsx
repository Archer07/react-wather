import axios from 'axios';

const API_KEY ='b519e4388d6d14e4951410748a62beca';
const OPEN_WM_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid='+API_KEY;

let TEMP = {
  getTemp: (location) => {
    let encodedLoc = encodeURIComponent(location); // encode input for browser uri
    let requestURL = `${OPEN_WM_URL}&q=${encodedLoc}`;
  return axios.get(requestURL).then((res) => { // takes a uri, fetches it and goes back with result
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }

    }, (err) => {
      throw new Error(res.data.message);
    });
  }
};

export default TEMP
