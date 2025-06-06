// src/components/RiskScoreTrendChart.js
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

function RiskScoreTrendChart({ data }) {
  return (
    <div className="chart-card">
      <h2 className="chart-title">Risk Score Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="averageScore" stroke="#0070f3" name="Avg Risk Score" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RiskScoreTrendChart;
