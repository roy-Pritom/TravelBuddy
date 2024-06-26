import dayjs from "dayjs";

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

export const formattedDate=(dateString:string)=>{
// Parse the date string with Day.js
const date = dayjs(dateString);
// Format the date to "23 April 2024"
const formattedDate = date.format('DD MMMM YYYY');
return formattedDate;
}