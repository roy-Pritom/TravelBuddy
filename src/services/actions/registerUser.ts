import { FieldValues } from "react-hook-form";

export const registerUser=async(data:FieldValues)=>{
    const res=await fetch('http://localhost:4000/api/register',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
        credentials:"include"
    });
    const userData=await res.json();
    return userData;
}