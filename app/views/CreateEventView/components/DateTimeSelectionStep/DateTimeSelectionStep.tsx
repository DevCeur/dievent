import { format } from "date-fns";

import { useCalendar } from "~/store/calendar";

import { Calendar } from "~/components/Calendar";

export const DateTimeSelectionStep = () => {
  const { startDate, endDate } = useCalendar((state) => ({
    startDate: state.startDate,
    endDate: state.endDate,
  }));

  const formattedSelectedStartDate = format(
    startDate || new Date(),
    "MMMM d, yyyy"
  );
  const formattedSelectedEndDate = format(
    endDate || new Date(),
    "MMMM d, yyyy"
  );

  return (
    <div className="w-full flex flex-col">
      <div className="w-full mb-6 flex justify-between">
        <div className="flex flex-col space-y-1">
          <span className="text-xs text-gray-500">Start Date:</span>
          <span className="text-sm font-medium text-gray-600">
            {startDate ? formattedSelectedStartDate : "------"}
          </span>
        </div>

        <div className="text-right flex flex-col space-y-1">
          <span className="text-xs text-gray-500">End Date:</span>
          <span className="text-sm font-medium text-gray-600">
            {endDate ? formattedSelectedEndDate : "------"}
          </span>
        </div>
      </div>

      <div className="flex-1">
        <Calendar />
      </div>
    </div>
  );
};
