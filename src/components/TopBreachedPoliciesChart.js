// TopBreachedPoliciesChart.js
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  Cell
} from "recharts";

const COLORS = [
  "#0070f3", "#3291ff", "#79ffe1", "#7928ca", "#f81ce5",
  "#ff0080", "#f5a623", "#f13600", "#50e3c2", "#00c8ff"
];

function TopBreachedPoliciesChart({ data }) {
  const top10 = [...data]
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  return (
    <div className="chart-card">
      <h2 className="chart-title">Top Breached Policies (Top 10)</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          layout="vertical"
          data={top10}
          margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="policy" type="category" width={150} />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" name="Violations">
            {top10.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TopBreachedPoliciesChart;
