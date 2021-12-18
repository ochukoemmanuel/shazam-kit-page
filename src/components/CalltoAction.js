import React from 'react';

const CalltoAction = () => {
  return (
    <div className='container mx-auto text-center mt-32 space-y-10 px-96'>
      <h2 className='text-5xl font-bold'>
        Create new audio recognition experiences for your users
      </h2>
      <p className='text-3xl font-600'>Start developing now.</p>
      <div className='pt-3'>
        <a
          className='cl__primary py-2 px-14 rounded text-white font-bold'
          href='https://developer.apple.com/shazamkit/'
        >
          GET STARTED
        </a>
      </div>
    </div>
  );
};

export default CalltoAction;
