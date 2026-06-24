import Link from "next/link";

const links = [
  ["Home", "/"],
  ["Simulators", "/simulators"],
  ["Gallery", "/gallery"],
  ["Specifications", "/specifications"],
  ["Industries", "/industries"],
  ["Quote", "/quote"],
  ["Booking", "/booking"],
  ["Dashboard", "/dashboard"],
  ["Admin", "/admin"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export default function Nav() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4">
        <Link href="/" className="text-lg font-semibold text-zinc-900">
          PSYC Tech Simulators
        </Link>
        <div className="flex flex-wrap gap-3 text-sm">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-zinc-700 hover:text-zinc-950">
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
