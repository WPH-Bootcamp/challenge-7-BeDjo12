import Button from "../../ui/Button";

const Hero = () => {
  return (
    <div className="absolute flex w-full justify-center top-31.25 md:top-57.5 lg:left-35 md:left-6 md:w-163.25 z-10">
      <div className="flex flex-col w-90.25 md:w-full gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-[36px] md:text-[56px] tracking-[-0.02em]">
            Your Tech Partner for{" "}
            <span className="text-[#FF6C37]">Smarter Growth</span>
          </h1>
          <p className="font-semibold text-[16px] md:text-[20px]">
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
          </p>
        </div>
        <Button className=" w-full h-11 bg-[#FF623E] rounded-full cursor-pointer font-bold text-[14px] text-white inset-shadow-[4px_4px_4px_rgba(255,255,255,0.25)] hover:bg-[#fc512b] md:w-50 md:h-12">
          Let's Talk
        </Button>
      </div>
    </div>
  );
};

export default Hero;
