import './App.css';

import React, {useState} from "react";
import CsvReader from './utils/CsvReader';
import { processCsvData } from "./utils/processCsvData";

function App() {

  const [csvData, setCsvData] = useState([]);

  const handleData = (data) => {
    const processedData = processCsvData(data);
    console.log("Processed CSV Data:", processedData);
    setCsvData(processedData);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>CSV Uploader</h1>
      <CsvReader onDataParsed={handleData} />
       {/* The line below used to display the data on screen to view the output of the data upload and manipulation - It will be deleted for production build*/}
      <pre>{JSON.stringify(csvData, null, 2)}</pre>
    </div>
  );
}

export default App;
