import { IDrawerItem } from "@/types";
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
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
            ...(pathName===linkPath ? {borderRight:"3px solid black",backgroundColor:"primary.main",borderRadius:"10px",marginLeft:"10px",marginRight:"10px",fontWeight:"bold", "& svg":{color:"#1586FD"}}:{})
           }}
           >
                        <ListItemButton >
                            <ListItemIcon>
                                {item.icon && <item.icon/>}
                            </ListItemIcon>
                            <ListItemText 
                        primary={
                            <Typography sx={{ color: 'black', fontWeight: 'bold' }}>
                            {item.title}
                          </Typography>
                        } 
                        
                    />
                        </ListItemButton>
                    </ListItem>
        </Link>
    );
};

export default SidebarItem;