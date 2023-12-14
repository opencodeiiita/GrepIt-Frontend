import React from 'react';
import { Input } from 'antd';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

const Navbar = () => {
  return (
    <div className='bg-white p-3 w-3/4 float-right m-3 rounded-lg shadow-lg'>
        <div className='flex justify-between'>
            <div className="text-2xl mx-5 font-bold font-inter">GrepIt</div>
            <form action="">
                <div className='flex relative items-center text-gray-400 focus-within:text-gray-600 mx-1'>
                    <MagnifyingGlassIcon className='w-4 h-4 absolute z-10 ml-2 pointer-events-none' />
                    <Input placeholder="Search..." className='pr-3 pl-8 bg-gray-100 border-none ring-2 placeholder-gray-500 ring-gray-200 focus:ring-gray-400 focus:ring-2' />
                </div>
            </form>
            
        </div>
    </div>
  );
};

export default Navbar;
