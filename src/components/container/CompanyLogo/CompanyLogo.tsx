import Marquee from "react-fast-marquee";
import img from "/CompanylogoProfile/Company logo.svg";
import img1 from "/CompanylogoProfile/Company logo-1.svg";
import img2 from "/CompanylogoProfile/Company logo-2.svg";
import img3 from "/CompanylogoProfile/Company logo-3.svg";
import img4 from "/CompanylogoProfile/Company logo-4.svg";
import img5 from "/CompanylogoProfile/Company logo-5.svg";
import img6 from "/CompanylogoProfile/Company logo-6.svg";
import img7 from "/CompanylogoProfile/Company logo-7.svg";
import img8 from "/CompanylogoProfile/Company logo-8.svg";

const CompanyLogo = () => {
  return (
    <div className="w-full flex flex-col  items-center h-36 lg:h-59 ">
      <p className="font-bold text-[16px]/[30px] md:text-[24px]/[36px] tracking-tight  ">
        Trusted by Global Innovators & Leading Brands
      </p>
      <div className="w-full lg:max-w-360 h-32 md:h-50 dark:block hidden">
        <Marquee pauseOnHover gradient gradientColor="black" gradientWidth={60} className="h-full">
          <img src={img} alt="adobe" className="mx-6 grayscale h-8.5 md:h-12" />
          <img src={img1} alt="upwork" className="mx-6 grayscale h-8.5 md:h-12" />
          <img src={img2} alt="zomm" className="mx-6 grayscale h-8.5 md:h-12" />
          <img src={img3} alt="postman" className="mx-6 grayscale h-8.5 md:h-12" />
          <img src={img4} alt="databricks" className="mx-6 grayscale h-8.5 md:h-12" />
          <img src={img5} alt="airbnb" className="mx-6 grayscale h-8.5 md:h-12" />
          <img src={img6} alt="dropbox" className="mx-6 grayscale h-8.5 md:h-12" />
          <img src={img7} alt="paypal" className="mx-6 grayscale h-8.5 md:h-12" />
          <img src={img8} alt="netflix" className="mx-6 grayscale h-8.5 md:h-12" />
        </Marquee>
      </div>
      <div className="w-98.25 h-32 dark:hidden block md:w-full md:h-50">
        <Marquee pauseOnHover gradient gradientColor="white" gradientWidth={40} className="h-full">
          <img src={img} alt="adobe" className="mx-6 grayscale h-8.5 md:h-12" />
          <img src={img1} alt="upwork" className="mx-6 grayscale h-8.5 md:h-12" />
          <img src={img2} alt="zomm" className="mx-6 grayscale h-8.5 md:h-12" />
          <img src={img3} alt="postman" className="mx-6 grayscale h-8.5 md:h-12" />
          <img src={img4} alt="databricks" className="mx-6 grayscale h-8.5 md:h-12" />
          <img src={img5} alt="airbnb" className="mx-6 grayscale h-8.5 md:h-12" />
          <img src={img6} alt="dropbox" className="mx-6 grayscale h-8.5 md:h-12" />
          <img src={img7} alt="paypal" className="mx-6 grayscale h-8.5 md:h-12" />
          <img src={img8} alt="netflix" className="mx-6 grayscale h-8.5 md:h-12" />
        </Marquee>
      </div>
    </div>
  );
};

export default CompanyLogo;
