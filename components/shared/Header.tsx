'use client'


import MainNav from './MainNav';
import MobileNav from './MobileNav';

const Header = () => {



    return (
        <header className=" pt-3 px-2 lg:px-2 z-50 w-full fixed ">
            <MainNav />
            <MobileNav />
        </header>
    )
}

export default Header