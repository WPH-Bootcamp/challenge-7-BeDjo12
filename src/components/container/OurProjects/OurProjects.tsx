import portofolio1 from "/ourprojects/portofolio1.svg";
import portofolio2 from "/ourprojects/portofolio2.svg";
import portofolio3 from "/ourprojects/portofolio3.svg";

const portofolio = [
  {
    id: 1,
    image: portofolio1,
    name: "Portofolio 1",
  },
  {
    id: 2,
    image: portofolio2,
    name: "Portofolio 3",
  },
  {
    id: 3,
    image: portofolio3,
    name: "Portofolio 3",
  },
];

const OurProjects = () => {
  return (
    <div className="flex flex-col w-full lg:px-35 lg:py-20 md:gap-16 items-center gap-6 px-4 py-10">
      <div className="w-full text-center flex flex-col gap-2.75">
        <h1 className="font-bold text-[28px] md:text-[40px]/[56px] tracking-[-0.02em] ">
          From Vision to Launch! Projects We're Proud Of
        </h1>
        <p className="font-medium text-[14px]/[28px] md:text-[18px]/[32px] text-neutral-400 ">
          Take a closer look at our recent work powering startups, enterprises,
          and everything in between.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:w-full md:justify-between items-center w-90.25 gap-5">
        {portofolio.map(({ id, image, name }) => {
          return (
            <div
              key={id}
              className="w-90.25 md:w-93.25 flex flex-col gap-2 items-start "
            >
              <img
                src={image}
                alt="portofolio"
                className="w-90.25 md:w-full rounded-2xl"
              />
              <p className="text-[#FF623E] text-[14px] md:text-[16px] font-medium ">
                Landing Page
              </p>
              <p className="text-[16px] md:text-[20px] font-bold ">{name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurProjects;
