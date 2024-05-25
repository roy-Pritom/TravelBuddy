"use client"
import TravelDatePicker from "@/components/Forms/TravelDatePicker";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
const SearchBar = () => {
    return (
        <div className="w-[80%] mx-auto bg-green-100 p-10 rounded-md">
            
                <div className="p-5  border-2 border-blue-400
                flex justify-between items-center rounded-md bg-white ">
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search Trips" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
            timezone='system'
            disablePast
            label="Start Date"
             />
           </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
            timezone='system'
            disablePast
            label="End Date"
             />
           </LocalizationProvider>
           <button className="btn bg-[#29CD9C] ">Search</button>
                </div>
            </div>
     
    );
};

export default SearchBar;