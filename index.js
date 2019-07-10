//const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP ('172.46.2.206', (error, coords) => {
//   if (error) {
//     console.log(`It didn't work! error: `, error);
//     return;
//   }
  
//   console.log('It worked! Returned Coords:, ', coords);
// });

fetchISSFlyOverTimes (exampleCoords, (error, passTimes) => {
  if (error) {
    console.log(`It didn't work! error: `, error);
    return;
  }
  console.log(`It worked! Flyover times: `, passTimes)
});