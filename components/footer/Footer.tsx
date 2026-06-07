import Link from "next/link";
import Image from 'next/image';
import { pages } from '@/components/navigationName';

export default function Footer() {
 return (
    <footer className="w-full bg-red text-white py-12"> {/* フッターの色は#5a131d */}
      <div className="max-w-screen-2xl mx-auto px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-8 mb-12">
          
          {/* <div className="flex flex-col space-y-5 text-sm sm:text-base md:text-lg font-medium tracking-wide">
            <Link href={pages[0].href} className="hover:text-yellow transition-colors w-fit">{pages[0].label}</Link>
          </div> */}

          <div>
            <Link href={pages[0].href} className="hover:text-yellow transition-colors text-xl sm:text-2xl md:text-3xl font-medium tracking-wide">{pages[0].label}</Link>
            <div className="grid gap-y-5 gap-x-8 text-lg sm:text-xl md:text-2xl ml-3 mt-5">
              <Link href={pages[1].href} className="hover:text-yellow transition-colors w-fit">{pages[1].label}</Link>
              <Link href={pages[2].href} className="hover:text-yellow transition-colors w-fit">{pages[2].label}</Link>
            </div>
          </div>

          <div className="flex flex-col space-y-5 text-xl sm:text-2xl md:text-3xl font-medium tracking-wide">
            <Link href={pages[3].href} className="hover:text-yellow transition-colors w-fit">{pages[3].label}</Link>
            <Link href={pages[4].href} className="hover:text-yellow transition-colors w-fit">{pages[4].label}</Link>
          </div>

          {/* <div className="relative">
            <Link href={teamItems[0].href} className="hover:text-yellow transition-colors text-sm sm:text-base md:text-lg font-medium tracking-wide">{teamItems[0].label}</Link>
            <div className="grid grid-cols-2 gap-y-5 gap-x-8 text-sm sm:text-base md:text-lg mt-5">
              <Link href={teamItems[1].href} className="hover:text-yellow transition-colors w-fit">{teamItems[1].label}</Link>
              <Link href={teamItems[2].href} className="hover:text-yellow transition-colors w-fit">{teamItems[2].label}</Link>
              <Link href={teamItems[3].href} className="hover:text-yellow transition-colors w-fit">{teamItems[3].label}</Link>
              <Link href={teamItems[4].href} className="hover:text-yellow transition-colors w-fit">{teamItems[4].label}</Link>
            </div>

            <div className="hidden lg:flex absolute bottom-0 right-0 gap-6">
              <SocialIcons />
            </div>
          </div> */}
        </div>

        <div className="flex flex-col items-center justify-center pt-8 relative">
          <div className="flex lg:hidden gap-8 mb-8">
            {/* <SocialIcons /> */}
          </div>
          <p className="text-sm tracking-wider font-light">
            &copy; 2026 iGEM - Waseda.
          </p>
        </div>

      </div>
    </footer>
  );
}