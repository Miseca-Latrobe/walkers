// src/components/TopUsersChart.js
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  Cell
} from "recharts";

const COLORS = ["#0070f3", "#3291ff", "#79ffe1", "#7928ca", "#f81ce5", "#ff0080"];

function TopUsersChart({ data }) {
  const top10 = [...data].sort((a, b) => b.count - a.count).slice(0, 10);

  return (
    <div className="chart-card">
      <h2 className="chart-title">Top At-Risk Users</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart layout="vertical" data={top10} margin={{ top: 20, right: 30, left: 100, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="user" type="category" width={150} />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" name="Incidents">
            {top10.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TopUsersChart;
