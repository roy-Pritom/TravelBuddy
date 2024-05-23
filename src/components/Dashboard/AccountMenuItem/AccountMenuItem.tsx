"use client"

import { Avatar, Box, Divider, IconButton, ListItem, ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRouter } from "next/navigation";
import LogoutIcon from '@mui/icons-material/Logout';
import React from "react";
import { AuthKey } from "@/constants";

const AccountMenuItem = () => {
    const router=useRouter();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    // const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    //     React.useState<null | HTMLElement>(null);

    // const handleMobileMenuClose = () => {
    //     setMobileMoreAnchorEl(null);
    // };
    const isMenuOpen = Boolean(anchorEl);
    // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };

    const handleMenuClose = () => {
        setAnchorEl(null);
        // handleMobileMenuClose();
    };
    const handleLogOut=()=>{
        setAnchorEl(null);
        localStorage.removeItem(AuthKey);
        router.push('/login')

    }
    return (
        <React.Fragment>
            <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
                <Tooltip
                    title="Account Setting"
                    componentsProps={{
                        tooltip: {
                            sx: {
                                bgcolor: "#cdd1da5c",
                                color: "primary.main"
                            }
                        }
                    }}
                >

                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        // aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                        sx={{backgroundColor:"#ffffff",
                            "& svg":{
                                color:"primary.main"
                            }
                        }}
                    >
                        <KeyboardArrowDownIcon />
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                  id="account-menu"
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                  open={isMenuOpen}
                onClose={handleMenuClose}
                onClick={handleMenuClose}
                sx={{mt:8}}
            >
                      <MenuItem onClick={handleMenuClose}>
                        <Avatar sx={{background:"transparent",color:"primary.main"}}/>
                        Profile
                        </MenuItem>
                      <Divider/>
      <MenuItem onClick={handleLogOut}>
        <ListItemIcon color="error.main">
            <LogoutIcon sx={{color:"primary.main"}}/>
        </ListItemIcon>
           Logout
        </MenuItem>
            </Menu>
        </React.Fragment>
    );
};

export default AccountMenuItem;