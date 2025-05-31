// Define the list of possible policy violation headers to check for
const headers = [
  "Email", "USB", "Application", "Cloud", "Bank Account Numbers", "Confidential Data",
  "Credit Card Numbers", "Data Leakage", "Documents", "Email Enhanced Monitoring", "External Domain",
  "Personal Email Address", "Enhanced Monitoring", "Financial Data", "Fraud Indicators", "Internal Data",
  "Large Export", "PCI", "PDF", "Performance Improvement Plan", "PHI", "PII",
  "Presentation", "Productivity Monitored", "Restricted Data", "Sensitive",
  "Spreadsheets", "User At Risk", "Zip Files"
];

// Pre-normalise headers: remove spaces and lowercase
const normalisedHeaders = headers.map(h => h.replace(/\s+/g, "").toLowerCase());

export function extractPolicyViolations(data) {

  return data.map(row => {

    const policyRaw = row["policiesBreached"] || "";
    // normalise policy: remove spaces and lowercase
    const policy = policyRaw.replace(/\s+/g, "").toLowerCase();

    // create a temporary copy of the row
    const newRow = { ...row };

    headers.forEach((header, index) => {
      if (policy.includes(normalisedHeaders[index])) {
        newRow[header] = header;
      }
    });

    return newRow;
  });
}
