import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

interface Step {
  id: number;
  title: string;
  desc: string;
}

const ProcessSteps: Step[] = [
  {
    id: 1,
    title: "Discovery & Consultation",
    desc: "Understand Your Needs & Goals",
  },
  {
    id: 2,
    title: "Planning & Strategy",
    desc: "Build a Clear, Scalable Roadmap",
  },
  { id: 3, title: "Design & Prototyping", desc: "Craft UX That Converts" },
  {
    id: 4,
    title: "Development & Implementation",
    desc: "Deliver With Speed & Precision",
  },
  {
    id: 5,
    title: "Testing & Optimization",
    desc: "Ensure Quality at Every Step",
  },
  {
    id: 6,
    title: "Launch & Growth",
    desc: "Scale, Measure & Improve Continuously",
  },
];

const OurProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const toggleStep = (id: number) => {
    setActiveStep(activeStep === id ? null : id);
  };

  return (
    <div className="w-full py-10 px-4 flex flex-col gap-6 lg:py-20 lg:px-35 md:gap-16 items-center">
      {/* Header */}
      <div className="text-center flex flex-col gap-2 md:gap-2.75">
        <h1 className="text-[28px]/[38px] md:text-[40px]/[56px] tracking-[-0.02em] font-bold">
          Our Process
        </h1>
        <p className="text-neutral-400 text-[14px]/[28px] md:text-[18px]/[32px] font-medium">
          Clear steps. Smart execution. Results you can count on.
        </p>
      </div>

      <div className="relative mt-10 w-full max-w-360">
        {/* Garis Vertikal */}
        <div className="absolute left-5.5 md:left-1/2 md:-translate-x-1/2 top-9 bottom-9 w-px bg-neutral-800 z-0" />

        <div className="flex flex-col gap-4">
          {ProcessSteps.map((step, index) => {
            const isEven = index % 2 !== 0;
            const isOpen = activeStep === step.id;

            return (
              <div
                key={step.id}
                className={`relative z-10 flex items-center w-full ${
                  isEven ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                {/* SISI KARTU */}
                <div
                  className={`flex-1 md:flex-none md:w-[45%] ${
                    isEven ? "pl-14 md:pl-0 md:pr-10" : "pl-14 md:pl-10"
                  }`}
                >
                  <div
                    onClick={() => toggleStep(step.id)}
                    className={`group p-4 md:p-6 rounded-2xl flex flex-col border border-[#DEDCDC] bg-[#FAFAFA] dark:border-neutral-900 cursor-pointer dark:bg-neutral-950 transition-all duration-300 ${
                      isOpen ? "shadow-[0_0_15px_rgba(100,10,10,0.6)]" : ""
                    }`}
                  >
                    <div className="flex justify-between items-center gap-4">
                      <h3 className="font-bold text-[16px]/[30px] md:text-[20px]/[34px] tracking-[-0.02em] ">
                        {step.title}
                      </h3>
                      <FaAngleDown
                        className={`w-6 h-6 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "max-h-40 opacity-100 mt-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="font-medium text-[14px]/[28px] md:text-[16px]/[30px] text-neutral-400">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* LINGKARAN NOMOR */}
                <div className="absolute left-0 md:relative md:left-auto flex items-center justify-center w-10 md:w-[10%]">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-[12px] md:text-[16px] text-white bg-[#FF5733] transition-all duration-300 ${
                      isOpen ? "shadow-[0_0_15px_rgba(255,87,51,0.6)]" : ""
                    }`}
                  >
                    {step.id}
                  </div>
                </div>

                {/* RUANG KOSONG (Desktop) */}
                <div className="hidden md:block md:w-[45%]" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
