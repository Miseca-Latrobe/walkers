// Define the list of possible policy violation headers to check for
const headers = [
  "Email", "USB", "Application", "Cloud", "Bank Account Numbers", "Confidential Data",
  "Credit Card Numbers", "Data Leakage", "Documents", "Email Enhanced Monitoring", "External Domain",
  "Personal Email Address", "Enhanced Monitoring", "Financial Data", "Fraud Indicators", "Internal Data",
  "Large Export", "PCI", "PDF", "Performance Improvement Plan", "PHI", "PII",
  "Presentation", "Productivity Monitored", "Restricted Data", "Sensitive",
  "Spreadsheets", "User At Risk", "Zip Files"
];

const normalisedHeaders = headers.map(h =>
  h.replace(/\s+/g, "").toLowerCase()
);

export function extractPolicyViolations(data) {
  return data.map(row => {
    const policyRaw = row["policiesBreached"] || "";
    const policy = policyRaw.replace(/\s+/g, "").toLowerCase();

    const matched = [];

    headers.forEach((header, index) => {
      if (policy.includes(normalisedHeaders[index])) {
        matched.push(header);
      }
    });

    return {
      ...row,
      policyViolations: matched, 
    };
  });
}
