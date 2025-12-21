import React from "react";
import { TiMinus, TiPlus } from "react-icons/ti";
import image from "/ConsultationImage.svg";
import Button from "../../ui/Button";

interface Faq {
  id: number;
  question: string;
  answer: string;
}

const faqs: Faq[] = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We provide custom web/app development, cloud solutions, UX/UI design, and more.",
  },
  {
    id: 2,
    question: "How do I know if this is right for my business?",
    answer:
      "Book a free consult — we'll assess your goals and recommend the right approach.",
  },
  {
    id: 3,
    question: "How much does a project cost?",
    answer:
      "Every project is different. Let's talk about your needs to get a tailored estimate.",
  },
  {
    id: 4,
    question: "How long does it take?",
    answer:
      "Depends on scope — but we always prioritize quality and deadlines.",
  },
  {
    id: 5,
    question: "Can I start with a small project first?",
    answer: "Absolutely. We often begin with MVPs or pilot projects.",
  },
];

const StartHere = () => {
  const [activeId, setActiveId] = React.useState<number | null>(null);

  const toggleMenu = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="w-98.25 md:w-full md:max-w-360 md:py-20 md:px-30 md:gap-16 flex flex-col items-center px-4 py-10">
      <div className="flex flex-col gap-4 pb-5 md:flex-row md:justify-between md:w-full md:items-end">
        <h1 className="font-bold text-[28px]/[38px] md:text-[40px]/[56px] w-82.75 tracking-[-0.02em] ">
          Need Help? Start Here.
        </h1>
        <p className="font-medium text-[14px]/[28px] md:text-[18px]/[32px] md:w-61.25 text-neutral-400 ">
          Everything you need to know — all in one place.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:w-full md:justify-between md:gap-18.25">
        <div>
          {faqs.map(({ id, question, answer }) => (
            <div
              key={id}
              className="border-t border-neutral-800 flex flex-col md:max-w-199.5 gap-4 py-7 w-full"
            >
              <div className="flex flex-row items-start justify-between">
                <p className="font-bold text-[18px]/[32px] md:text-[24px]/[36px] ">
                  {question}
                </p>
                <div
                  className="w-6 flex items-center justify-center"
                  onClick={() => toggleMenu(id)}
                >
                  {activeId === id ? (
                    <TiMinus className="w-6 h-6" />
                  ) : (
                    <TiPlus className="w-6 h-6" />
                  )}
                </div>
              </div>

              {activeId === id && (
                <p className="font-medium text-[14px]/[28px] md:text-[20px]/[34px]  text-neutral-400 ">
                  {answer}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="w-90.25 h-90.25 rounded-2xl flex flex-col bg-[#CC4E32] gap-4 p-5 md:w-82.25 md:h-[453.38px] md:gap-6 md:p-6 ">
          <div className="flex flex-col gap-1 text-white">
            <p className="font-bold text-[28px]/[38px] md:text-[30px]/[44px] tracking-[-0.02em] ">
              Let's talk it through
            </p>
            <p className="font-semibold text-[14px]/[28px] md:text-[18px]/[32px] ">
              book a free consultation with our team.
            </p>
          </div>
          <img
            src={image}
            alt="Consultation_image"
            className="rounded-2xl w-80.25 h-[175.21px] md:w-70.25 "
          />
          <Button className="w-full h-11 p-2 font-bold text-[16px]/[30px] dark:text-black dark:bg-white text-white bg-black rounded-full inset-shadow-[4px_4px_4px_rgba(255,255,255,0.25)] cursor-pointer ">
            Free Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StartHere;
