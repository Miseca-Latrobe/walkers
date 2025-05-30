export function extractEmailDomains(data) {

  return data.map((row) => {

    const value = row["Values"];

    if (typeof value === "string") {

      const match = value.match(/[\w.-]+@([\w.-]+)/);

      if (match) {

        return { ...row, "Email Domain": match[1] };

      }
    }

    return { ...row, "Email Domain": "" };

  });
}