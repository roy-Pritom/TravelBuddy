"use client"

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Page: React.FC = () => {
const router=useRouter();
    useEffect(() => {
       
            const lastVisit = sessionStorage.getItem('lastVisit');
            const currentTime = new Date().getTime();

            // If last visit is not recorded or it was more than 5 seconds ago, refresh the page
            if (!lastVisit || currentTime - parseInt(lastVisit, 10) > 5000) {
                sessionStorage.setItem('lastVisit', currentTime.toString());
                router.refresh();
            
        }
    }, []);

    return (
        <div>
            <h1>Welcome To Dashboard</h1>
        </div>
    );
};

export default Page;
