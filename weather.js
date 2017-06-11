const apicall = require('./test.js');



apicall.getTemp('Madrid').then(function(data) {
  console.log(data);
}, function(err) {
  console.log(err);
});
