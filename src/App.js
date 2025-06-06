import './App.css';
import React, { useState, useRef } from "react";
import CsvReader from './utils/CsvReader';
import { processCsvData } from "./utils/processCsvData";
import logoIcon from './assets/shadowsight-logo.png';


import TopBreachedPoliciesChart from './components/TopBreachedPoliciesChart';
import RiskScoreTrendChart from './components/RiskScoreTrendChart';
import StatusPieChart from './components/StatusPieChart';
import TopUsersChart from './components/TopUsersChart';

import html2canvas from 'html2canvas';

function App() {
  const [csvData, setCsvData] = useState(null);

  const topPoliciesRef = useRef(null);
  const riskScoreRef = useRef(null);
  const statusPieRef = useRef(null);
  const topUsersRef = useRef(null);

  const handleData = (data) => {
    const processedData = processCsvData(data);
    console.log("Processed CSV Data:", processedData);
    setCsvData(processedData);
  };

  const downloadChart = (ref, fileName) => {
    if (!ref.current) return;
    html2canvas(ref.current).then(canvas => {
      const link = document.createElement('a');
      link.download = `${fileName}.png`;
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <img src={logoIcon} alt="ShadowSight Logo" className="logo-icon" />
          <span className="logo-text">
            SHADOW<span className="highlight">SIGHT</span>
          </span>
        </div>
        <nav className="nav">
          <a href="#" className="nav-link">Dashboard</a>
          <a href="#" className="nav-link active">Upload CSV</a>
          <a href="#" className="nav-link">Analysis</a>
          <a href="#" className="nav-link">Custom</a>
        </nav>
      </header>

      <main className="main">
        <h1 className="title">Upload ShadowSight CSV Report</h1>
        <div className="upload-box">
          <p className="upload-text">
            Drag and drop your CSV file here<br />or browse to upload.
          </p>
          <CsvReader onDataParsed={handleData} />
        </div>

        {/* Charts in 2x2 grid layout */}
        <div className="chart-grid">
          {csvData?.charts?.topPolicies?.length > 0 && (
            <div ref={topPoliciesRef} className="chart-card">
              <TopBreachedPoliciesChart data={csvData.charts.topPolicies} />
              <button onClick={() => downloadChart(topPoliciesRef, 'Top_Breached_Policies')}>
                Download PNG
              </button>
            </div>
          )}

          {csvData?.charts?.riskScoreTrend?.length > 0 && (
            <div ref={riskScoreRef} className="chart-card">
              <RiskScoreTrendChart data={csvData.charts.riskScoreTrend} />
              <button onClick={() => downloadChart(riskScoreRef, 'Risk_Score_Trend')}>
                Download PNG
              </button>
            </div>
          )}

          {csvData?.charts?.statusPie?.length > 0 && (
            <div ref={statusPieRef} className="chart-card">
              <StatusPieChart data={csvData.charts.statusPie} />
              <button onClick={() => downloadChart(statusPieRef, 'Status_Distribution')}>
                Download PNG
              </button>
            </div>
          )}

          {csvData?.charts?.topUsers?.length > 0 && (
            <div ref={topUsersRef} className="chart-card">
              <TopUsersChart data={csvData.charts.topUsers} />
              <button onClick={() => downloadChart(topUsersRef, 'Top_At_Risk_Users')}>
                Download PNG
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
