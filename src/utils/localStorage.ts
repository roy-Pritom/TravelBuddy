export const setToLocalStorage=(key:string,token:string)=>{
    return localStorage.setItem(key,token)
}
export const getFromLocalStorage=(key:string)=>{
    return localStorage.getItem(key)
}
export const removeFromLocalStorage=(key:string)=>{
    return localStorage.removeItem(key)
}