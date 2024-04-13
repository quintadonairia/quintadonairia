import { booking } from "@/data/booking";
import { ArrowLeft } from "@phosphor-icons/react";

export default function BookingProgress({
  activeStepIndex,
  setActiveStepIndex,
}) {
  const navigateToPreviousStep = () => {
    setActiveStepIndex(activeStepIndex - 1);
  };

  return (
    <nav className="gap-4 flex items-center">
      <button
        className="p-2 bg-stone-900/5 rounded-full"
        onClick={navigateToPreviousStep}
      >
        <ArrowLeft></ArrowLeft>
      </button>
      <div className="bg-stone-900/5 h-1 flex-grow rounded-full">
        <div
          className="bg-stone-900 w-1/2 h-full rounded-full transition-all duration-200"
          style={{
            width: `${((activeStepIndex + 1) / booking.length) * 100}%`,
          }}
        />
      </div>
    </nav>
  );
}
