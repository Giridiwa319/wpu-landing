import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky inset-0 h-16 top-0 bg-white/80 backdrop-blur w-full border-b flex items-center gap-3 justify-between">
      <a
        href="/"
        aria-label="logo"
        className="font-display font-normal space-x-2 ml-3"
      >
        Web Programming Unpas
      </a>
      <button className="mr-3 md:hidden hover:text-slate-700">
        <Menu />
      </button>
      <nav className="hidden md:flex justify-end space-x-3 items-center mr-4">
        <ul className="items-center flex space-x-2 font-display text-[14px]">
          <li>
            <a href="/" className="font-semibold">
              Beranda
            </a>
          </li>
          <li>
            <a href="#about">Tentang Kami</a>
          </li>
          <li>
            <a href="#testimonial">Testimonial</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <button className="rounded shadow-sm inline-flex p-2 text-white font-display bg-slate-800 hover:bg-slate-950 hover:text-white">
            Get Started
          </button>
        </ul>
      </nav>
    </header>
  );
}
