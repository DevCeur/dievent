import { format, isBefore, subDays, isToday as checkIsToday } from "date-fns";

import { useCalendar } from "~/store/calendar";

export const DayCell = ({ day }: { day: Date }) => {
  const { startDate, selectStartDate, selectEndDate } = useCalendar(
    (state) => ({
      startDate: state.startDate,
      selectStartDate: state.selectStartDate,
      selectEndDate: state.selectEndDate,
    })
  );

  const isToday = checkIsToday(day);
  const isBeforeToday = isBefore(day, subDays(new Date(), 1));

  const formattedDay = format(day, "d");

  const handleSelectDates = () => {
    if (!startDate) {
      selectStartDate(day);
    } else {
      selectEndDate(day);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <button
        disabled={isBeforeToday}
        className={`w-12 h-12 text-sm relative ${
          isBeforeToday ? "text-gray-300" : "text-gray-500"
        } ${isBeforeToday ? "cursor-not-allowed" : "cursor-pointer"} ${
          !isBeforeToday
            ? "border border-transparent hover:border-slate-400 hover:font-medium hover:text-gray-900"
            : "hover:bg-transparent"
        } ${isToday && "text-brand-500 hover:!text-brand-600"} 
        rounded-lg transition-all duration-300`}
        onClick={handleSelectDates}
      >
        {formattedDay}

        {isToday && (
          <span className="text-[10px] text-gray-500 absolute bottom-0 right-0 left-0">
            today
          </span>
        )}
      </button>
    </div>
  );
};
