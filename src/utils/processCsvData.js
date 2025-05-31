import { addWeekEnding } from "./addWeekEnding";
import { extractEmailDomains } from "./extractEmailDomains";
import { extractPolicyViolations } from "./extractPolicyViolations";

export function processCsvData(data) {

  let updatedData = extractEmailDomains(data);
  updatedData = extractPolicyViolations(updatedData);
  updatedData = addWeekEnding(updatedData)

  return updatedData;
}