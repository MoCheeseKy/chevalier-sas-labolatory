import HeroSection from '@/components/Home/HeroSection';
import DivisionsSection from '@/components/Home/DivisionsSection';
import AboutSection from '@/components/Home/AboutSection';
import AslabSection from '@/components/Home/AslabSection';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className='h-[calc(100vh-80px)] bg-primary flex justify-center items-center '>
        <HeroSection />
      </div>

      {/* About Section */}
      <div className='flex flex-col items-center'>
        <AboutSection />
      </div>

      {/* Divisions Section */}
      <div className='flex flex-col items-center'>
        <DivisionsSection />
      </div>

      <div className='flex flex-col items-center'>
        <AslabSection />
      </div>
    </>
  );
}
