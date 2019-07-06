/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    //console.log('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
    
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const ipObj = JSON.parse(body);
    const ip = ipObj.ip;
    //console.log(ip);
    callback(null, ip);
  });
};

const fetchCoordsByIP = function(ip, callback) {
//   request('https://api.ipify.org?format=json', (error, response, body) => {
//     //console.log('error:', error); // Print the error if one occurred
//     //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     //console.log('body:', body); // Print the HTML for the Google homepage.
//     //const ip = JSON.parse(body).ip;
//     const ipObj = JSON.parse(body);
//     const ip = ipObj.ip;
// });
};

module.exports = {fetchMyIP};
module.exports = {fetchCoordsByIP};