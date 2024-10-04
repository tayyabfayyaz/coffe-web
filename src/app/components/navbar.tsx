import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React from "react";




function Navbar(){
    return(
        <>

        <header className="bg-transparent absolute h-15 flex justify-around  px-3">
            <ul className="py-3 ml-14">
                <li className="align-middle block text-5xl font-bold my-1 text-white">COFFO</li>
            </ul>
            <ul className="flex ml-36 gap-x-9 text-xl font-samibold text-white my-0 py-0">
                <li className="hover:bg-red-600 h-20 w-auto pt-5 px-3"><Link href="#">HOME</Link></li>
                <li className="hover:bg-red-600 h-20 w-auto pt-5 px-3"><Link href="#">ABOUT</Link></li>
                <li className="hover:bg-red-600 h-20 w-auto pt-5 px-3"><Link href="#">COFFEES</Link></li>
                <li className="hover:bg-red-600 h-20 w-auto pt-5 px-3"><Link href="#">SHOP</Link></li>
                <li className="hover:bg-red-600 h-20 w-auto pt-5 px-3"><Link href="#">BLOG</Link></li>
                <li className="hover:bg-red-600 h-20 w-auto pt-5 px-3"><Link href="#">CONTACT</Link></li>
                <li><button className="flex justify-between text-2xl "><FontAwesomeIcon icon={faUser} />Login</button></li>
                <li><i className="materials-icons">search</i></li>
            </ul>
        </header>
        </>
    );

}
export default Navbar;
