queryUrl = "https://www.geysertimes.org/api/v5/geysers";

// Perform a GET request to the query URL
// Once we get a response, send the data.features object to the
d3.json(queryUrl).then((data) => {
  console.log(data);

  var markers = [];
