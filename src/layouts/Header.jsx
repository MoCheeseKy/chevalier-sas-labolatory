import Link from 'next/link';
import Wrapper from '@/components/_shared/Wrapper';

const Header = () => {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/division', label: 'Study Division' },
    { href: '/projects', label: 'Projects' },
    { href: '/news', label: 'News' },
    { href: '/aslab', label: 'Aslab' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className='flex justify-center bg-primary text-white fixed w-screen top-0 left-0 z-50'>
      <Wrapper className='flex items-center justify-between py-4'>
        <div className='bg-cheva-logo w-[162px] aspect-162/48 bg-no-repeat bg-contain'></div>

        <ul className='hidden md:flex items-center space-x-6 lg:space-x-8'>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className='text-base font-medium hover:text-gray-200 transition-colors'
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </Wrapper>
    </header>
  );
};

export default Header;
