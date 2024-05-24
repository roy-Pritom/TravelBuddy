"use client"

import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import { useEffect } from 'react';


const Page = () => {
    const router = useRouter();

    useEffect(() => {
        const lastVisit = sessionStorage.getItem('lastVisit');
        const currentTime = new Date().getTime();

        // If last visit is not recorded or it was more than 5 seconds ago, refresh the page
        if (!lastVisit || currentTime - parseInt(lastVisit, 10) > 5000) {
            sessionStorage.setItem('lastVisit', currentTime.toString());
            window.location.reload();
        }
    }, []);

    return (
        <div>
            <h1>Welcome To dashboard</h1>
        </div>
    );
};

export default Page;