var now = ~~(Date.now() / 1000);
var fourhours = (now - 14400);
console.log(now, fourhours);

d3.json("https://www.geysertimes.org/api/v5/entries/" + fourhours + "/" + now + "/2").then((data) => {

var unix_timestamp1 = data['entries'][0].time;
console.log(data['entries'][0].time);

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

var unix_timestamp2 = data['entries'][1].time;
console.log(data['entries'][1].time);

  var date = new Date(unix_timestamp2*1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  var seconds = "0" + date.getSeconds();
  // Display time in hh:mm:ss
  var formattedTime2 = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  document.getElementById('second_last').innerHTML = formattedTime2;

var wt = (unix_timestamp2 - unix_timestamp1)/60;
document.getElementById('waiting').innerHTML = wt;
console.log(formattedTime1, formattedTime2, wt);

var dur = data['entries'][0].duration;

if (dur === "") {
  console.log("No data available");
  document.getElementById('duration').innerHTML = "No data available";
  document.getElementById('prediction').innerHTML = "Not available";
  }
  else {
  console.log(parseFloat(data['entries'][0].duration));
  var prediction = ((parseFloat(dur)) + 1.1823)/0.0656;
  document.getElementById('duration').innerHTML = dur;
  document.getElementById('prediction').innerHTML = prediction;
}
});
