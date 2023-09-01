import * as React from "react";
import GeneralInfo from "../../components/GeneralInfo";
import SocialMediaLinks from "../../components/SocialMediaLinks";
import Organizers from "../../components/Organizers";

function AddChapterPage() {
  const steps = [
    { section: "01", title: "GENERAL INFO" },
    { section: "02", title: "SOCIAL MEDIA LINKS" },
    { section: "03", title: "ORGANIZERS" },
  ];
  const noBorderRight = "border-r-0";

  const [currentStep, setCurrentStep] = React.useState(0);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderFormContent = () => {
    switch (currentStep) {
      case 0:
        return <GeneralInfo />;
      case 1:
        return <SocialMediaLinks />;
      case 2:
        return <Organizers />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto flex px-11 flex-col">
      <div className="flex cursor-pointer gap-x-2 mt-8 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M2.68281 10.4425L8.30781 16.0675C8.42509 16.1848 8.58415 16.2507 8.75 16.2507C8.91585 16.2507 9.07491 16.1848 9.19219 16.0675C9.30946 15.9503 9.37535 15.7912 9.37535 15.6253C9.37535 15.4595 9.30946 15.3004 9.19219 15.1832L4.63359 10.6253H16.875C17.0408 10.6253 17.1997 10.5595 17.3169 10.4423C17.4342 10.3251 17.5 10.1661 17.5 10.0003C17.5 9.83459 17.4342 9.67562 17.3169 9.55841C17.1997 9.4412 17.0408 9.37535 16.875 9.37535H4.63359L9.19219 4.81753C9.30946 4.70026 9.37535 4.5412 9.37535 4.37535C9.37535 4.2095 9.30946 4.05044 9.19219 3.93316C9.07491 3.81588 8.91585 3.75 8.75 3.75C8.58415 3.75 8.42509 3.81588 8.30781 3.93316L2.68281 9.55816C2.6247 9.61621 2.5786 9.68514 2.54715 9.76101C2.5157 9.83688 2.49951 9.91821 2.49951 10.0003C2.49951 10.0825 2.5157 10.1638 2.54715 10.2397C2.5786 10.3156 2.6247 10.3845 2.68281 10.4425Z"
            fill="#323433"
          />
        </svg>
        <p className="text-sm font-medium">BACK</p>
      </div>
      <div className="mt-10 gap-y-2 flex flex-col">
        <p className="text-base text-[#656767] tracking-wider font-medium">
          Chapters
        </p>
        <p className="tracking-wider text-2xl font-normal text-[#323433]">
          New Chapter
        </p>
        <p className="text-base text-[#656767] tracking-wider font-medium">
          Add Chapter Details
        </p>
      </div>
      <div className="rounded-lg mt-8 border flex flex-col justify-center items-center  border-gray-300">
        <div className=" w-3/4 border border-gray-300 mt-10 rounded-lg items-center inline-flex">
          {steps.map((step, index) => (
            <div
              className={`h-20 border-gray-300 mx-2 w-2/5 flex ${
                index === steps.length - 1 ? noBorderRight : "border-r"
              }`}
              key={step.section}
            >
              <div className="bg-emerald-800" />
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="w-10 h-10 rounded-[20px] border-2 border-emerald-900 flex-col justify-center items-center inline-flex">
                  <div className="text-emerald-900 text-sm font-bold leading-none">
                    {step.section}
                  </div>
                </div>
                <div className="flex-col justify-center items-start inline-flex">
                  <div className="text-emerald-800 text-xs font-bold uppercase leading-none tracking-tight">
                    {step.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {renderFormContent()}
        <div className=" w-3/4 mt-4 mb-14 items-center inline-flex justify-end gap-x-4">
          <button
            type="button"
            onClick={handlePreviousStep}
            className={`w-52 h-11 px-8 py-3 rounded-lg border border-zinc-500 text-zinc-500 text-[13px] font-medium leading-tight tracking-tight ${
              currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentStep === 0}
          >
            Back
          </button>
          <button
            type="button"
            onClick={handleNextStep}
            disabled={currentStep === steps.length - 1}
            className={`bg-blue-500 w-52 h-11 bg-emerald-600 rounded-lg text-neutral-50 text-[13px] font-medium leading-tight tracking-tight py-3 px-8 ${
              currentStep === steps.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddChapterPage;
