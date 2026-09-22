import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { MenuIcon, CloseIcon, SunIcon, MoonIcon } from "./icons";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-paper/90 dark:bg-ink/90 backdrop-blur border-b border-ink/10 dark:border-paper/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between" aria-label="Primary">
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-tight"
          onClick={handleLinkClick}
        >
          Khadija Saeed
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-ink/75 transition-colors hover:text-accent dark:text-paper/75 dark:hover:text-accent-light"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="rounded-md p-2 text-ink/70 transition-colors hover:bg-ink/5 hover:text-ink dark:text-paper/70 dark:hover:bg-paper/10 dark:hover:text-paper"
          >
            {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
          <a
            href="#contact"
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-accent-dark"
          >
            Let's Work Together
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="rounded-md p-2 text-ink/70 dark:text-paper/70"
          >
            {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="rounded-md p-2 text-ink/70 dark:text-paper/70"
          >
            {isOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-b border-ink/10 bg-paper transition-[max-height] duration-300 dark:border-paper/10 dark:bg-ink md:hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="section-shell flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="block rounded-md px-3 py-2.5 text-base text-ink/85 hover:bg-ink/5 dark:text-paper/85 dark:hover:bg-paper/10"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="block rounded-md bg-accent px-3 py-2.5 text-center text-sm font-medium text-paper"
            >
              Let's Work Together
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
