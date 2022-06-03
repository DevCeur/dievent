import create from "zustand";

import { addMonths, isBefore, subMonths } from "date-fns";

type CalendarState = {
  currentDate: Date;
  startDate: Date | null;
  endDate: Date | null;

  addMonth: () => void;
  substractMonth: () => void;
  selectStartDate: (date: Date) => void;
  selectEndDate: (date: Date) => void;
};

export const useCalendar = create<CalendarState>((set, get) => ({
  currentDate: new Date(),
  startDate: null,
  endDate: null,

  addMonth: () => {
    const currentDate = get().currentDate;

    const newCurrentDate = addMonths(currentDate, 1);

    set({ currentDate: newCurrentDate });
  },

  substractMonth: () => {
    const currentDate = get().currentDate;

    const newCurrentDate = subMonths(currentDate, 1);

    set({ currentDate: newCurrentDate });
  },

  selectStartDate: (date) => set({ startDate: date }),

  selectEndDate: (date) => {
    const startDate = get().startDate;

    if (isBefore(date, startDate as Date)) {
      set({ startDate: date });
    } else {
      set({ endDate: date });
    }
  },
}));
