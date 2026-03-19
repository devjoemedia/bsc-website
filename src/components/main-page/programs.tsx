"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./scroll-reveal";
import { HomeUpcomingProgramsSection, Program as IProgram } from "@/payload-types";
import HighlightedTitle from "../common/hilight-text";
import RichTextRenderer from "../common/rich-text-renderer";
import Link from "next/link";

interface ProgramsProps {
  data: HomeUpcomingProgramsSection,
  programs: IProgram[]
}
const Programs: React.FC<ProgramsProps> = ({ programs, data }) => {
  return (
    <section id="programs" className="relative py-24 sm:py-32 bg-white">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-50 rounded-full blur-3xl -translate-x-1/2 opacity-60" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-linear-to-r from-primary-light  to-primary px-4 py-1.5 text-sm font-semibold text-white mb-4">
            {data.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            <HighlightedTitle text={data.title} highlight={data.titleTextToHilight as string} />
          </h2>
          {data.description && (
            <div className="mt-4 text-lg text-gray-600">
              <RichTextRenderer content={data.description} />
            </div>
          )}
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((program, i) => (
            <ScrollReveal
              key={program.title}
              direction={i === 0 ? "left" : "right"}
              delay={i * 0.15}
            >
              <motion.div
                whileHover={{ y: -6 }}
                className="group flex flex-col relative h-full rounded-3xl bg-white border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden"
              >
                {/* Top gradient bar */}
                <div
                  className={`h-2 bg-linear-to-r from-primary-light to-primary`}
                />

                <div className="p-8 sm:p-10">
                  {/* Badge */}
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-semibold mb-4 bg-amber-100 text-primary-light`}
                  >
                    {program.badge}
                  </span>

                  <h3 className="text-2xl font-bold text-gray-900">
                    {program.title}
                  </h3>
                  <p
                    className={`text-sm font-semibold mt-1 text-amber-600 text-bold`}
                  >
                    {program.cohort}
                  </p>

                  <div className="mt-4 text-gray-600 leading-relaxed">
                    <RichTextRenderer content={program.description} />
                  </div>

                  {/* Highlights */}
                  <ul className="mt-6 space-y-3 mb-10">
                    {program.tracks?.map((item) => (
                      <li
                        key={item.id}
                        className="flex items-start gap-3 text-sm text-gray-600"
                      >
                        <svg
                          className={`h-5 w-5 shrink-0 mt-0.5  text-amber-500 `}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {item.text}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  {/* {program.href && ( */}
                    <Link href={`/programs/${program.id}`} className="mt-auto inline-block">
                      <span
                        className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white bg-linear-to-r from-primary-light to-primary shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-0.5`}
                      >
                        Register here
                        {/* {program.hrefText} */}
                        <svg
                          className="h-4 w-4"
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
                      </span>
                    </Link>
                  {/* )} */}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs