import icon1 from "/IconITSolutions/Icon-1.svg";
import icon2 from "/IconITSolutions/Icon-2.svg";
import icon3 from "/IconITSolutions/Icon-3.svg";
import icon4 from "/IconITSolutions/Icon-4.svg";
import icon5 from "/IconITSolutions/Icon-5.svg";
import icon6 from "/IconITSolutions/Icon-6.svg";
import icon7 from "/IconITSolutions/Icon-7.svg";
import icon8 from "/IconITSolutions/Icon-8.svg";
import icon9 from "/IconITSolutions/Icon-9.svg";

const box = [
  {
    id: 1,
    icon: icon1,
    title: "Web Development",
    disc: "Build fast, scalable, and SEO-friendly websites.",
  },
  {
    id: 2,
    icon: icon2,
    title: "Mobile App Development",
    disc: "Native & cross-platform apps tailored to user needs.",
  },
  {
    id: 3,
    icon: icon3,
    title: "UI/UX Design",
    disc: "Delight users with intuitive and beautiful interfaces",
  },
  {
    id: 4,
    icon: icon4,
    title: "Cloud Solutions",
    disc: "Secure and flexible cloud infrastructure for your growth.",
  },
  {
    id: 5,
    icon: icon5,
    title: "Software Development",
    disc: "Custom solutions built around your business logic.",
  },
  {
    id: 6,
    icon: icon6,
    title: "IT Infrastructure",
    disc: "Scale your backend with reliable tech foundations.",
  },
  {
    id: 7,
    icon: icon7,
    title: "Cybersecurity Services",
    disc: "Stay protected with enterprise-grade security.",
  },
  {
    id: 8,
    icon: icon8,
    title: "QA Solutions",
    disc: "Ensure performance with rigorous testing frameworks.",
  },
  {
    id: 9,
    icon: icon9,
    title: "IT Consulting & Support",
    disc: "Make smarter tech decisions with expert guidance.",
  },
];

const ITSolutions = () => {
  return (
    <div className="flex flex-col px-4 py-10 gap-10 w-full lg:px-35 lg:my-20 lg:gap-16 items-center">
      <div className="flex flex-col gap-2.75 text-center">
        <h1 className="font-semibold text-[28px]/[38px] md:text-[40px]/[56px] ">
          Smart IT Solutions That Grow With You
        </h1>
        <p className="font-medium text-neutral-400 text-[14px]/[28px] md:text-[18px]/[32px]  ">
          Tailored tech to boost efficiency, security, and results.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap w-full max-w-360 justify-center items-center gap-10">
        {box.map(({ id, icon, title, disc }) => {
          return (
            <div
              key={id}
              className="relative flex flex-col w-90.25 h-32.5 gap-5 px-5 pt-12 pb-5 border bg-[#FAFAFA] border-[#DEDCDC] dark:bg-neutral-950 dark:border-neutral-900 rounded-2xl justify-center md:w-93.25 md:h-45.5 md:pt-16"
            >
              <img
                src={icon}
                alt="icon"
                className="absolute w-16 h-16 md:w-20 md:h-20 left-5 -top-5.5 md:-top-8"
              />
              <div className="flex flex-col gap-1">
                <h1 className="font-bold text-[16px]/[30px] md:text-[20px]/[34px] tracking-[-0.02em] ">
                  {title}
                </h1>
                <p className="font-medium text-[14px]/[28px] md:text-[16px]/[30px] text-neutral-400">
                  {disc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ITSolutions;
