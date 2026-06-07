import Link from 'next/link';
import { pages } from '@/components/navigationName';

export default function NavBar() {
  const listClassName = "text-gray-700 text-xl xl:text-2xl font-bold transition-colors hover:text-red" // ホバー時の色は#b94047(フッターの色とはちょっと違う)

  return (
    <nav className="hidden lg:flex space-x-6 xl:space-x-8">
      <Link href={pages[1].href} className={listClassName}>
        {pages[1].label}
      </Link>
      <Link href={pages[2].href} className={listClassName}>
        {pages[2].label}
      </Link>
      <Link href={pages[3].href} className={listClassName}>
        {pages[3].label}
      </Link>
      <Link href={pages[4].href} className={listClassName}>
        {pages[4].label}
      </Link>
    </nav>
  );
}