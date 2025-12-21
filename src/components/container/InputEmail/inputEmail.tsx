import React, { useState } from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { FiCheck } from "react-icons/fi";

interface InputEmailProps {
  onSubmitStatus: (status: "success" | "error") => void;
}

const servicesList = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Cloud Solutions",
  "Software Development",
  "Other",
];

const InputEmail: React.FC<InputEmailProps> = ({ onSubmitStatus }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [services, setServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const isValidName = (value: string) => /^[A-Za-z\s]+$/.test(value);
  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      onSubmitStatus("error");
      return;
    }

    if (!isValidName(name) || !isValidEmail(email)) {
      onSubmitStatus("error");
      return;
    }

    onSubmitStatus("success");
  };

  return (
    <div className="w-98.25 flex flex-col px-4 py-10 md:w-full items-center ">
      <div className="text-center">
        <p className="font-bold text-[28px]/[38px] ">
          Ready to Start? Let's Talk.
        </p>
        <p className="font-medium text-[14px]/[28px] text-neutral-400 ">
          Tell us what you need, and we'll get back to you soon
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-180 flex flex-col gap-6 p-6 md:p-0 text-[14px]/[28px]"
      >
        <Input
          label="Name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          label="Email"
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium ">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            className="w-full min-h-35 resize-none rounded-xl border border-neutral-800 px-4 py-3 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
          />
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-sm font-bold ">Services</span>
          <div className="flex flex-col h-34 flex-wrap gap-9.25">
            {servicesList.map((service) => {
              const checked = services.includes(service);

              return (
                <label
                  key={service}
                  className="flex items-center  gap-3 text-sm cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleService(service)}
                    className="hidden"
                  />

                  <div
                    className={`flex h-4 w-4 items-center justify-center rounded border transition
                  ${
                    checked
                      ? "bg-orange-500 border-orange-500"
                      : "dark:bg-black bg-white border-gray-600"
                  }`}
                  >
                    {checked && <FiCheck className="text-xs" />}
                  </div>

                  {service}
                </label>
              );
            })}
          </div>
        </div>

        <Button
          type="submit"
          className="w-76.25 md:w-180 h-11 flex items-center justify-center bg-[#FF623E] rounded-full cursor-pointer font-bold text-[14px] text-white inset-shadow-[4px_4px_4px_rgba(255,255,255,0.25)] hover:bg-[#fc512b]"
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default InputEmail;
