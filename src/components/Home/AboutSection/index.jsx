import Wrapper from '@/components/_shared/Wrapper';
import SectionTitle from '@/components/_shared/SectionTitle';

export default function AboutSection() {
  return (
    <>
      <SectionTitle upper='ABOUT US' lower='Chevalier Lab SAS' />
      <Wrapper className='flex gap-[34px] mt-12'>
        <div className='min-w-[585px] max-w-[585px] aspect-3/2 bg-cheva-fgs bg-no-repeat bg-cover'></div>
        <p className='text-lg text-[#1E1E1E] tracking-[4px]'>
          Chevalier Lab SAS is a student activity unit at Telkom University
          dedicated to fostering practical skills in software development among
          its members. Established in 2005, we have consistently aimed to bridge
          the gap between academic knowledge and real-world application.
        </p>
      </Wrapper>
      <Wrapper className='grid grid-cols-3 mt-12'>
        <div className='flex flex-col text-center'>
          <h3 className='text-[48px] font-bold text-primary'>100+</h3>
          <p className='text-[32px] text-primary'>Members</p>
        </div>
        <div className='flex flex-col text-center'>
          <h3 className='text-[48px] font-bold text-primary'>100+</h3>
          <p className='text-[32px] text-primary'>Achivements</p>
        </div>
        <div className='flex flex-col text-center'>
          <h3 className='text-[48px] font-bold text-primary'>100+</h3>
          <p className='text-[32px] text-primary'>Projects</p>
        </div>
      </Wrapper>
    </>
  );
}
