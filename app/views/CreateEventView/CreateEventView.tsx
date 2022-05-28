import { CREATE_EVENT_STEP_IDENTIFIER } from "~/utils/enum";

import { Step } from "./components/Step";
import { Wizard } from "./components/Wizard";
import { ViewHeader } from "~/components/ViewHeader";

// Steps
import { BasicInfoStep } from "./components/BasicInfoStep";
import { TeamSelectionStep } from "./components/TeamSelectionStep";
import { DateTimeSelectionStep } from "./components/DateTimeSelectionStep";
import { LocationSelectionStep } from "./components/LocationSelectionStep";
import { ConfirmationStep } from "./components/ConfirmationStep";

// this steps are intended ordered
const STEPS = [
  {
    identifier: CREATE_EVENT_STEP_IDENTIFIER.DATE_TIME_SELECTION,
    component: DateTimeSelectionStep,
  },
  {
    identifier: CREATE_EVENT_STEP_IDENTIFIER.BASIC_INFO,
    component: BasicInfoStep,
  },
  {
    identifier: CREATE_EVENT_STEP_IDENTIFIER.LOCATION_SELECTION,
    component: LocationSelectionStep,
  },
  {
    identifier: CREATE_EVENT_STEP_IDENTIFIER.TEAM_SELECTION,
    component: TeamSelectionStep,
  },
  {
    identifier: CREATE_EVENT_STEP_IDENTIFIER.CONFIRMATION,
    component: ConfirmationStep,
  },
];

export const CreateEventView = () => {
  return (
    <div className="w-full flex-auto flex flex-col">
      <ViewHeader title="Create New Event" />

      <Wizard>
        {STEPS.map(({ identifier, component }) => (
          <Step key={identifier} identifier={identifier}>
            {component()}
          </Step>
        ))}
      </Wizard>
    </div>
  );
};
