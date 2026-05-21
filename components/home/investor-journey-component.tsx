"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    step_title: "MISA",
    title: "Ministry of investment",
    desc: "Obtain an investment license from the Ministry of Investment in Saudi Arabia (MISA)",
    img: "/working/01 Investment.svg?height=120&width=151",
  },
  {
    step_title: "Commerce",
    title: "Ministry of commerce",
    desc: "Register your company with the Ministry of Commerce and obtain the necessary commercial registration",
    img: "/working/02 Commerce.svg?height=120&width=151",
  },
  {
    step_title: "HR",
    title: "Ministry of Human resource",
    desc: "Issuing the visa of the general manager from the ministry of human resource and social development",
    img: "/working/05 HRSD.svg?height=120&width=151",
  },
  {
    step_title: "GOSI",
    title: "General Organization of Social Insurance (GOSI)",
    desc: "Open your account and activate Nitaqat system from the General organization of social insurance “ GOSI",
    img: "/working/08 GOSI.svg?height=120&width=151",
  },
  {
    step_title: "Zakat",
    title: "ZAKAT, Tax Income and customs Authority",
    desc: "Issuing all the tax certificate from Zakat, tax and customs authority",
    img: "/working/11 Zakat.svg?height=120&width=151",
  },
  {
    step_title: "Platforms",
    title: "Organizational Platforms",
    desc: "Register in all of the Organizational Platforms like Mudad, Muqeem, and Qiwa",
    img: "/working/pl.webp?height=120&width=151",
  },
  {
    step_title: "SPL",
    title: "Saudi Post Local",
    desc: "Register the address from the Saudi Post Local (SPL)",
    img: "/working/14 SPL.svg?height=120&width=151",
  },
  {
    step_title: "MOI",
    title: "Ministry Of Interior",
    desc: "Issuing the residency Iqama from Ministry of interior",
    img: "/working/07 Interior.svg?height=120&width=151",
  },
  {
    step_title: "Bank",
    title: "Bank Account",
    desc: "Open a corporate bank account with a local Saudi bank",
    img: "/working/33 Al-Rajhi.svg?height=120&width=151",
  },
];

export function InvestorJourneyComponent() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const next = () => {
    if (current < steps.length - 1) setCurrent(current + 1);
  };

  const go = (index: number) => {
    setCurrent(index);
  };

  return (
    <section>
      <div className="max-w-330 mx-auto px-4">
        {/* Heading */}
        <div className="flex justify-between items-center flex-wrap gap-2">
          <div>
            <h2 className="text-[1.625rem] font-bold text-teal-700 max-sm:text-2xl leading-tight">
              Investor Journey
            </h2>
            <p className="text-gray-600 mt-1">
              Registration Process and Required Documentation
            </p>
          </div>
        </div>

        {/* Timeline Card */}
        <div className="bg-white rounded-xl p-4 max-sm:px-1 sm:p-6 mt-5">
          <div className="flex flex-row items-start gap-2">
            {/* Progress / Dots */}
            <div className="flex flex-col flex-1 items-center">
              {/* Desktop Timeline */}
              <div className="hidden lg:flex relative justify-between w-full sm:w-[95%] pt-4">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="relative flex flex-col items-center w-full group"
                  >
                    {/* Connector line */}
                    {i < steps.length - 1 && (
                      <div
                        className={`absolute top-[7px] left-1/2 h-[2px] w-full z-0 ${
                          i < current ? "bg-teal-700" : "bg-gray-200"
                        }`}
                      />
                    )}

                    {/* Dot */}
                    <button
                      type="button"
                      className={`z-10 w-4 h-4 rounded-full border-4 flex items-center justify-center transition ${
                        i <= current
                          ? "border-teal-700 bg-teal-700"
                          : "border-teal-700 bg-white hover:bg-gray-50"
                      }`}
                      onClick={() => go(i)}
                      aria-label={`Go to step ${i + 1}: ${step.title}`}
                    >
                      <span className="sr-only">{step.title}</span>
                    </button>

                    {/* Label */}
                    <div className="text-center mt-3 text-[13px] font-semibold text-black">
                      <span>{step.step_title}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Stepper */}
              <div className="flex lg:hidden items-center gap-2 py-4">
                <span className="text-sm font-medium text-teal-700">
                  Step {current + 1} of {steps.length}
                </span>
                <div className="flex gap-1">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => go(i)}
                      className={`w-2 h-2 rounded-full transition ${
                        i <= current ? "bg-teal-700" : "bg-gray-300"
                      }`}
                      aria-label={`Go to step ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Panel Content */}
              <div className="mt-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                  {/* Image */}
                  <div className="mx-auto grid place-items-center">
                    <div className="rounded-lg border p-5 border-gray-200 bg-white">
                      <Image
                        src={steps[current].img}
                        alt={steps[current].title}
                        width={151}
                        height={120}
                        className="max-w-full"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="col-span-1 lg:col-span-2">
                    <div className="flex flex-col gap-3 sm:gap-4">
                      <p className="text-lg font-semibold text-teal-700 leading-[1.6]">
                        Step {current + 1} of {steps.length}
                      </p>
                      <h3 className="text-[16px] font-bold text-black">
                        {steps[current].title}
                      </h3>
                      <p className="leading-[1.75] text-gray-700">
                        {steps[current].desc}
                      </p>

                      {/* Navigation Buttons */}
                      <div className="flex justify-between items-center mt-4">
                        <button
                          type="button"
                          className={`cursor-pointer border border-teal-700 inline-flex items-center justify-center rounded-lg text-sm px-3 py-1.5 gap-2 ${
                            current === 0
                              ? "opacity-40 cursor-not-allowed"
                              : "hover:bg-gray-100"
                          }`}
                          aria-label="Previous step"
                          onClick={prev}
                          disabled={current === 0}
                        >
                          <ChevronUp className="w-5 h-5 -rotate-90" />
                          Previous step
                        </button>

                        <button
                          type="button"
                          className={`cursor-pointer border border-teal-700 inline-flex items-center justify-center rounded-lg text-sm px-3 py-1.5 gap-2 ${
                            current === steps.length - 1
                              ? "opacity-40 cursor-not-allowed"
                              : "hover:bg-gray-100"
                          }`}
                          aria-label="Next step"
                          onClick={next}
                          disabled={current === steps.length - 1}
                        >
                          Next step
                          <ChevronDown className="w-5 h-5 -rotate-90" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
