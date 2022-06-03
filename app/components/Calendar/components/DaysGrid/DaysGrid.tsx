import {
  format,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
  addDays,
} from "date-fns";

import { useCalendar } from "~/store/calendar";

import { DayCell } from "../DayCell";

const DaysRow = ({ days }: { days: string[] }) => {
  return <div className="grid grid-cols-7">{days}</div>;
};

export const DaysGrid = () => {
  const { currentDate } = useCalendar((state) => ({
    currentDate: state.currentDate,
  }));

  const currentMonth = format(currentDate, "L");

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startWeekDay = startOfWeek(monthStart);
  const endWeekDay = endOfWeek(monthEnd);

  let days: any[] = [];
  let day = startWeekDay;
  let formattedDay = "";

  const daysRows = [];

  while (day <= endWeekDay) {
    // in this for we are going to add 7 days to the `days` array with it's corresponding day number
    for (let i = 0; i < 7; i++) {
      const dayMonth = format(day, "L");

      days.push(
        dayMonth === currentMonth ? (
          <DayCell key={formattedDay} day={day} />
        ) : (
          <div key={formattedDay} />
        )
      );

      day = addDays(day, 1);
    }

    // here we push a row to the `rows` array, a row it's an array of days
    daysRows.push(<DaysRow key={formattedDay} days={days} />);

    days = [];
  }

  return <div className="w-full h-full grid grid-rows-5">{daysRows}</div>;
};
