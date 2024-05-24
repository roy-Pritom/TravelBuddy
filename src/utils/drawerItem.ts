import { IDrawerItem, USER_ROLE, UserRole } from "@/types";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import PostAddIcon from '@mui/icons-material/PostAdd';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockResetIcon from '@mui/icons-material/LockReset';
import ReviewsIcon from '@mui/icons-material/Reviews';
export const drawerItems = (role: UserRole): IDrawerItem[] => {
    const roleMenus: IDrawerItem[] = [];
    // console.log(role);
    switch (role) {
        case USER_ROLE.ADMIN:
            roleMenus.push(
                {
                    title: "Dashboard",
                    path: `${role}`,
                    icon: DashboardIcon
                },
                {
                    title: "user",
                    path: `${role}/manage-user`,
                    icon: GroupIcon
                },
            )
            break;

            case USER_ROLE.USER:
                roleMenus.push(
                    {
                        title: "Dashboard",
                        path: `${role}`,
                        icon: DashboardIcon
                    },
                    {
                        title: "Post Travel Trip",
                        path: `${role}/post-travel`,
                        icon: PostAddIcon
                    },
                    {
                        title: "My Travel Request",
                        path: `${role}/travel-request`,
                        icon: RequestPageIcon
                    },
                    {
                        title: "Profile",
                        path: `${role}/user-profile`,
                        icon: AccountCircleIcon
                    },
                    {
                        title: "Password",
                        path: `${role}/password`,
                        icon: LockResetIcon
                    },
                    {
                        title: "Reviews",
                        path: `${role}/reviews`,
                        icon: ReviewsIcon
                    },
                )
                break;


        default:
            break;
    }
    return [...roleMenus];
}