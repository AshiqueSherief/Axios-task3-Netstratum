import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("https://api.publicapis.org/entries").then((a) => {
      setData(a.data.entries);
    });
  }, []);
  return (
    <div className="App">
      <table className="tableHeader">
        <tr>
          <th>sl.no.</th>
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
      </table>
    </div>
  );
}

export default App;
