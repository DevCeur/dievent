import { ArrowLeftIcon } from "@heroicons/react/solid";
import { useNavigate } from "@remix-run/react";

type ViewHeaderProps = {
  title: string;
};

export const ViewHeader = ({ title }: ViewHeaderProps) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex justify-between items-center -mt-6 -mx-6 py-4 px-6 bg-gray-50 border-b border-slate-100">
      <button onClick={handleGoBack} className="text-sm text-gray-500">
        <ArrowLeftIcon className="w-4" />
      </button>

      <h2 className="font-semibold text-gray-500">{title}</h2>
    </div>
  );
};
