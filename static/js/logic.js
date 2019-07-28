// queryUrl = "https://www.geysertimes.org/api/v5/entries_latest/2";

// Perform a GET request to the query URL
// Once we get a response, send the data.features object to the
// d3.json(queryUrl).then((data) => {
// console.log(data['entries'][0].time);
//
// unix_timestamp = data['entries'][0].time;
// var date = new Date(unix_timestamp*1000);
// // Hours part from the timestamp
// var hours = date.getHours();
// // Minutes part from the timestamp
// var minutes = "0" + date.getMinutes();
// // Seconds part from the timestamp
// var seconds = "0" + date.getSeconds();
//
// // Will display time in 10:30:23 format
// var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
// document.getElementById('last').innerHTML = formattedTime;
// });



const now = ~~(Date.now() / 1000);
const threehours = (now - 10800);

var url = "https://www.geysertimes.org/api/v5/entries/" + threehours + "/" + now + "/2";
console.log(url);

d3.json(url).then((data) => {

unix_timestamp1 = data['entries'][0].time;


  var date = new Date(unix_timestamp1*1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  var seconds = "0" + date.getSeconds();
  // Display time in hh:mm:ss
  var formattedTime1 = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  document.getElementById('last').innerHTML = formattedTime1;

unix_timestamp2 = data['entries'][1].time;

  var date = new Date(unix_timestamp1*1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  var seconds = "0" + date.getSeconds();
  // Display time in hh:mm:ss
  var formattedTime2 = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  document.getElementById('second_last').innerHTML = formattedTime2;

const wt = (data['entries'][1].time - data['entries'][1].time)/60;
document.getElementById('waiting').innerHTML = wt;
});
