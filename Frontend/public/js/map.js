maptilersdk.config.apiKey = "mNLp5fO3mYIYJNfkUear";

const map = new maptilersdk.Map({
  container: "map", // container's id or the HTML element to render the map
  style: maptilersdk.MapStyle.STREETS,
  center: listing.geometry.coordinates, // starting position [lng, lat]
  zoom: 10, // starting zoom
});

console.log(listing.geometry.coordinates);
const marker = new maptilersdk.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new maptilersdk.Popup({ offset: 25 }).setHTML(
      `<h5>${listing.title}</h5> <p> Exact Location will be provide after booking</p>`
    )
  )
  .addTo(map);
