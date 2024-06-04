"use client"
import TravelDatePicker from "@/components/Forms/TravelDatePicker";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from "dayjs";
type TProps={
    setSearchTerm:React.Dispatch<React.SetStateAction<string>> ;
    setSelectedStartDate:React.Dispatch<React.SetStateAction<Dayjs | null>>;
    selectedStartDate:Dayjs | null;
    setSelectedEndDate:React.Dispatch<React.SetStateAction<Dayjs | null>>;
    selectedEndDate:Dayjs | null;
}
const SearchBar = ({setSearchTerm,selectedStartDate,setSelectedStartDate,
    selectedEndDate,setSelectedEndDate}:TProps) => {
    return (
        <div className="lg:w-[80%] md:w-[100%] w-[300px] md:mx-auto mx-auto bg-green-100 md:p-10 rounded-md p-3">
                <div className="md:p-5 p-3 border-2 border-blue-400
                md:flex md:gap-3 justify-between items-center rounded-md bg-white ">
                    <label className="input input-bordered flex items-center gap-2 mb-2 md:w-[150px] lg:w-[100%]w-[100%]">
                        <input type="text" onChange={(e)=>setSearchTerm(e.target.value)} className="grow" placeholder="Search Trip" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
           <div className="md:my-0 my-3">

           <LocalizationProvider   dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
          timezone='system'
        label="Start Date"
        value={selectedStartDate}
        onChange={(newValue: Dayjs | null) => setSelectedStartDate(newValue)} 
      />
    </LocalizationProvider>
           </div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
            timezone='system'
            label="End Date"
            value={selectedEndDate}
            onChange={(newValue: Dayjs | null) => setSelectedEndDate(newValue)} 
             />
           </LocalizationProvider>
           {/* <button className="btn bg-[#29CD9C] md:mt-0 mt-3">Search</button> */}
                </div>
            </div>
     
    );
};

export default SearchBar;