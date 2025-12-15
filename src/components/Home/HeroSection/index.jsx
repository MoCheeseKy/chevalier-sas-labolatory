import Wrapper from '@/components/_shared/Wrapper';
import Button from '@/components/_shared/Button';

export default function HeroSection() {
  return (
    <Wrapper className='text-center text-white'>
      <h1 className='text-[80px] font-extrabold mb-7'>
        Empowering the Learners of Tomorrow
      </h1>
      <div className='flex justify-center gap-5'>
        <Button className='bg-white text-primary w-fit text-2xl font-bold py-4 px-7 rounded-[25px]'>
          Join Our Team
        </Button>
      </div>
    </Wrapper>
  );
}
