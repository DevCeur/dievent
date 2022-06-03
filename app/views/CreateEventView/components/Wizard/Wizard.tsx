import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { useCreateEvent } from "~/store/createEventStore";

import { CREATE_EVENT_STEP_TITLE_BY_IDENTIFIER } from "~/utils/enum";

export const Wizard: React.FC = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [barPercentage, setBarPercentage] = useState(0);

  // const stepsState = useCreateEvent((state) => state.stepsState);
  const stepsInfo = useCreateEvent((state) => state.stepsInfo);

  const steps = React.Children.toArray(children);

  const stepIdentifier = steps.map((step: any) => step.props)[currentStep - 1]
    .identifier;

  const stepTitle = CREATE_EVENT_STEP_TITLE_BY_IDENTIFIER[stepIdentifier];

  const lastStepNumber = steps.length;

  const handleGoNext = () => {
    if (currentStep === lastStepNumber) {
      console.log(stepsInfo);
    }

    setCurrentStep((prevStep) => prevStep + 1);
    setBarPercentage((prevState) => prevState + 100 / (steps.length - 1));
  };

  const handleGoBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
    setBarPercentage((prevState) => prevState - 100 / (steps.length - 1));
  };

  return (
    <div className="flex flex-auto flex-col justify-center items-center">
      <div className="w-[85%] max-w-xl relative">
        <div className="flex justify-between items-center my-6 2xl:my-10 relative">
          {steps.map((_, stepIndex) => (
            <span
              key={stepIndex}
              className={`w-3 h-4 rounded-full ${
                currentStep > stepIndex || currentStep === stepIndex + 1
                  ? "bg-brand-500"
                  : "bg-slate-200"
              } transition-colors ease-in-out delay-[400ms]`}
            />
          ))}
        </div>

        <div>
          <div
            style={{
              width: `${barPercentage > 0 ? barPercentage : 0}%`,
            }}
            className={`h-[2px] bg-brand-500 absolute -z-10 top-[50%] left-0 right-0 transition-all ease-in-out duration-500`}
          />
        </div>

        <div
          className={`h-[2px] w-full bg-gray-100 absolute -z-20 top-[50%] transition-all`}
        />
      </div>

      <div className="w-full flex flex-auto flex-col justify-center items-center">
        <div className="w-full h-full max-w-2xl min-h-[600px] flex flex-col justify-center items-center">
          <div className="w-full py-4 px-6 border-t border-x border-slate-100 bg-gray-50 rounded-t-xl">
            <h3 className="w-full flex items-center justify-between text-gray-700 text-sm">
              <span>
                Step{" "}
                <AnimatePresence exitBeforeEnter initial={false}>
                  <motion.span
                    key={`step-title-${currentStep}`}
                    initial={{ opacity: 0, translateY: -5 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    exit={{ opacity: 0, translateY: 5 }}
                    transition={{ duration: 0.3 }}
                    className="text-xs px-2 py-1 ml-1 rounded-md bg-gray-200 font-semibold"
                  >
                    {currentStep}
                  </motion.span>
                </AnimatePresence>
              </span>
              <AnimatePresence exitBeforeEnter initial={false}>
                <motion.span
                  key={`step-title-${currentStep}`}
                  initial={{ opacity: 0, translateX: -5 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  exit={{ opacity: 0, translateX: 5 }}
                  transition={{ duration: 0.25 }}
                  className="font-normal text-gray-500"
                >
                  {stepTitle}
                </motion.span>
              </AnimatePresence>
            </h3>
          </div>

          <div className="w-full h-full flex flex-col justify-between border border-slate-100 rounded-b-xl p-6">
            <AnimatePresence exitBeforeEnter initial={false}>
              {steps[currentStep - 1]}
            </AnimatePresence>

            <div className="w-full flex justify-between items-center mt-12">
              <button
                className="button-ghost"
                onClick={handleGoBack}
                disabled={currentStep === 1}
              >
                Go Back
              </button>
              <button
                className="button-solid"
                onClick={handleGoNext}
                // disabled={!stepsState[stepIdentifier]}
              >
                {lastStepNumber === currentStep ? "Create Event" : "Continue"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
