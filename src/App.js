import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [l, setL] = useState(false);

  useEffect(() => {
    Axios.get("https://api.publicapis.org/entries").then((a) => {
      setData(a.data.entries);
      setL(true);
    });
  }, []);
  return (
    <div className="App">{l ? <table className="tableHeader">
      <tr className="A">
        <th>Sl.no.</th>
        <th>Name</th>
        <th>Description</th>
        <th>Link</th>
      </tr>
      {data.map((e, i) => (
        <tr>
          <td>{i + 1}</td>
          <td>{e.API}</td>
          <td>{e.Description}</td>
          <td>{e.Link}</td>
        </tr>
      ))}
    </table> : <img src="loading.png" alt="Loading ..."></img>}

    </div>
  );
}

export default App;
