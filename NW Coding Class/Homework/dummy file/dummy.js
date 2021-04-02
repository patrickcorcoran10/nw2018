// 'use strict';

// const yelp = require('yelp-fusion');

// // Place holder for Yelp Fusion's API Key. Grab them
// // from https://www.yelp.com/developers/v3/manage_app
// const apiKey = 'vdkflv0IHYZhIzuK784v56x-zqrliZgiWmuctcLCENcPsCHu90-LTFHdGiwmEYLlQqguclyxpa6rKCADLoR5xpBA92aZ6-hxBV6qPOGrBep88JjGlOdTewuQz9ajW3Yx';

// const searchRequest = {
//   term:'food',
//   location: 'chicago, il',
//   limit: "20",
//   open_now: true
//   // location.zip_code: "60608"
// };

// const client = yelp.client(apiKey);

// client.search(searchRequest).then(response => {


//   const firstResult = response.jsonBody.businesses[19];
//   const prettyJson = JSON.stringify(firstResult, null, 4);
//   console.log(prettyJson);
// }).catch(e => {
//   console.log(e);

//   return e;
// });
apikey = "AIzaSyAcujgc2owNgLSDEM49auF-dx6mdy4yMlw"
var queryURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters?key="+apikey+"?location=60608?inputtype=textquery";
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});