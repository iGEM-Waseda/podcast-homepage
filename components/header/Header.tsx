"use client";

import Link from 'next/link';
import Image from 'next/image';
import NavBar from '@/components/header/NavBar';
import ToggleMenu from '@/components/header/ToggleMenu';
import DnaSequenceMarquee from './DnaSequenceMarquee';
import { caveat } from "@/lib/fonts";

export default function Header() {

  return (
    <header className={`${caveat.className} fixed top-0 left-0 w-full z-50`}>
      <nav className="bg-background/60 backdrop-blur-md sticky top-0 z-50 shadow-md">
        <div className="max-w-screen-2xl pl-8 xl:pl-8 pr-8 mx-auto">
          <div className="flex justify-between items-center py-2 xl:py-4">
            <div className="h-8 w-fit relative">
              <Link href="/" className="block h-full">
                <Image
                src="/iGEM-Waseda_home_logo.png"
                alt="iGEM - Waseda Logo"
                width={750}
                height={183}
                className="h-full w-auto object-contain scale-[1.3] xl:scale-[1.6] origin-left"
                />
              </Link>
            </div>

            <div className="flex items-center space-x-4 lg:space-x-8">
              <NavBar /> {/* PCでのナビゲーション */}
              <ToggleMenu /> {/* タブレット・スマホでのトグルメニュー */}
            </div>
          </div>
        </div>
      </nav>
      <DnaSequenceMarquee />  { /* DNA配列のマルキー */ }
    </header>
  );
}