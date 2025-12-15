'use client';
import React from 'react';

export default function AslabCard({
  imgSrc,
  role,
  name,
  nickname,
  studyProgram,
}) {
  return (
    <div className='keen-slider__slide rounded-lg overflow-hidden w-full'>
      <div
        className='w-full aspect-2/3 bg-no-repeat bg-center bg-cover flex items-end '
        style={{
          backgroundImage: `url('${imgSrc}')`,
        }}
      >
        <div className='w-full h-[98px] flex justify-end items-end text-right p-3 text-lg font-bold text-white bg-gradient-to-b from-transparent to-primary'>
          <p className='max-w-[105px]'>{role}</p>
        </div>
      </div>

      {/* Bagian Teks */}
      <div className='py-4 text-[#0E1925] text-base'>
        <h3 className='font-bold truncate'>{name}</h3>
        <p className='text-base '>{nickname}</p>
        <p className='text-base '>{studyProgram}</p>
      </div>
    </div>
  );
}
