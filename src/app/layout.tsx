import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const bricolageGrotesque = Bricolage_Grotesque({
  variable: '--font-bricolage-grotesque',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Avalon Blog',
  description: 'Avalon Blog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>

      <body className={`${bricolageGrotesque.variable} antialiased`}>
        <header className='flex justify-center items-center sticky top-0 bg-white z-10'>
          <Link href='/'>
            <h1 className='font-bold'>Avalon Blog</h1>
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
