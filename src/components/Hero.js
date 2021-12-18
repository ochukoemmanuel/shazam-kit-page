import React from 'react';

const Hero = () => {
  return (
    <div className='container mx-auto text-center space-y-8  md:px-96'>
      <div className='w-32 md:w-52 mx-auto mb-28 mt-24'>
        <img
          className='w-full'
          src={`https://www.shazam.com/resources/a217529d3b8b3522d95243619b0da88509134ec5/shazamkit_logo.png`}
          alt='banner'
        />
      </div>
      <h2 className='text-5xl font-bold'>ShazamKit</h2>
      <p className='text-lg md:text-3xl font-600'>
        Integrate the magic of Shazam into your apps. Develop powerful
        audio-based experiences across Apple platforms and Android.
      </p>
      <div className='pt-7'>
        <a
          className='cl__primary text-white py-2 px-14 rounded font-bold'
          href='https://developer.apple.com/shazamkit/'
        >
          LEARN MORE
        </a>
      </div>
    </div>
  );
};

export default Hero;
