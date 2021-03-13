import { useState, useEffect } from 'react';
import './App.scss';

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
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {searches.map(s => {
            return s.response.data.map(r => (
              <tr key={r.id}>
                <td>{r.attributes.name}</td>
                <td>{r.id}</td>
                <td>{r.attributes.vehicle_type}</td>
                <td>{r.attributes.latitude}</td>
                <td>{r.attributes.longitude}</td>
              </tr>
            ))}
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;