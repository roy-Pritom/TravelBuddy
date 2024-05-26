"use client"
import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";
import { isUserLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
    const router=useRouter();
    if(!isUserLoggedIn()){
        return router.push('/login')
    }
    return (
        <DashboardDrawer>
            {children}
        </DashboardDrawer>

    );
};

export default DashBoardLayout;