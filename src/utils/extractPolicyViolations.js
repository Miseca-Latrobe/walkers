const keywords = [
  "Email", "USB", "Application", "Cloud", "BankAccountNumbers", "ConfidentialData",
  "CreditCardNumbers", "DataLeakage", "Documents", "EmailEnhancedMonitoring", "ExternalDomain",
  "PersonalEmailAddress", "EnhancedMonitoring", "FinancialData", "FraudIndicators", "InternalData",
  "LargeExport", "PCI", "PDF", "PerformanceImprovementPlan", "PHI", "PII",
  "Presentation", "ProductivityMonitored", "RestrictedData", "Sensitive",
  "Spreadsheets", "UserAtRisk", "ZipFiles"
];

const headers = [
  "Email", "USB", "Application", "Cloud", "Bank Account Numbers", "Confidential Data",
  "Credit Card Numbers", "Data Leakage", "Documents", "Email Enhanced Monitoring", "External Domain",
  "Personal Email Address", "Enhanced Monitoring", "Financial Data", "Fraud Indicators", "Internal Data",
  "Large Export", "PCI", "PDF", "Performance Improvement Plan", "PHI", "PII",
  "Presentation", "Productivity Monitored", "Restricted Data", "Sensitive",
  "Spreadsheets", "User At Risk", "Zip Files"
];

export function extractPolicyViolations(data) {

  return data.map((row) => {

    const policy = row["Policy Violations"] || "";
    const newRow = { ...row };

    keywords.forEach((keyword, i) => {

      if (policy.toLowerCase().includes(keyword.toLowerCase())) {
        newRow[headers[i]] = headers[i];

      }
    });

    return newRow;
    
  });
}
