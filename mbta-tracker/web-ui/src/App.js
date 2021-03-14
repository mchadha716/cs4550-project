import { useState, useEffect } from 'react';
import './App.scss';

async function fetchSearches() {
  let searches = await fetch("http://localhost:4000/api/v1/searches", {});
  let resp = await searches.json();

  return resp.data;
}

async function fetchStopInfo(id) {
  let resp = await fetch("https://api-v3.mbta.com/stops?api_key=" 
    + "d1fc0786f5364ae7bc52236ea3d5fce6&filter[id]=" + id, {});
  let resp = await resp.json();

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



            return s.response.data.map(r => (
              <tr key={r.id}>
                <td>{}</td>
                <td>{r.relationships.stop.data.id}</td>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
              </tr>
            ))}
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
