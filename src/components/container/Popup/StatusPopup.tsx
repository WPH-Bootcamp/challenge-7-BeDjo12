import Modal from "./Modal";
import succsessmsg from "/Popup/successmsg.svg";
import wrongmsg from "/Popup/wrongmsg.svg";

interface StatusPopupProps {
  status: "success" | "error";
  isOpen: boolean;
  onClose: () => void;
}

const StatusPopup = ({ status, isOpen, onClose }: StatusPopupProps) => {
  const isSuccess = status === "success";

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="top-59.75 flex flex-col p-0 w-88.25 h-93.5 md:w-129.5 md:h-119.75 rounded-2xl border dark:border-neutral-800 border-[#DFDFDF] bg-[#FAFAFA] dark:bg-neutral-950 text-center ">
        <div className="flex items-center w-full h-40 md:h-56.25 justify-center">
          {isSuccess ? (
            <img src={succsessmsg} alt="Succsess" className="w-35 md:w-57" />
          ) : (
            <img src={wrongmsg} alt="Wrong" className="w-35 md:w-57" />
          )}
        </div>
        <div className="flex flex-col items-center justify-between gap-4  pt-6 px-6 pb-10 bg-white dark:bg-black rounded-b-2xl w-full h-53.5 md:h-63.5 md:gap-8 md:px-8 md:pt-8 md:pb-10 ">
          <div className="flex flex-col gap-0.5">
            <h2 className="font-bold text-[18px]/[32px] md:text-[20px]/[34px] ">
              {isSuccess ? "Message Received!" : "Oops! Something went wrong."}
            </h2>

            <p className="text-[14px]/[28px] md:text-[16px]/[30px] text-neutral-400">
              {isSuccess
                ? "Thanks for reaching out — we'll get back to you as soon as possible."
                : "We couldn't send your message. Please try again or check your connection."}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-76.25 h-11 flex items-center justify-center bg-[#FF623E] rounded-full cursor-pointer font-bold text-[14px] text-white inset-shadow-[4px_4px_4px_rgba(255,255,255,0.25)] hover:bg-[#fc512b]"
          >
            {isSuccess ? "Back to Home" : "Try Again"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default StatusPopup;
