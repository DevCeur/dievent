import { useEffect } from "react";

import type { ChangeEvent } from "react";

import { CREATE_EVENT_STEP_IDENTIFIER } from "~/utils/enum";

import { useCreateEvent } from "~/store/createEventStore";

import { TextInput } from "~/components/TextInput";

type EventTypeInputProps = {
  type: string;
  onChange: any;
  checkValidation: boolean;
};

const EventTypeInput = ({
  type,
  checkValidation,
  onChange: handleChange,
}: EventTypeInputProps) => (
  <label
    className={`flex flex-row items-center py-2 px-4 border ${
      checkValidation ? "border-brand-500" : "border-slate-200"
    } hover:bg-blue-50 cursor-pointer space-x-3 rounded-lg transition-colors`}
  >
    <input
      type="radio"
      name="eventType"
      value={type}
      onChange={handleChange}
      checked={checkValidation}
    />

    <span
      className={`mb-0 capitalize text-md font-medium ${
        checkValidation ? "text-brand-500" : "text-gray-500"
      } transition-colors`}
    >
      {type}
    </span>
  </label>
);

export const BasicInfoStep = () => {
  const { eventName, eventType, eventDescription } = useCreateEvent(
    (state) => ({
      eventName: state.stepsInfo.eventBasicInfo.eventName,
      eventType: state.stepsInfo.eventBasicInfo.eventType,
      eventDescription: state.stepsInfo.eventBasicInfo.eventDescription,
    })
  );

  const toggleStepState = useCreateEvent((state) => state.toggleStepState);
  const updateEventBasicInfo = useCreateEvent(
    (state) => state.updateEventBasicInfo
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    updateEventBasicInfo(e.target.name, e.target.value);
  };

  useEffect(() => {
    if (eventDescription && eventName && eventType) {
      toggleStepState(CREATE_EVENT_STEP_IDENTIFIER.BASIC_INFO, true);
    } else {
      toggleStepState(CREATE_EVENT_STEP_IDENTIFIER.BASIC_INFO, false);
    }
  }, [eventType, eventDescription, eventName, toggleStepState]);

  return (
    <form className="w-full max-w-[400px] mx-auto flex flex-col space-y-6">
      <label>
        <span>Give it a name:</span>
        <TextInput
          name="eventName"
          onChange={handleChange}
          value={(eventName as string) || ""}
        />
      </label>

      <label>
        <span>Describe it as you want:</span>
        <textarea
          name="eventDescription"
          onChange={handleChange}
          value={(eventDescription as string) || ""}
        />
      </label>

      <div>
        <span className="text-sm text-gray-500">Is it public or private:</span>

        <div className="mt-3 flex items-center space-x-6">
          <EventTypeInput
            type="public"
            onChange={handleChange}
            checkValidation={eventType === "public"}
          />

          <EventTypeInput
            type="private"
            onChange={handleChange}
            checkValidation={eventType === "private"}
          />
        </div>
      </div>
    </form>
  );
};
