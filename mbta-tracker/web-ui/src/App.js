import { useState, useEffect } from 'react';
import './App.scss';
require('dotenv').config();

async function fetchSearches() {
  let searches = await fetch("http://localhost:4000/api/v1/searches", {});
  let resp = await searches.json();

  return resp.data;
}

async function sendLocation(position) {
  let response = await fetch("http://localhost:4000/api/v1/searches", {
    method: 'POST',
    headers: {

    },
    body: JSON.stringify(position)
  });
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    default:
      alert("An unknown error occurred.");
      break;
  }
}

function App() {

  const [searches, setSearches] = useState([]);
  const [position, setPosition] = useState(new Map());

  useEffect(() => {
    if (searches.length === 0) {
      fetchSearches().then((ss) => setSearches(ss));
    }
  }, [searches]);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);

    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    let newPos = new Map([
      ["latitude", position.coords.latitude],
      ["longitude", position.coords.longitude]
    ]);
    setPosition(newPos);
  }

  getLocation();

  return (
    <div>
      <b>Latitude:</b> {position.get("latitude")} <br />
      <b>Longitude:</b> {position.get("longitude")} <br />
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Vehicle Type</th>
            <th>Expected Arrival</th>
            <th>Expected Departure</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {searches.map(s => {

            return s.response.data.map(r => {

              return (
                <tr key={r.id}>
                  <td>{r.name}</td>
                  <td>{r.relationships.stop.id}</td>
                  <td>{r.vehicle_type}</td>
                  <td>{r.attributes.arrival_time}</td>
                  <td>{r.attributes.departure_time}</td>
                  <td>{r.latitude}</td>
                  <td>{r.longitude}</td>
                </tr>
              )
            })
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
