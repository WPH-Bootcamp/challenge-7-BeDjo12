import { useState } from "react";
import image1 from "/IndustryTab/fintech.svg";
import image2 from "/IndustryTab/ecommerce.svg";
import image3 from "/IndustryTab/healthcare.svg";

// 1. Definisikan tipe data untuk keamanan TypeScript
interface Industry {
  id: string;
  name: string;
  description: string;
  image: string;
}

const industries: Industry[] = [
  {
    id: "fintech",
    name: "Fintech",
    description:
      "We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.",
    image: image1, // Ganti dengan path gambar lokal Anda
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    description:
      "Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.",
    image: image2,
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description:
      "Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.",
    image: image3,
  },
];

const IndustryTabs = () => {
  const [activeTab, setActiveTab] = useState<string>("fintech");
  const currentIndustry = industries.find((item) => item.id === activeTab);

  return (
    <div className="w-full flex flex-col gap-6 px-4 py-10 items-center lg:px-35 lg:py-20 md:gap-16">
      <div className="flex flex-col md:max-w-290 w-90.25 gap-2.75 md:w-full">
        <h1 className="font-bold text-[32px]/[42px] md:text-[40px]/[56px] tracking-[-0.02em] ">
          Built for Your Industry
        </h1>
        <p className="font-medium text-[14px]/[28px] md:text-[18px]/[32px] text-neutral-400">
          We've helped companies across industries launch smarter, faster, and
          more securely.
        </p>
      </div>
      <div className="w-90.25 flex flex-col gap-6 md:w-full md:max-w-290 md:gap-16 md:flex-row md:justify-between">
        {/* BAGIAN LIST NAVIGASI (Tabs) */}
        <div className="flex flex-col gap-3 md:gap-6 md:min-w-[256px] ">
          {industries.map((industry) => (
            <div
              key={industry.id}
              onClick={() => setActiveTab(industry.id)}
              className="group cursor-pointer flex items-center gap-4"
            >
              {/* Garis Indikator Samping */}
              <div
                className={`w-1 h-6 md:h-8 rounded-full transition-all duration-300 ${
                  activeTab === industry.id ? "bg-[#FF5733]" : "bg-neutral-600"
                }`}
              />

              {/* Nama Industri */}
              <h2
                className={`text-[16px]/[30px] md:text-[20px]/[34px] font-bold transition-all duration-300 ${
                  activeTab === industry.id
                    ? ""
                    : "text-neutral-600 group-hover:text-neutral-400"
                }`}
              >
                {industry.name}
              </h2>
            </div>
          ))}
        </div>

        {/* BAGIAN KONTEN (Deskripsi & Gambar) */}
        <div className="flex flex-col w-full md:max-w-210 gap-5 transition-opacity duration-500">
          {/* Deskripsi */}
          <p className="font-medium text-[14px]/[28px] md:text-[18px]/[32px] ">
            {currentIndustry?.description}
          </p>

          <div className="relative w-90.25 h-50 md:max-w-210 md:w-full md:h-full md:max-h-87.75 rounded-xl overflow-hidden">
            <img
              src={currentIndustry?.image}
              alt={currentIndustry?.name}
              className="-top-2.75 -left-5 object-cover transition-all duration-700 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryTabs;
