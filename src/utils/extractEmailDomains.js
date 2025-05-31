export function extractEmailDomains(data) {

  return data.map((row) => {

    const value = row["values"];

    if (typeof value === "string") {

      // Use regex to extract the email domain from the email address
      const match = value.match(/[\w.-]+@([\w.-]+)/);

      if (match) {

        // match[1] contains the email domain - add it to the row
        return { ...row, "emailDomain": match[1] };

      }
    }

    return { ...row, "emailDomain": "" };

  });
}