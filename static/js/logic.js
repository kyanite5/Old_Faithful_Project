queryUrl = "https://www.geysertimes.org/api/v5/entries_latest/2";

// Perform a GET request to the query URL
// Once we get a response, send the data.features object to the
d3.json(queryUrl).then((data) => {
console.log(data['entries'][0].time);

unix_timestamp = data['entries'][0].time;
var date = new Date(unix_timestamp*1000);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
document.getElementById('output').innerHTML = formattedTime;
});
