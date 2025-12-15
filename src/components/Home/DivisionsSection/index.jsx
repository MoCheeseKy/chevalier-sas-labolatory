import Wrapper from '@/components/_shared/Wrapper';
import SectionTitle from '@/components/_shared/SectionTitle';

export default function DivisionsSection() {
  return (
    <>
      <SectionTitle
        classNames='mt-12'
        upper='OUR EXPERTISE'
        lower='What you can get to learn?'
      />
      <Wrapper className='flex flex-col gap-24 mt-12'>
        {/* STARTUP */}
        <div className='flex justify-between'>
          <div className='max-w-[520px] text-[#1E1E1E]'>
            <h3 className='text-[48px] font-bold mb-4'>Startup</h3>
            <p className='text-lg text-[#1E1E1E] tracking-[4px]'>
              Kamu suka buat ide bisnis? Atau kamu pengen belajar cara buat
              mencari ide terus biar jadi startup? Pas banget buat kamu yang
              pengen belajar cara mencari ide bisnis untuk dijadiin startup.
            </p>
          </div>
          <div className='min-w-[520px] max-w-[520px] aspect-521/319 rounded-xl bg-startup bg-cover bg-no-repeat' />
        </div>
        {/* UIUX */}
        <div className='flex justify-between'>
          <div className='min-w-[520px] max-w-[520px] aspect-521/319 rounded-xl bg-game bg-cover bg-no-repeat' />
          <div className='max-w-[520px] text-[#1E1E1E]'>
            <h3 className='text-[48px] font-bold mb-4'>UI/UX Design</h3>
            <p className='text-lg text-[#1E1E1E] tracking-[4px]'>
              Suka menggunakan aplikasi di smartphone android kamu? suka
              penasaran ga sih kalo buat aplikasinya tuh kayak gimana? Tenang di
              divisi ini kamu bakal belajar cara membuat aplikasi untuk
              smartphone khususnya buat android dari paling dasar banget.
            </p>
          </div>
        </div>
        {/* WEB */}
        <div className='flex justify-between'>
          <div className='max-w-[520px] text-[#1E1E1E]'>
            <h3 className='text-[48px] font-bold mb-4'>Web Development</h3>
            <p className='text-lg text-[#1E1E1E] tracking-[4px]'>
              Ga suka coding? Dan tertarik di dunia design Tapi tetap ingin
              berkontribusi bersama developer? Pas banget, ini divisi yang tepat
              buat kamu yang gasuka coding tapi suka di dunia design.
            </p>
          </div>
          <div className='min-w-[520px] max-w-[520px] aspect-521/319 rounded-xl bg-uiux bg-cover bg-no-repeat' />
        </div>
        {/* MOBILE */}
        <div className='flex justify-between'>
          <div className='min-w-[520px] max-w-[520px] aspect-521/319 rounded-xl bg-android bg-cover bg-no-repeat' />
          <div className='max-w-[520px] text-[#1E1E1E]'>
            <h3 className='text-[48px] font-bold mb-4'>Mobile Development</h3>
            <p className='text-lg text-[#1E1E1E] tracking-[4px]'>
              Suka menggunakan aplikasi di smartphone android kamu? suka
              penasaran ga sih kalo buat aplikasinya tuh kayak gimana? Tenang di
              divisi ini kamu bakal belajar cara membuat aplikasi untuk
              smartphone khususnya buat android dari paling dasar banget.
            </p>
          </div>
        </div>
        {/* GAME */}
        <div className='flex justify-between'>
          <div className='max-w-[520px] text-[#1E1E1E]'>
            <h3 className='text-[48px] font-bold mb-4'>Game Development</h3>
            <p className='text-lg text-[#1E1E1E] tracking-[4px]'>
              Suka main game? Tapi gabisa cara buat game nya? Tenang, di divisi
              ini pas banget buat kamu yang suka main game sekalian belajar cara
              buat game nya.
            </p>
          </div>
          <div className='min-w-[520px] max-w-[520px] aspect-521/319 rounded-xl bg-game bg-cover bg-no-repeat' />
        </div>
      </Wrapper>
    </>
  );
}
