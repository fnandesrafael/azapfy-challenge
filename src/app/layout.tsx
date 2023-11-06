import type { Metadata } from 'next';
import { Archivo_Black, Poppins } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const archivoBlack = Archivo_Black({
  weight: '400',
  variable: '--font-archivo-black',
  preload: true,
  subsets: ['latin'],
  display: 'swap',
});
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  preload: true,
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jornada do Herói',
  description:
    'Aplicação frontend desenvolvida com TypeScript e Next.js como solução do desafio técnico para a vaga de desenvolvedor frontend da Azapfy.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="retro">
      <Head>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <body
        className={`${poppins.variable} ${archivoBlack.variable} text-[#16160A]`}
      >
        {children}
      </body>
    </html>
  );
}
