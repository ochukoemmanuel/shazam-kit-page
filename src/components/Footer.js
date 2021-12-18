import React from 'react';
import gIcon from '../images/g-store.jfif';

const Footer = () => {
  return (
    <div>
      <div className='bg__cl__content py-28 px-20 mt-44 mx-auto text-center align-middle'>
        <div className='mx-auto text-center mb-20'>
          <div className='container w-2/3 mx-auto px-10 flex justify-between text-left'>
            <div className='flex-1'>
              <div className='w-40'>
                <img
                  className='w-full mb-11'
                  src={`https://ar.toneden.io/9865125/fe188c4e-4cc4-40da-8f2b-10e48fcd16e0`}
                  alt='shazam__logo'
                />
              </div>
              <select
                className='bg-transparent text__dark py-3 px-4 w-80 focus:outline-none focus:border-transparent focus:ring-2 outline__primary'
                name='lang'
              >
                <option value='English'>English</option>
                <option value='English(UK)' selected>
                  English (UK)
                </option>
                <option value='Netherlands'>Netherlands</option>
                <option value='Deutsch'>Deutsch</option>
                <option value='Italiano'>Italiano</option>
                <option value='Polski'>Polski</option>
              </select>
              <div className='flex w-14 space-x-11 mt-16 justify-between'>
                <img
                  className='w-full'
                  src={`https://cdn-icons-png.flaticon.com/512/6124/6124997.png`}
                  alt='shazam__logo'
                />
                <img
                  className='w-full'
                  src={`https://cdn-icons.flaticon.com/png/512/668/premium/668276.png?token=exp=1639782197~hmac=8ea78cd4dfc96a3e6f70f0b079a9a54d`}
                  alt='shazam__logo'
                />
                <img
                  className='w-full rounded-xl'
                  src={gIcon}
                  alt='shazam__logo'
                />
              </div>
            </div>
            <div className='flex-1'></div>
            <div className='text-xl flex-1 font-medium '>
              <h3 className='text__dark text-xl mb-3'>Company</h3>
              <ul className='space-y-3'>
                <li>About Us</li>
                <li>Careers</li>
                <li>Help for Apple Devices</li>
                <li>Help for Android Devices</li>
                <li>ShazamKit for Developers</li>
                <li>Apple Music Offer</li>
              </ul>
            </div>
            <div className='text-xl flex-none font-medium'>
              <h3 className='text__dark text-xl mb-3'>Legal</h3>{' '}
              <ul className='space-y-3'>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Manage Your Data</li>
              </ul>
            </div>
          </div>
        </div>
        <h5 className='text__dark text-2xl mb-9'>Follow Us</h5>
        <div className='flex justify-between text-left mb-9 content__center'>
          <ul className='mx-auto flex space-x-9 space text-3xl'>
            <li>
              <i class='fab fa-facebook-f'></i>
            </li>
            <li>
              <i class='fab fa-twitter'></i>
            </li>
            <li>
              <i class='fab fa-instagram'></i>
            </li>
            <li>
              <i class='fab fa-snapchat-ghost'></i>
            </li>
          </ul>
        </div>
        <p className='text__dark text-sm'>
          © Copyright 2021 Apple Inc. and its affiliates |{' '}
          <span>
            <a
              className='text-sm hover:text__dark'
              href='https://www.apple.com/supplier-responsibility/'
            >
              Supplier Responsibility
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
