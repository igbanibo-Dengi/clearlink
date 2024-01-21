'use client'


import MainNav from './MainNav';
import MobileNav from './MobileNav';

const Header = () => {



    return (
        <header className=" py-5 px-2 lg:px-0 z-50 w-full fixed">
            <MainNav />
            <MobileNav />
        </header>
    )
}

export default Header