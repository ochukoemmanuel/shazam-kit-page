import React from 'react';
import apple__logo from '../images/apple-black-logo.png';
import '../index.css';

const Header = () => {
  return (
    <div className='w-full xl:w-11/12 2xl:w-9/12 px-4 flex justify-between items-center mx-auto mt-3'>
      <div className='flex-1 flex justify-start items-center md:space-x-6 align-middle pr-5'>
        <div className='w-32 sm:w-32 md:w-32 xl:w-32 2xl:w-32'>
          <img
            className='w-full'
            src={`https://ar.toneden.io/9865125/fe188c4e-4cc4-40da-8f2b-10e48fcd16e0`}
            alt='shazam__logo'
          />
        </div>
        <ul className='hidden sm:hidden md:hidden lg:flex w-auto xl:flex 2xl:flex justify-between md:space-x-5 text-sm font-bold'>
          <li>
            <a className='text-white hover:underline' href='cc'>
              MY LIBRARY
            </a>
          </li>
          <li>
            <a className='text-white hover:underline' href='cc'>
              APPS
            </a>
          </li>
          <li>
            <a className='text-white hover:underline' href='cc'>
              CHARTS
            </a>
          </li>
        </ul>
      </div>
      <div className='w-full flex-1 flex justify-end items-center md:space-x-4'>
        <div className='w-full sm:w-80 md:w-80 lg:w-80 xl:w-80 2xl:w-80 py-2.5 px-2.5 flex sm:flex md:flex bg_form justify-between items-center rounded-lg pr-4 mr-4'>
          <input
            className='w-full bg-transparent font-semibold focus:outline-none'
            type='text'
            placeholder='Search for music'
          />
          <div className='font-bold'>
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </div>
        <ul className='w-full hidden md:hidden lg:flex xl:flex 2xl:flex justify-end items-center space-x-8 text-sm'>
          <li className='flex-1'>
            <a
              className='bg__dark text-white py-2.5 px-4 rounded-lg font-bold'
              href='cc'
            >
              DOWNLOAD APP
            </a>
          </li>
          <li className='flex-1'>
            <a
              className='bg-white text__primary py-2.5 px-4 rounded-lg'
              href='cc'
            >
              <span className='font-bold text__primary'>CONNECT</span>{' '}
              <span className='font-light'>MUSIC</span>
            </a>
          </li>
        </ul>

        <div className='hidden sm:hidden md:hidden'>
          <svg
            className='w-6 h-6'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <div className='block sm:block md:block lg:hidden xl:hidden'>
          <svg
            className='w-6 h-6'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
