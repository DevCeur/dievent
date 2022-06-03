import { Header } from "./components/Header";
import { DaysGrid } from "./components/DaysGrid";

export const Calendar = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <DaysGrid />
    </div>
  );
};
