import { AuthKey } from "@/constants"
import { instance } from "@/helpers/axios/axiosInstance"
import { TUser } from "@/types"
import { decodeToken } from "@/utils/jwtDecoder"
import { getFromLocalStorage, removeFromLocalStorage, setToLocalStorage } from "@/utils/localStorage"

export const storeUserInfo=(token:string)=>{
 return setToLocalStorage(AuthKey,token)
}
export const getUserInfo=()=>{
  const token=getFromLocalStorage(AuthKey);
  if(token){
    const userData=decodeToken(token) as TUser;
    return {
      ...userData,
      role:userData?.role?.toLowerCase()
    };
  }
  else{
    return '';
  }
}
export const removeUserInfo=()=>{
 return removeFromLocalStorage(AuthKey)
}

export const isUserLoggedIn=()=>{
const token=getFromLocalStorage(AuthKey);
if(token){
  return !!token;
}
}

export const getNewAccessToken = async () => {
  return await instance({
     url: 'https://assignment-8-server-gamma.vercel.app/api/refresh-token',
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     withCredentials: true,
  });
};