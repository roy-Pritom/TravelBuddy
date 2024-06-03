"use server"
import { AuthKey } from '@/constants'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';

const setAccessToken=(token:string,option?:any)=>{
    cookies().set(AuthKey,token);
        if(option && option?.redirect){
        redirect(option.redirect);
    }
}

export default setAccessToken;