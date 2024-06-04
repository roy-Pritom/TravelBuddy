import { FieldValues } from "react-hook-form";

export const registerUser=async(data:FieldValues)=>{
    const res=await fetch('https://assignment-8-server-gamma.vercel.app/api/register',{
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