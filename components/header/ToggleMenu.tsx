'use client';

import { useState, useEffect } from 'react';
import { pages } from '@/components/navigationName';
import Link from 'next/link';

export default function ToggleMenu() {
  const linkClassName = "block px-6 py-4 md:py-6 text-sm md:text-lg border-b hover:bg-gray-100 border-gray-50 transition-colors text-gray-700 hover:text-enji-hover";
  
  // メニュー全体の開閉状態
  const [isOpen, setIsOpen] = useState(false);

  // メニューが開いている時は、背景のスクロールを禁止する
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // メニューのリンクをタップしたら、メニュー全体を閉じる関数
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="relative w-8 h-8 text-black focus:outline-none z-30 shrink-0"
        aria-label="Open Menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" />
        </svg>
      </button>

      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <div 
        className={`fixed top-0 right-0 h-full w-[70%] max-w-sm bg-white z-50 shadow-2xl overflow-y-auto transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-100">
          <span className="font-bold text-base md:text-xl text-gray-800">Menu</span>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-500 hover:text-enji-hover focus:outline-none" // ホバー時の色は#b94047(フッターの色とはちょっと違う)
            aria-label="Close Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col pb-4">
          <li>
            <Link href={pages[1].href} onClick={handleLinkClick} className={linkClassName}>
              {pages[1].label}
            </Link>
          </li>

          <li>
            <Link href={pages[2].href} onClick={handleLinkClick} className={linkClassName}>
              {pages[2].label}
            </Link>
          </li>

          <li>
            <Link href={pages[3].href} onClick={handleLinkClick} className={linkClassName}>
              {pages[3].label}
            </Link>
          </li>

          <li>
            <Link href={pages[4].href} onClick={handleLinkClick} className={linkClassName}>
              {pages[4].label}
            </Link>
          </li>
        </ul>

        {/* <div className="flex px-6 py-4 gap-4">
          <TwitterButton textColor='text-gray-700' hoverColor='hover:text-enji-hover' />
          <InstagramButton textColor='text-gray-700' hoverColor='hover:text-enji-hover' />
          <MailButton textColor='text-gray-700' hoverColor='hover:text-enji-hover' />
        </div> */}
      </div>
    </div>
  );
}