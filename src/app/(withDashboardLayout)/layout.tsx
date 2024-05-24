
import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";



const layout = ({ children }: { children: React.ReactNode }) => {
    return (


        <DashboardDrawer>
            {children}
        </DashboardDrawer>


    );
};

export default layout;