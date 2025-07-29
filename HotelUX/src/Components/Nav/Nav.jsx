/* Nav.jsx */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Bookmark from '../../assets/bookmark.svg';
import 'react-datepicker/dist/react-datepicker.css';
import '../../../src/index.css';
import DatePicker from 'react-datepicker';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  return (
    <>
      {/* navbar */}
      <nav
        className={`navbar bg-white px-8 lg:px-16 h-24 w-full fixed top-5 left-0 lg:left-10 rounded-2xl lg:w-[calc(100%-5rem)] flex justify-between items-center z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gray-900 shadow-md' : 'bg-white'
        }`}
      >
        {/* logo */}
        <Link to="/" className="text-4xl font-bold text-black font-bricolage">
          Hotel<span className="text-yellow-500">Lux</span>
        </Link>

        {/* menu */}
        <ul
          className={`menu flex flex-col lg:flex-row absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent z-50 transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 lg:max-h-full lg:opacity-100'
          } gap-2 lg:gap-10 text-sm font-medium`}
        >
          <li>
            <Link to='/' className="uppercase text-base text-gray-600 hover:text-black md:text-black transition px-4 py-2 lg:px-0 lg:py-0 block">
              Home
            </Link>
          </li>
          <li>
            <Link to='/about' className="uppercase text-base text-gray-600 hover:text-black md:text-black transition px-4 py-2 lg:px-0 lg:py-0 block">
              About
            </Link>
          </li>
          <li>
            <Link to='/services' className="uppercase text-base text-gray-600 hover:text-black md:text-black transition px-4 py-2 lg:px-0 lg:py-0 block">
              Services
            </Link>
          </li>
          <li>
            <Link to='/rooms' className="uppercase text-base text-gray-600 hover:text-black md:text-black transition px-4 py-2 lg:px-0 lg:py-0 block">
              Rooms
            </Link>
          </li>
          <li>
            <Link to='/blogs' className="uppercase text-base text-gray-600 hover:text-black md:text-black transition px-4 py-2 lg:px-0 lg:py-0 block">
              Blogs
            </Link>
          </li>
          <li>
            <Link to='/contact' className="uppercase text-base text-gray-600 hover:text-black md:text-black transition px-4 py-2 lg:px-0 lg:py-0 block">
              Contact
            </Link>
          </li>
        </ul>

        {/* right‑side buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn bg-yellow-500 hover:bg-yellow-600 flex items-center lg:py-3 lg:px-8 py-2 px-4 rounded-full gap-3 text-white uppercase tracking-widest transition-colors duration-300"
          >
            <img src={Bookmark} alt="bookmark" className="invert brightness-0 w-4 h-4" />
            <span className="hidden xl:block">Book&nbsp;Now</span>
          </button>

          {/* mobile menu toggle */}
          <div className="lg:hidden block">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black text-3xl">
              {isOpen ? (
                <i className="ri-close-line" />
              ) : (
                <i className="ri-menu-line" />
              )}
            </button>
          </div>
        </div>
        
        {/* modal form */}
        {isModalOpen && (
          <div className='fixed inset-0 z-[999] flex items-center justify-center bg-[rgba(32,79,94,0.9)]'>
            <div className='bg-white w-full max-w-[500px] p-[40px] rounded-[15px] shadow-lg relative'>
              <button 
                onClick={() => setIsModalOpen(false)}
                className='absolute hover:bg-[#ecb934] hover:text-white transition duration-300 top-4 right-4 rounded-[50%] w-[50px] h-[50px] text-xl text-black font-bold bg-[#eafbfb] flex items-center justify-center'
              >
                <span className='bi bi-x-lg'></span>
              </button>
              <h2 className='text-3xl font-semibold mb-12'>Search</h2>
              <form className='space-y-6'>
                
                <div className="mb-6 relative">
                  <label className='block text-sm font-medium text-[#204f5e] tracking-widest uppercase mb-2'>Check-in</label>
                  <div className="relative ">
                    <DatePicker
                    selected={checkInDate}
                    onChange={(date) => setCheckInDate(date)}
                    placeholderText="Select Check-in Date"
                    className='w-full p-3 h-[60px] bg-[#eafbfb] rounded border border-[#d5f1f1] outline-none pr-10'
                    dateFormat="dd/MM/yyyy"
                    />
                    <i className="ri-calendar-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                </div>
                </div>

                <div className="mb-6 relative">
                  <label className='block text-sm font-medium text-[#204f5e] tracking-widest uppercase mb-2'>Check-out</label>
                  <div className="relative">
                    <DatePicker
                      selected={checkOutDate}
                      onChange={(date) => setCheckOutDate(date)}
                      placeholderText="Select Date"
                      className='w-full p-3 h-[60px] bg-[#eafbfb] rounded border border-[#d5f1f1] outline-none pl-10'
                      dateFormat="dd/MM/yyyy"
                    />
                    <i className="ri-calendar-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                  </div>
                </div>
                
                <div className="mb-6 relative">
                  <label className='block text-sm font-medium text-[#204f5e] tracking-widest uppercase mb-2'>Adults</label>
                  <input 
                    type="number" 
                    placeholder='0' 
                    min='1' 
                    className='w-full p-3 h-[60px] bg-[#eafbfb] rounded border border-[#d5f1f1] outline-none' 
                  />
                </div>
                <button 
                  type='submit' 
                  className='bg-sky-400 hover:bg-sky-500 text-white py-3 px-5 rounded-full w-full uppercase tracking-widest transition-colors duration-300'
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Nav;