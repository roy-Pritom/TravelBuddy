import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import { useEffect, useState } from 'react'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()


type TProps={
    searchTerm:string;
    delay:number;
}
export const useDebounced=({searchTerm,delay}:TProps)=>{
  const [debouncedValue,setDebouncedValue]=useState<string>(searchTerm);


  useEffect(()=>{
    // set time out
    const handler=setTimeout(()=>{
        setDebouncedValue(searchTerm);
    },delay)
    // stop time out
    return()=>{
      clearTimeout(handler)
    }
  },[searchTerm,delay]);

  return debouncedValue;
}