"use client"
import { useGetTravelRequestsByUserQuery } from "@/redux/api/user/travelApi";

const TravelRequestPage = () => {
    const {data,isLoading}=useGetTravelRequestsByUserQuery({});
    console.log(data);
    return (
        <div>
            <h1>Travel</h1>
        </div>
    );
};

export default TravelRequestPage;