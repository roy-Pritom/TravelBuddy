import dayjs from "dayjs";

export const formateDateTime = (dateTime:string) => {
    const date = dayjs(dateTime);
    const formattedDate = date.format('D MMMM YYYY h:m a');
    return formattedDate;
}