import './App.css';

import React, {useState} from "react";
import CsvReader from './utils/CsvReader';

function App() {

  const [csvData, setCsvData] = useState([]);

  const handleData = (data) => {
    console.log("Parsed CSV Data:", data);
    setCsvData(data);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>CSV Uploader</h1>
      <CsvReader onDataParsed={handleData} />
      <pre>{JSON.stringify(csvData, null, 2)}</pre>
    </div>
  );
}

export default App;
