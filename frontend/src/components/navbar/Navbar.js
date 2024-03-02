import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const navbar = () => {
    return (
        <nav className="flex item-center justify-between py-6">
            <Link href="/">
                <div className="flex items-center cursor-pointer">
                    <Image src="/assets/logo.png" height={150} width={150} />

                </div>
            </Link>
            <ul className="flex items-center">
                <li className="mr-6 font-medium text-gray-600">
                    <a href="/">Home</a>
                </li>
                <li className="mr-6 font-medium text-gray-600">
                    <a href="#">Categories</a>
                </li>
                <li className="mr-6 font-medium text-gray-600">
                    <a href="/about">About</a>
                </li>
                <li className="mr-6 font-medium text-gray-600">
                    <a href="/contact">Contact</a>
                </li>
            </ul>
            <ul className="flex items-center">
                <li className="mr-6 font-medium text-gray-600">
                    <a href="/login" className="hover:text-gray-400">
                        Log in
                    </a>
                </li>
                <li className="mr-6 font-medium text-gray-600">
                    <a
                        href="/register"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Sign up
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default navbar;