var rp = require("request-promise");
var json2csv = require('json2csv');
var fields = [ 'name', 'website', 'email', 'description', 'street',
  'houseno', 'postcode', 'city', 'state', 'country',
  'twitter', 'facebook', 'phone', 'fax',
  'category', 'opening_hours',
  'lon', 'lat', 'updated_on', 'created_on',
  'id' ];

function listVenues(_lat1, _lon1, _lat2, _lon2) {
  var options = { method: 'GET',
    url: 'https://coinmap.org/api/v1/venues/',
    qs: { lat1: _lat1, lon1: _lon1, lat2: _lat2, lon2: _lon2 },
    headers: 
    { 'Cache-Control': 'no-cache' },
    json: true }

  return rp(options)
}

function getVenue(_id) {
  var options = { method: 'GET',
    url: 'https://coinmap.org/api/v1/venues/'+_id,
    headers: 
    { 'Cache-Control': 'no-cache' },
    json: true }

  return rp(options)
}

if (process.argv.length != 6) {
   console.log('Usage: '+process.argv[0]+' '+process.argv[1]+' lat1 lon1 lat2 lon2')
   process.exit(0);
}

venues = []
listVenues(process.argv[2], process.argv[3], process.argv[4], process.argv[5]).then(
  (_venues) => {
    _venuePromises = []
    for(var venue of _venues['venues']) {
      _venuePromises.push(getVenue(venue['id']).then( (venue) => {
        venues.push(venue['venue'])
      }))
    }
    return Promise.all(_venuePromises)
  }).then( () => {
    console.log(json2csv({ data: venues, fields: fields }));
  })
