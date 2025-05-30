import { extractEmailDomains } from "./extractEmailDomains";
import { extractPolicyViolations } from "./extractPolicyViolations";

export function processCsvData(data) {

  const withoutDomains = extractEmailDomains(data);
  const withViolations = extractPolicyViolations(withoutDomains);

  return withViolations;
}