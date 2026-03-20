'use client'

import Link from 'next/link'
import ScrollReveal from '../main-page/scroll-reveal'

const footerLinks = {
  'Get In Touch': [
    { label: 'Donate', href: '/donate' },
    { label: 'Volunteer', href: '/volunteer' },
    { label: 'Mentorship', href: '/programs' },
  ],
  'About Us': [
    { label: 'Community', href: '/about' },
    { label: 'Team', href: '/about' },
    { label: 'Our Story', href: '/about' },
  ],
  Programs: [
    { label: 'CodeBridge Fellowship', href: '/programs' },
    { label: 'Mentorship Program', href: '/programs' },
    { label: 'Partnerships', href: '/partnership' },
  ],
}

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-gray-100 text-primary">
      <div className="mx-auto max-w-7xl  pt-20 ">
        <ScrollReveal className="px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Brand column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-primary-light to-primary text-white font-bold text-lg">
                  B
                </div>
                <span className="text-xl font-bold">Because She Can</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-sm">
                Building Africa&apos;s biggest pipeline of Women in Technology. Empowering women to
                succeed in their chosen areas of Tech.
              </p>

              {/* Contact info */}
              <div className="mt-6 space-y-3">
                <a
                  href="mailto:info@becauseshecan.tech"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  info@becauseshecan.tech
                </a>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  (+233) 50 690 0543
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  AD7 Community 11 Tema
                </div>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary font-bold mb-4">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom bar */}
      <div className="bg-linear-to-r from-primary-light to-primary w-full ">
        <div className="mt-16 py-3 border-t px-4 sm:px-6 lg:px-8 border-primary bg-linear-to-r from-primary-light w-full to-primary flex flex-col sm:flex-row items-center justify-between gap-4 mx-auto max-w-7xl">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Because She Can. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Social icons */}
            {[
              {
                label: 'Twitter',
                path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
              },
              {
                label: 'LinkedIn',
                path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z',
              },
              {
                label: 'Instagram',
                path: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z',
              },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all hover:bg-purple-600 hover:text-white"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
