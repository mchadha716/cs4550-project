import { useState, useEffect } from 'react';
import './App.scss';
require('dotenv').config();

async function fetchSearches() {
  let searches = await fetch("http://localhost:4000/api/v1/searches", {});
  let resp = await searches.json();

  return resp.data;
}

function App() {

  const [searches, setSearches] = useState([]);

  useEffect(() => {
    if (searches.length === 0) {
      fetchSearches().then((ss) => setSearches(ss));
    }
  }, [searches]);

  console.log(searches)

  return (
    <div>
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
