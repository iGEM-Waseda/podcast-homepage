import { Caveat, Londrina_Outline, Kiwi_Maru } from 'next/font/google';

export const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-caveat'
});

export const londrinaOutline = Londrina_Outline({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-londrina-outline'
});

export const kiwiMaru = Kiwi_Maru({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-kiwi-maru'
  });