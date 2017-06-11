// callback way

function getTemp(location, callback) {
  callback(undefined, 32);
  callback('Cannot find City');
}


// the problem with this approach is that we are using the same callback function to deal with both success and failure cases
// it's better to have separate handlers

// second problem is that calling the callback for both cases will cause a problem
// getTemp('Oujda', function(err, temp) {
//   if (err) {
//     console.log('error: ' + err);
//   } else {
//   console.log('success: '+ temp);
//   }
// });


// Promises way

function getTempPromise(location) { // if there is no callback then how can we use the data? by returning a promise
  return new Promise(function(resolve, reject) {
    if (typeof location == 'string') {
      if (location == 'Oujda') {
        resolve(33);
      }
      reject('City not included in our registry');
    } else {
      reject('Error in processing');
    }

  });
}

getTempPromise('Oujda').then(function(temp) {
  console.log('Success: temp is ' + temp);
}, function(err) {
  console.log(err);
});


/////////////////////////

//
function addPromise(a, b) {
  return new Promise(function(resolve, reject){
    if (typeof a == 'number' && typeof b == 'number') {
      resolve('the sum is :' + (a + b));
    } else if (typeof a != 'number' || typeof b != 'number') {
      reject('One of the argument is not a number, please try again');
    } else {
      reject('input not valid, try again');
    }
  });
}

addPromise(3,4).then(function(sum) {
  console.log(sum);
}, function(err) {
  console.log(err);
});
