import { addDays, format, startOfWeek } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

import { useCalendar } from "~/store/calendar";

const DAYS = [1, 2, 3, 4, 5, 6, 7];

export const Header = () => {
  const { currentDate, addMonth, substractMonth } = useCalendar((state) => ({
    currentDate: state.currentDate,

    addMonth: state.addMonth,
    substractMonth: state.substractMonth,
  }));

  const currentMonth = format(currentDate, "MMMM");
  const currentYear = format(currentDate, "yyyy");

  const startDay = startOfWeek(currentDate);

  const isInCurrentMonth = currentMonth === format(new Date(), "MMMM");

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <button
          disabled={isInCurrentMonth}
          onClick={() => substractMonth()}
          className="p-2 text-gray-500 hover:bg-slate-100 rounded-lg transition-colors disabled:opacity-50 hover:disabled:bg-transparent disabled:cursor-not-allowed"
        >
          <ChevronLeftIcon className="w-6" />
        </button>

        <p className="space-x-4">
          <AnimatePresence exitBeforeEnter initial={false}>
            {currentMonth && (
              <motion.span
                key={currentMonth}
                initial={{ opacity: 0, translateY: 5 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: -5 }}
                transition={{ duration: 0.15 }}
                className="mr-4 text-lg font-medium text-brand-600 inline-block"
              >
                {currentMonth}
              </motion.span>
            )}
          </AnimatePresence>
          <span className="text-gray-400">{currentYear}</span>
        </p>

        <button
          onClick={() => addMonth()}
          className="p-2 text-gray-500 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <ChevronRightIcon className="w-6" />
        </button>
      </div>

      <div className="py-4 grid grid-cols-7">
        {DAYS.map((day, i) => (
          <div key={day} className="flex justify-center">
            <span className="text-center text-sm text-brand-500 font-medium">
              {format(addDays(startDay, i), "iii")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
