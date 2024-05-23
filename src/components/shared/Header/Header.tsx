"use client"
import { Avatar, Container, Tooltip } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";

const Header = () => {
    const AuthButton = dynamic(() => import('@/components/UI/AuthButton/AuthButton'), { ssr: false })
    // console.log(user);
    const NavBarItems = <>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About Us</Link></li>
    </>
    return (
        <Container>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavBarItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost md:text-2xl text-xl font-bold">GigClickers</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavBarItems}

                    </ul>
                </div>
               <AuthButton/>
            </div>
        </Container>
    );
};

export default Header;