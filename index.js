const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss')

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

fetchCoordsByIP ('172.46.2.206', (error, data) => {
  console.log(error);
  console.log(data);
});