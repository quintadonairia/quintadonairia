import { ArrowLeft } from "@phosphor-icons/react";
import { useRouter } from "next/router";

export default function BookingProgress() {
  const router = useRouter();

  const navigateToPreviousStep = () => {
    router.back();
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
        <div className="bg-stone-900 w-1/2 h-full rounded-full" />
      </div>
    </nav>
  );
}
