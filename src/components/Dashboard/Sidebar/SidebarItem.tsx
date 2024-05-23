import { IDrawerItem } from "@/types";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarItem = ({item}:{item:IDrawerItem}) => {
    const linkPath=`/dashboard/${item.path}`;
    const pathName=usePathname();
    const isActive = pathName === linkPath;

    return (
        <Link href={linkPath}>
           <ListItem  disablePadding
           sx={{
            ...(pathName===linkPath ? {borderRight:"3px solid black",backgroundColor:"#29CD9C", "& svg":{color:"#1586FD"}}:{})
           }}
           >
                        <ListItemButton>
                            <ListItemIcon>
                                {item.icon && <item.icon/>}
                            </ListItemIcon>
                            <ListItemText 
                        primary={item.title} 
                        
                    />
                        </ListItemButton>
                    </ListItem>
        </Link>
    );
};

export default SidebarItem;