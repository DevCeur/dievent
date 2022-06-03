import create from "zustand";

type CreateEventState = {
  stepsState: {
    [x: string]: boolean;
  };

  stepsInfo: {
    eventBasicInfo: {
      [x: string]: string;
    };
  };

  toggleStepState: (stepIdentifier: string, narked: boolean) => void;
  updateEventBasicInfo: (fieldName: string, value: string) => void;
  resetState: () => void;
};

export const useCreateEvent = create<CreateEventState>((set) => ({
  stepsState: {
    basic_info: false,
    team_selection: false,
  },

  stepsInfo: {
    eventBasicInfo: {},
  },

  toggleStepState: (stepIdentifier: string, marked: boolean) =>
    set((state) => ({
      stepsState: {
        ...state.stepsState,
        [stepIdentifier]: marked,
      },
    })),

  updateEventBasicInfo: (fieldName: string, value: string) =>
    set((state) => ({
      stepsInfo: {
        eventBasicInfo: {
          ...state.stepsInfo.eventBasicInfo,
          [fieldName]: value,
        },
      },
    })),

  resetState: () => set({ stepsInfo: { eventBasicInfo: {} } }),
}));
