"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { ChevronDownIcon } from "./Icons";
import { FAQS } from "@/lib/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-surface py-20 sm:pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Frequently asked"
          title="Questions we hear from operators"
          intro="Can't find what you're after? Message us on WhatsApp and we'll answer directly."
        />

        <div className="mt-10 max-w-3xl divide-y divide-hairline border-t border-b border-hairline">
          {FAQS.map((faq, i) => {
            const isOpen = i === openIndex;
            return (
              <div key={faq.question} className="py-5">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full cursor-pointer items-start justify-between gap-4 text-left font-display text-base font-bold text-heading sm:text-lg"
                >
                  {faq.question}
                  <ChevronDownIcon
                    className={`mt-0.5 h-5 w-5 shrink-0 text-brand-700 transition-transform dark:text-accent-400 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-3 pr-9 text-sm leading-relaxed text-body sm:text-base">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
