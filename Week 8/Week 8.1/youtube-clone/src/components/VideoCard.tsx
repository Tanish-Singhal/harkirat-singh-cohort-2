import React from 'react';

function VideoCard({ videoTitle, videoThumbnail, channelIcon, channelUsername, videoViews, datePosted }: any) {
  return (
    <div className='grid grid-rows-4 gap-2'>
      <div className='w-1/4 row-span-3 rounded-lg'>
        <img className="rounded-lg" src={videoThumbnail} alt="video thumbnail" />
      </div>
      <div className='w-1/4 grid grid-cols-10 row-span-1'>
        <div className='col-span-2'>
          <img className=' rounded-full place-content-center' src={channelIcon} alt="channel icon" />
        </div>
        <div className='col-span-8 px-3 flex flex-col justify-center mx-3'>
          <h3 className='text-xl font-semibold'>{videoTitle}</h3>
          <h4 className='text-xl font-semibold text-slate-400'>{channelUsername}</h4>
          <h4 className='text-xl font-semibold text-slate-400'>{videoViews} | {datePosted}</h4>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
