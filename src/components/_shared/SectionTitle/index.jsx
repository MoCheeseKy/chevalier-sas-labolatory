import Wrapper from '../Wrapper';

export default function SectionTitle({ upper, lower, classNames }) {
  return (
    <div className={`flex justify-center ${classNames}`}>
      <Wrapper className='flex flex-col gap-1 my-12'>
        <h2 className='text-primary text-lg font-medium text-center'>
          {upper}
        </h2>
        <p className='text-[48px] text-[#0E1925] font-bold text-center'>
          {lower}
        </p>
      </Wrapper>
    </div>
  );
}
