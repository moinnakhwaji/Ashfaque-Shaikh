
import React, { useState } from "react";
import LogoImage from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleChange = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 bg-transparent text-gray-200 py-4 z-10">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="flex items-center">
                    {/* Logo */}
                    <div className="text-yellow-500 text-3xl font-bold">
                        <img className="h-12 w-12 rounded-full" src={LogoImage} alt="Logo" />
                    </div>
                </div>
                <div className="space-x-8 hidden md:flex">
                    <Link
                        to={"/"}
                        className="font-poppins text-custom-gray text-lg leading-lg hover:text-yellow-500"
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="font-poppins text-custom-gray text-lg leading-lg hover:text-yellow-500"
                    >
                        About
                    </Link>
                    <Link
                        to={"/services"}
                        className="font-poppins text-custom-gray text-lg leading-lg hover:text-yellow-500"
                    >
                        Services
                    </Link>
                    <Link
                        to={"/contact"}
                        className="font-poppins text-custom-gray text-lg leading-lg hover:text-yellow-500"
                    >
                        Contact Us
                    </Link>
                </div>
                {/* <div className="bg-zinc-900 py-4 px-6 rounded-md hidden md:flex">
                    <Link
                        to="/about"
                        className="font-poppins font-medium text-custom-light-gray text-xl leading-xl"
                    >
                        Get a quote
                    </Link>
                </div> */}
                <div className="block md:hidden">
                    <button
                        onClick={handleChange}
                        className="flex items-center px-3 py-2 text-sm font-medium leading-5 text-custom-light-gray hover:text-yellow-500"
                    >
                        {!menuOpen ?   <IoMdMenu size={24}/> :null}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {/* {yaha color dekhna hai dalu ya nhi chote menu me} */}
            <div
                className={`md:hidden fixed top-0 right-0 bg-zinc-900 z-50  text-gray-200 w-64 h-full transition-transform duration-300 ease-in-out ${
                    menuOpen ? "transform translate-x-0" : "transform translate-x-full"
                }`}
            >
                <div className="flex justify-end p-4">
                    <button onClick={handleChange}>
                        <IoClose size={24} />
                    </button>
                </div>
                <div className="flex flex-col items-center mt-8 space-y-4">
                    <Link
                        to={"/"}
                        className="text-lg hover:text-yellow-500"
                        onClick={handleChange}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="text-lg hover:text-yellow-500"
                        onClick={handleChange}
                    >
                        About
                    </Link>
                    <Link
                        to={"/services"}
                        className="text-lg hover:text-yellow-500"
                        onClick={handleChange}
                    >
                        Services
                    </Link>
                    <Link
                        to={"/contact"}
                        className="text-lg hover:text-yellow-500"
                        onClick={handleChange}
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
