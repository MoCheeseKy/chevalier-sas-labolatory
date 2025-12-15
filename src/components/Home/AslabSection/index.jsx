'use client';
import React from 'react';
import { useKeenSlider } from 'keen-slider/react';

import Wrapper from '@/components/_shared/Wrapper';
import SectionTitle from '@/components/_shared/SectionTitle';
import AslabCard from './AslabCard';

const assistants = [
  {
    imgSrc: '/images/example-profile.svg',
    role: 'Coordinator',
    name: 'Joan Orlando Purba',
    nickname: 'nickname on ur jacket',
    studyProgram: 'Program studi',
  },
  {
    imgSrc: '/images/example-profile.svg',
    role: 'Vice Coordinator',
    name: 'Ahmad Budi Santoso',
    nickname: 'nickname on ur jacket',
    studyProgram: 'Program studi',
  },
  {
    imgSrc: '/images/example-profile.svg',
    role: 'Secretary',
    name: 'Chrisanto Dwi',
    nickname: 'nickname on ur jacket',
    studyProgram: 'Program studi',
  },
  {
    imgSrc: '/images/example-profile.svg',
    role: 'Treasurer',
    name: 'David Elia',
    nickname: 'nickname on ur jacket',
    studyProgram: 'Program studi',
  },
  {
    imgSrc: '/images/example-profile.svg',
    role: 'Public Relations',
    name: 'Eka Kurniawan',
    nickname: 'nickname on ur jacket',
    studyProgram: 'Program studi',
  },
];
function Autoplay(slider) {
  let timeout;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }

  function nextTimeout() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      slider.next();
    }, 2500);
  }

  slider.on('created', () => {
    nextTimeout();
  });

  slider.on('dragStarted', clearNextTimeout);
  slider.on('animationEnded', nextTimeout);
  slider.on('updated', nextTimeout);
}

export default function AslabSection() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      renderMode: 'performance',
      slides: {
        perView: 1.2,
        spacing: 16,
      },
      breakpoints: {
        '(min-width: 480px)': {
          slides: { perView: 2, spacing: 16 },
        },
        '(min-width: 768px)': {
          slides: { perView: 3, spacing: 24 },
        },
        '(min-width: 1024px)': {
          slides: { perView: 4, spacing: 24 },
        },
      },
      defaultAnimation: {
        duration: 1000,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      },
    },
    [Autoplay]
  );

  return (
    <>
      <SectionTitle upper='ASLAB' lower='Get to know our Assistants' />
      <div
        ref={sliderRef}
        className='keen-slider px-4 md:px-0 w-full md:w-[85%] lg:w-full max-w-[1170px] ${className} min-h-fit'
      >
        {assistants.map((aslab, index) => (
          <AslabCard key={index} {...aslab} />
        ))}
      </div>
    </>
  );
}
