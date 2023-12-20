import React, { useEffect } from 'react';
import { initFlowbite } from 'flowbite';
import BottomNav from '../BottomNav/BottomNav';
import SearchBar from '../SearchBar/SearchBar';


const Layout = ({ children }) => {
    useEffect(() => {
        initFlowbite()
    }, [])

    return (
        <div className='flex flex-col h-screen dark'>
            <div className='dark:bg-gray-700 dark:text-white h-[calc(100vh-4rem)] overflow-y-auto'>
                <div className="container px-2 sm:px-0 mx-auto pt-2 ">
                    {children}
                </div>
                <BottomNav></BottomNav>
            </div>
        </div>

    )

};

export default Layout;
