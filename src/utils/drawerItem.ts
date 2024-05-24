import { IDrawerItem, USER_ROLE, UserRole } from "@/types";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import PostAddIcon from '@mui/icons-material/PostAdd';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HistoryIcon from '@mui/icons-material/History';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import EngineeringIcon from '@mui/icons-material/Engineering';
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
                    title: "Manage Accounts",
                    path: `${role}/manage-accounts`,
                    icon: ManageAccountsIcon
                },
                {
                    title: "Trip Management",
                    path: `${role}/manage-trips`,
                    icon: EngineeringIcon
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
                        title: "Request History",
                        path: `${role}/request-history`,
                        icon: HistoryIcon
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