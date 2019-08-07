const mapurl = "https://www.geysertimes.org/api/v5/geysers";

d3.json(mapurl).then((mapData) => {

//Define icon
    var ofIcon = L.icon({
        iconUrl: 'static/images/clipart-star.png',
        iconSize: [30,30]
    });

//Define marker layer
var gMarkers = [];

for (var i = 0; i < mapData['geysers'].length; i++) {
  // loop through the earthquakes array and create new marker
  gMarkers.push
  (L.circleMarker([mapData['geysers'][i].latitude, mapData['geysers'][i].longitude], {fillOpacity: 0.75,color: "black",
        stroke: true, weight: .25, fillColor: "royalBlue", radius: 5}).bindPopup("<p>" + mapData['geysers'][i].name + "</p>"));
  }

const geyserLayer = L.layerGroup(gMarkers);

// Define tile layers for basemap
    const outdoors = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
      maxZoom: 18,
      id: "mapbox.outdoors",
      accessToken: API_KEY
      });

    const satellite= L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.satellite",
    accessToken: API_KEY
    });

// Define a baseMaps object to hold our base layers
    const baseMaps = {
      Topo: outdoors,
      Satellite: satellite

    };

    // Create overlay object to hold our overlay layer
   const overlayMaps = {
     Geysers: geyserLayer
   };

   // Create Leaflet map
   let myMap = L.map("map", {
     center: [44.48, -110.83],
     zoom: 12,
     layers: [outdoors]
   });

   L.marker([44.4604887, -110.8288224], {icon: ofIcon}).bindPopup("Old Faithful").addTo(myMap);

   //Add basemap layers
  L.control.layers(baseMaps, overlayMaps, {collapsed:false}).addTo(myMap);

 }); //end map
