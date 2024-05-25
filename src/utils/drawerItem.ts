import { IDrawerItem, USER_ROLE, UserRole } from "@/types";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PostAddIcon from '@mui/icons-material/PostAdd';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HistoryIcon from '@mui/icons-material/History';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SendIcon from '@mui/icons-material/Send';
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
                {
                    title: "Profile",
                    path: `${role}/admin-profile`,
                    icon: AccountCircleIcon
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
                        title: "Add Buddy",
                        path: `${role}/travel-request`,
                        icon: SendIcon
                    },
                    {
                        title: "Buddy Requests",
                        path: `${role}/buddy-request`,
                        icon: RequestPageIcon
                    },
                 
                    {
                        title: "Request History",
                        path: `${role}/request-history`,
                        icon: HistoryIcon
                    },
                    {
                        title: "Profile",
                        path: `${role}/user-profile`,
                        icon: AccountCircleIcon
                    }
                )
                break;


        default:
            break;
    }
    return [...roleMenus];
}