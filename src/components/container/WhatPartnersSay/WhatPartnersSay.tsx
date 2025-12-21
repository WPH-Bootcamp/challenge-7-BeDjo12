import partner1 from "/WhatPartnersSay/partner1.svg";
import partner2 from "/WhatPartnersSay/partner2.svg";
import partner3 from "/WhatPartnersSay/partner3.svg";
import rating from "/WhatPartnersSay/Rating.svg";
import quote from "/WhatPartnersSay/tdesign_quote.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const testimoni = [
  {
    id: 1,
    description:
      "“The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.”",
    name: "Sarah Tan",
    position: "Product Manager at Finovate",
    image: partner1,
  },
  {
    id: 2,
    description:
      "“The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.”",
    name: "Emily Chen",
    position: "Marketing Head at Tech Solutions",
    image: partner3,
  },
  {
    id: 3,
    description:
      "“Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.”",
    name: "John Lee",
    position: "Creative Director at Innovate Corp",
    image: partner2,
  },
];

const WhatPartnersSay = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    cssEase: "ease-in-out",
    slidesToShow: 1,
    variableWidth: true,
    centerMode: true,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 768, // 📱 Mobile
        settings: {
          centerMode: false,
          variableWidth: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className=" w-full h-145.75 md:h-180.75 lg:p-20 lg:gap-20 flex flex-col gap-12 py-10 items-center overflow-hidden ">
      <div className="text-center flex flex-col gap-2.75 ">
        <h1 className="font-bold text-[28px]/[38px] md:text-[40px]/[56px] tracking-[-0.02em] ">
          What Partners Say About Working With Us
        </h1>
        <p className="font-medium text-[14px]/[28px] md:text-[18px]/[32px] text-neutral-400 ">
          Trusted voices. Real experiences. Proven results.
        </p>
      </div>
      <div className="w-full relative ">
        <div className="slider-container h-100 overflow-hidden absolute -top-6">
          <div className="md:block hidden absolute left-0 top-0 w-50 h-89 bg-linear-to-r from-white to-[rgba(255,255,255,0)] dark:from-black dark:to-[rgba(0,0,0,0)] z-10"></div>
          <div className="md:block hidden absolute right-0 top-0 w-95 h-89 bg-linear-to-l from-white to-[rgba(255,255,255,0)] dark:from-black dark:to-[rgba(0,0,0,0)] z-10"></div>
          <Slider {...settings}>
            {testimoni.map(({ id, description, name, position, image }) => {
              return (
                <div key={id} className="h-90.25 py-6">
                  <div className="border justify-start md:w-148.5 md:h-73 md:px-6 md:pt-6 md:pb-8 md:gap-6 testimonial-card relative flex mx-auto flex-col gap-4 px-4 pt-4 pb-12 w-90.25 h-70.25 items-center rounded-2xl bg-[#FAFAFA] border-[#DEDCDC] dark:bg-neutral-950 dark:border-neutral-900">
                    <img
                      src={quote}
                      alt=""
                      className="absolute w-16 h-16 -top-8.5 left-4"
                    />
                    <div className="flex flex-col items-center gap-3 w-full">
                      <img src={rating} alt="" className="w-34 md:w-34" />
                      <p className="font-semibold text-[14px]/[28px] md:text-[18px]/[32px] text-center ">
                        {description}
                      </p>
                    </div>
                    <div className="w-full text-center">
                      <p className="font-semibold text-[14px]/[28px] md:text-[18px]/[32px] ">
                        {name}
                      </p>
                      <p className="font-semibold text-[14px]/[28px] md:text-[18px]/[32px] text-[#FF623E]">
                        {position}
                      </p>
                    </div>
                    <img
                      src={image}
                      alt=""
                      className="absolute md:w-18.75 md:top-64 top-61.5 md:left-66 left-[150.5px] w-15"
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default WhatPartnersSay;
