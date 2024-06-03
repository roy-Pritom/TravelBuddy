import { logoutUser } from "@/services/actions/logOutUser";
import { getUserInfo} from "@/services/auth.service";
import { TUser } from "@/types";
import { Avatar, Tooltip } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const AuthButton = () => {
    const router=useRouter();
    const user = getUserInfo() as TUser;
    const handleLogout = () => {
        try {
            logoutUser(router)
            toast.success("logout successfully")
        }
        catch (error: any) {
            console.log(error?.message);
        }
    }
    return (
        <div className="navbar-end ">
        {
            user?.id ?
                (
                    <>
            <Link href={`${user?.role === 'admin' ? 'dashboard/admin/admin-profile' :'/dashboard/user/user-profile'}`}>
                            <Tooltip title={user?.email}>
                                <Avatar sx={{ mr: 2 }} />

                            </Tooltip>
                        </Link>
                       
                            <button onClick={handleLogout} className="btn  btn-sm rounded-full w-[80px] text-white bg-black hover:bg-[#29CD9C]">Logout</button>
                        
                    </>
                )
                :
                <>
                    <Link href='/login'>
                        <button className=" md:mr-5 mr-2 font-[500] text-base text-black hover:text-[#29CD9C]">Login</button>
                    </Link>
                    <Link href='/register'>
                        <button className="btn  btn-sm rounded-full w-[80px] text-white bg-black hover:bg-[#29CD9C]">Sign Up</button>
                    </Link>
                </>
        }

    </div>
    );
};

export default AuthButton;