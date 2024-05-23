export const dateFormatter = (value: string) => {

    // Create a Date object from the original date string
    const date = new Date(value);

    // Extract the day, month, and year
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
    const year = date.getFullYear();

    // Format the date as "DD/MM/YYYY"
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;

}