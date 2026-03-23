"use client";

import ScrollReveal from "./scroll-reveal";
import { PartnersB } from "../common/partners";
import { HomePartnership, Media } from "@/payload-types";
import HighlightedTitle from "../common/hilight-text";
import Link from "next/link";

interface SpotlightProps {
  data: HomePartnership
}

const Partnerships: React.FC<SpotlightProps> = ({ data }) => {
  if (!data || !data.title) return null;
  return (
    <section id="partners" className="relative py-24 sm:py-32 bg-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-linear-to-r from-primary-light  to-primary px-4 py-1.5 text-sm font-semibold text-white mb-4">
            {data.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            <HighlightedTitle text={data.title} highlight={data.titleTextToHilight as string} />
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {data.description}
          </p>
        </ScrollReveal>

        {/* Partner logos placeholder */}
        <ScrollReveal className="mb-20" delay={0.2}>
          <PartnersB companies={data.companies as Media[]} />
        </ScrollReveal>

        {/* CTA Banner */}
        <ScrollReveal>
          <div className="relative rounded-3xl bg-linear-to-r from-primary-light  to-primary overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl" />
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
                  backgroundSize: "32px 32px",
                }}
              />
            </div>

            <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-white">
                {data.titleTwo}
              </h3>
              <p className="mt-4 text-lg text-purple-200 max-w-2xl mx-auto">
                {data.descriptionTwo}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={data?.href}
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-primary shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  {data?.hrefText}
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link
                  href={data?.hrefTwo}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10"
                >
                  {data?.hrefTwoText}
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Partnerships