const Results = [
  {
    Id: 1,
    Title1: "50+",
    Title2: "Projects Delivered",
  },
  {
    Id: 2,
    Title1: "5+",
    Title2: "Years of Experience",
  },
  {
    Id: 3,
    Title1: "10+",
    Title2: "Industry Awards Won",
  },
  {
    Id: 4,
    Title1: "100%",
    Title2: "Client Satisfaction Rate",
  },
];

const DriveResults = () => {
  return (
    <div className="flex flex-col items-center text-center w-full px-4 py-20 gap-6 md:gap-16 md:py-20 md:px-35">
      <div className="flex flex-col gap-2.75">
        <h1 className="text-[28px]/[38px] font-bold tracking-[-0.02em] md:text-[40px]/[56px] ">
          End-to-End IT Solutions That Drive Results
        </h1>
        <p className="text-[14px]/[28px] md:text-[18px]/[32px] font-medium text-neutral-400 ">
          From strategy to execution, we deliver solutions that grow your
          business.
        </p>
      </div>
      <div className="w-91 gap-4 flex flex-wrap justify-center md:w-xl lg:w-full">
        {Results.map(({ Id, Title1, Title2 }) => {
          return (
            <div
              key={Id}
              className="w-[172.5px] h-[172.5px] md:w-68.75 md:h-68.75 bg-[#fafafa] dark:bg-neutral-950 border border-[#DEDCDC] dark:border-neutral-900 rounded-full flex flex-col p-4 gap-1.5 justify-center"
            >
              <div className="text-[#FF623E] text-[36px]/[44px] md:text-[48px]/[60px] tracking-[-0.02em] font-bold">
                {Title1}
              </div>
              <div className="text-[14px]/[28px] md:text-[20px]/[34px]">
                {Title2}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DriveResults;
