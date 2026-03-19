"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Get involved", href: "/get-involved" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isOpen) {
        setScrolled(window.scrollY > 20);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) setScrolled(true);
    if (!isOpen) setScrolled(window.scrollY > 20);
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-lg shadow-purple-900/5"
          : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 md:h-10 w-9 md:w-10 items-center justify-center rounded-xl bg-linear-to-br from-primary-light to-primary text-white font-bold text-sm md:text-lg">
              B
            </div>
            <span
              className={`text-lg md:text-xl font-bold transition-colors duration-300 ${scrolled ? "text-purple-900" : "text-white"
                }`}
            >
              BSC
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary-light hover:text-primary ${scrolled ? "text-gray-700" : "text-white/90 hover:text-white"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://forms.gle/nVYxCLdGhBKvuxQ96"
              target="_blank"
              className="ml-4 inline-flex items-center rounded-full bg-linear-to-r from-primary-light to-primary px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-0.5"
            >
              Join Community
            </Link>
            <Link
              href="/donate"
              className="ml-4 inline-flex items-center rounded-full bg-linear-to-r from-primary-light to-primary px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-0.5"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 flex h-10 w-10 items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className={`block h-0.5 w-6 rounded-full transition-colors ${isOpen || scrolled ? "bg-purple-900" : "bg-white"
                  }`}
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className={`block h-0.5 w-6 rounded-full transition-colors ${isOpen || scrolled ? "bg-purple-900" : "bg-white"
                  }`}
              />
              <motion.span
                animate={
                  isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
                }
                className={`block h-0.5 w-6 rounded-full transition-colors ${isOpen || scrolled ? "bg-purple-900" : "bg-white"
                  }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xld border-t border-purple-100"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-800 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <Link
                href="https://forms.gle/nVYxCLdGhBKvuxQ96"
                target="_blank"
                onClick={() => setIsOpen(false)}
                className="mt-4 block rounded-full bg-linear-to-r from-primary to-primary px-6 py-3 text-center text-sm font-semibold text-white"
              >
                Join Community
              </Link>
              <Link
                href="/danate"
                onClick={() => setIsOpen(false)}
                className="mt-4 block rounded-full bg-linear-to-r from-primary to-primary px-6 py-3 text-center text-sm font-semibold text-white"
              >
                Donate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
