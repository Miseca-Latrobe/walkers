// src/utils/processCsvData.js
import { addWeekEnding } from "./addWeekEnding";
import { extractEmailDomains } from "./extractEmailDomains";
import { extractPolicyViolations } from "./extractPolicyViolations";

export function processCsvData(data) {
  let updatedData = extractEmailDomains(data);
  updatedData = extractPolicyViolations(updatedData);
  updatedData = addWeekEnding(updatedData);

  // Top Policies
  const policyCountMap = {};
  updatedData.forEach(row => {
    if (Array.isArray(row.policyViolations)) {
      row.policyViolations.forEach(policy => {
        policyCountMap[policy] = (policyCountMap[policy] || 0) + 1;
      });
    }
  });
  const topPolicies = Object.entries(policyCountMap).map(([policy, count]) => ({ policy, count }));

  // Risk Score Over Time
  const scoreByDate = {};
  updatedData.forEach(row => {
    const date = row.date || "Unknown";
    const score = parseInt(row.riskScore || "0");
    if (!scoreByDate[date]) scoreByDate[date] = [];
    scoreByDate[date].push(score);
  });
  const riskScoreTrend = Object.entries(scoreByDate).map(([date, scores]) => ({
    date,
    averageScore: Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
  }));

  // Status Breakdown
  const statusCount = {};
  updatedData.forEach(row => {
    const status = row.status || "Unknown";
    statusCount[status] = (statusCount[status] || 0) + 1;
  });
  const statusPie = Object.entries(statusCount).map(([status, value]) => ({ status, value }));

  // Top Users
  const userCount = {};
  updatedData.forEach(row => {
    const user = row.user || "Unknown";
    userCount[user] = (userCount[user] || 0) + 1;
  });
  const topUsers = Object.entries(userCount).map(([user, count]) => ({ user, count }));

  return {
    raw: updatedData,
    charts: {
      topPolicies,
      riskScoreTrend,
      statusPie,
      topUsers
    },
  };
}
