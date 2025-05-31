import React from "react";
import Papa from "papaparse";

// Used PapaParse to handle the conversion of the CSV file into a Javascript object
// It handles common edge cases, supports header row mapping and is simple to implement

export default function CsvReader({onDataParsed}) {

    const handleFileChange = (e) => {

        const file = e.target.files[0];
        
        if (!file) return;

        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                onDataParsed(results.data);
            },
        });
    };

    return (

        <div>
            <input id="csvUpload" type="file" accept=".csv" onChange={handleFileChange}/>
        </div>
        
    );
}