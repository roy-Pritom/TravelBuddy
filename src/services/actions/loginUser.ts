import { FieldValues } from "react-hook-form"
import setAccessToken from "./setAccessToken";
import { getUserInfo } from "../auth.service";
import { TUser } from "@/types";
import { jwtDecode } from "jwt-decode";

export const loginUser = async (data: FieldValues) => {
    const res = await fetch('https://assignment-8-server-gamma.vercel.app/api/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
        credentials:"include"
    })
    const userData = await res.json();
    if(userData?.data?.accessToken){
        const decode=jwtDecode(userData?.data?.accessToken) as TUser
        setAccessToken(userData?.data?.accessToken,{
            redirect:`/dashboard/${decode?.role.toLowerCase()}`
        })
    }
    return userData;
}