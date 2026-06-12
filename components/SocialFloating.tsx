import Link from "next/link";

const links = [
  {
    label: "Spotify",
    href: "#",
    color: "hover:text-[#1DB954]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.516 17.308a.75.75 0 01-1.032.25c-2.826-1.727-6.38-2.117-10.57-1.16a.75.75 0 01-.334-1.463c4.585-1.047 8.52-.596 11.687 1.34a.75.75 0 01.249 1.033zm1.472-3.276a.937.937 0 01-1.288.309c-3.233-1.987-8.162-2.563-11.986-1.402a.937.937 0 01-.543-1.79c4.37-1.326 9.8-.683 13.508 1.596a.937.937 0 01.309 1.287zm.126-3.409C15.24 8.39 8.534 8.172 4.988 9.253a1.125 1.125 0 01-.653-2.151c4.116-1.25 10.957-1.008 15.282 1.533a1.125 1.125 0 01-1.503 1.988z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    color: "hover:text-[#FF0000]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Apple Podcasts",
    href: "#",
    color: "hover:text-[#B150E2]",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18.364 18.364a9 9 0 1 0 -12.728 0" />
        <path d="M11.766 22h.468a2 2 0 0 0 1.985 -1.752l.5 -4a2 2 0 0 0 -1.985 -2.248h-1.468a2 2 0 0 0 -1.985 2.248l.5 4a2 2 0 0 0 1.985 1.752" />
        <path d="M10 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      </svg>
    ),
  },
];

export default function SocialFloating() {
  return (
    <div className="hidden lg:flex fixed bottom-8 right-0 z-50 flex-col bg-customblack overflow-hidden">
      {links.map(({ label, href, color, icon }) => (
        <Link
          key={label}
          href={href}
          aria-label={label}
          className={`flex items-center justify-center w-12 h-12 text-white transition-colors ${color}`}
        >
          {icon}
        </Link>
      ))}
    </div>
  );
}
