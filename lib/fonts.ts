import { Caveat, Londrina_Outline, Kiwi_Maru } from 'next/font/google';

// ヘッダーの手書き風文字
export const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-caveat'
});

// DNA配列のマルキーで使用
export const londrinaOutline = Londrina_Outline({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-londrina-outline'
});

// 標準フォント
export const kiwiMaru = Kiwi_Maru({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-kiwi-maru'
  });