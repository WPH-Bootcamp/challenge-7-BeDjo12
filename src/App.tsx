import { useState } from "react";
import Hero from "./components/container/HeroSection";
import Header from "./components/container/Header/Header";
import HeroImageLight from "/Hero_Light.svg";
import HeroImageDark from "/Hero_Dark.svg";
import CompanyLogo from "./components/container/CompanyLogo/CompanyLogo";
import DriveResults from "./components/container/DriveResults/DriveResults";
import OurProcess from "./components/container/OurProcess/OurProcess";
import ITSolutions from "./components/container/ITSolutions/ITSolutions";
import IndustryTabs from "./components/container/IndustryTabs/IndustryTabs";
import OurProjects from "./components/container/OurProjects/OurProjects";
import WhatPartnersSay from "./components/container/WhatPartnersSay/WhatPartnersSay";
import StartHere from "./components/container/StartHere/StartHere";
import InputEmail from "./components/container/InputEmail/inputEmail";
import StatusPopup from "./components/container/Popup/StatusPopup";
import Footer from "./components/container/Footer/Footer";

function App() {
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  return (
    <>
      <Header />
      <Hero />
      <div className="relative flex justify-center top-102 w-full md:top-0 md:justify-end">
        <div className="relative dark:hidden h-97.75 w-97.75  md:h-186.75 md:w-186.75">
          <div className="bg-linear-to-b from-white to-transparent w-full h-[25%] absolute"></div>
          <div className="absolute w-[189.47px] h-[405.66px] rotate-180deg opacity-100 left-[-75.37px] bg-[linear-gradient(-269.44deg,#fff_36.1%,rgba(255,255,255,0)_89.71%)]  md:h-[766.02px] md:w-[361.99px] md:-left-35"></div>
          <div className="bg-[linear-gradient(269.44deg,#fff_36.1%,rgba(255,255,255,0)_89.71%)] absolute w-[189.47px] h-[400.95px] rotate-90 opacity-100 top-41.25 left-[99.95px] md:top-79 md:left-45 md:h-[766.02px] md:w-[361.99px]"></div>
          <img src={HeroImageLight} alt="HeroImage" className="h-full" />
        </div>
        <div className="relative hidden dark:block h-97.75 w-97.75 md:w-186.75 md:h-186.75">
          <div className="absolute w-[189.47px] h-[405.66px] rotate-180deg opacity-100 left-[-75.37px] bg-[linear-gradient(-269.44deg,#000000_36.1%,rgba(0,0,0,0)_89.71%)] md:h-[766.02px] md:w-[361.99px] md:-left-35"></div>
          <div className="bg-[linear-gradient(269.44deg,#000000_36.1%,rgba(0,0,0,0)_89.71%)] absolute w-[189.47px] h-[400.95px] rotate-90 opacity-100 top-41.25 left-[99.95px] md:top-79 md:left-45 md:h-[766.02px] md:w-[361.99px]"></div>
          <img src={HeroImageDark} alt="HeroImage" className="h-full" />
        </div>
      </div>
      <div
        id="MainFrame"
        className="absolute w-full flex flex-col items-center top-210.75"
      >
        <CompanyLogo />
        <DriveResults />
        <OurProcess />
        <ITSolutions />
        <IndustryTabs />
        <OurProjects />
        <WhatPartnersSay />
        <StartHere />
        <InputEmail onSubmitStatus={setStatus} />
        <Footer />
      </div>
      <StatusPopup
        status={status ?? "success"}
        isOpen={status !== null}
        onClose={() => setStatus(null)}
      />
    </>
  );
}

export default App;
