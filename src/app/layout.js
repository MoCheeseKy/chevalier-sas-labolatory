import { Manrope } from 'next/font/google';
import './globals.css';
import 'keen-slider/keen-slider.min.css';
import Header from '@/layouts/Header';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Chevalier Lab SAS',
  description: 'masih lorem ipsum loh ya',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${manrope.variable} bg-white antialiased`}>
        <Header />
        <div className='py-20'>{children}</div>
      </body>
    </html>
  );
}
