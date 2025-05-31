export function addWeekEnding(data) {
  return data.map((row) => {
    const dateStr = row["date"]; 
    let weekEnding = "";


    // Check if dateStr is valid
    if (dateStr) {
        // Split dateStr and covert them to numbers
        const [day, month, year] = dateStr.split("/").map(Number);

        // JS uses 0 as January - therefore Month - 1
        const date = new Date(year, month - 1, day);

        // As in the processed data csv the week ending column is based on a Saturday
        const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday
        const daysToAdd = 6 - dayOfWeek; // calculation to get to Saturday

        //Set new date to be on the saturday as per calculation above
        date.setDate(date.getDate() + daysToAdd);

        // Format the date as DD/MM/YYYY
        const formatted = date.toLocaleDateString("en-GB");
        weekEnding = formatted;
    }

    return { ...row, "Week Ending": weekEnding };
    
  });
}