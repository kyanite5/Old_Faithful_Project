queryUrl = "https://www.geysertimes.org/api/v5/geysers";

// Perform a GET request to the query URL
// Once we get a response, send the data.features object to the
d3.json(queryUrl).then((data) => {
  console.log(data);

  var markers = [];

  // Loop through the geyser array
  for (var index = 0; index < data.length; index++) {
    var marker = L.circlemarker(([data.latitude, data.longitude])
      .bindPopup("<h3>" + data.name +"<h3>"));
      markers.push(marker);
      }
console.log(markers);
  const geyserLayer = L.layerGroup(markers);

// Define basemaps layers: street, light, satellite
  const streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
  });

  const lightmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_KEY
  });

  const satellitemap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.satellite",
  accessToken: API_KEY
  });

// Define a baseMaps object to hold our base layers
  const baseMaps = {
    "Street Map": streetmap,
    "Light Map": lightmap,
    "Satellite Map": satellitemap
    };

  const overlayMaps = {
    "Geysers": geyserLayer,
    };

  // Create our map, giving it the streetmap, lightmap, satellite layers to display on load
    const myMap = L.map("map", {
    center: [44.460, -110.828],
    zoom: 9,
    layers: [streetmap, lightmap, satellitemap, geyserLayer]
    });

    // Create a layer control
    // Pass in our baseMaps and overlayMaps
    // Add the layer control to the map
    L.control.layers(baseMaps, overlayMaps, {collapsed: false
    }).addTo(myMap);
});
