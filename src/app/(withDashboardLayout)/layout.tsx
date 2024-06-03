"use client"
import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";
import { getUserInfo, isUserLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
    const router=useRouter();


    useEffect(()=>{ 
        if(!isUserLoggedIn()){
            return router.push('/login')
        }
    },[])
    return (
        <DashboardDrawer>
            {children}
        </DashboardDrawer>

    );
};

export default DashBoardLayout;