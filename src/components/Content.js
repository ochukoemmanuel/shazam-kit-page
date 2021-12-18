import React from 'react';
import audioWaves from '../images/audio-waves.png';

const Content = () => {
  return (
    <div className='bg__cl__content py-14 md:px-20 mt-44 rounded-3xl w-11/12 md:w-3/5 mx-auto text-center align-middle'>
      <div className='w-16 md:w-80 mx-auto text-center mb-20'>
        <span>
          <img className='w-full' src={audioWaves} alt='spectrum' />
        </span>
      </div>
      <div className='flex justify-between text-left mb-20 content__center'>
        <h2 className='md:text-5xl font-bold pr-16'>
          Bring music recognition to your apps
        </h2>
        <div className='md:text-2xl space-y-9'>
          <p className=''>
            Tap into Shazam’s extensive music catalog and delight your users
            with music-based experiences.
          </p>
          <p>
            Sync discoveries with the Shazam App or Music Recognition History in
            Control Center.
          </p>
        </div>
      </div>
      <div className='border__line rounded-xl border-gray-700 mb-20'></div>
      <div className='flex justify-between text-left pb-20 content__center'>
        <h2 className='md:text-5xl flex-1 font-bold pr-16 content__center'>
          Do more with ShazamKit
        </h2>
        <div className='md:text-2xl flex-1 content__center space-y-9 pr-16'>
          <p className=''>
            Build and manage your own catalog of audio content, like audio from
            videos, podcasts, and even audio you record from scratch.
          </p>
          <p>
            Sync or trigger user experiences with the content from your audio
            catalog.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
