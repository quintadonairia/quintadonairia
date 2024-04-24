import BookingProgress from "@/components/booking/BookingProgress";

import Dates from "@/components/booking/Dates";
import Email from "@/components/booking/Email";
import Guests from "@/components/booking/Guests";
import Name from "@/components/booking/Name";
import Rooms from "@/components/booking/Rooms";

import { booking } from "@/data/booking";
import { useRef, useState } from "react";

export default function BookingForm() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const formData = useRef({});

  const handleFormSubmit = (form: any) => (data: any) => {
    formData.current = {
      ...formData.current,
      ...data,
    };

    if (activeStepIndex === booking.length - 2) {
      console.log(formData.current);
    } else {
      setActiveStepIndex(
        (previousActiveStepIndex) => previousActiveStepIndex + 1
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-background-default z-20">
      <div className="h-full flex flex-col gap-10 max-w-screen-lg mx-auto p-5 md:p-10">
        <BookingProgress
          activeStepIndex={activeStepIndex}
          setActiveStepIndex={setActiveStepIndex}
        />
        {activeStepIndex === 0 && <Dates handleFormSubmit={handleFormSubmit} />}
        {activeStepIndex === 1 && (
          <Guests handleFormSubmit={handleFormSubmit} />
        )}
        {activeStepIndex === 2 && <Rooms handleFormSubmit={handleFormSubmit} />}
        {activeStepIndex === 3 && <Name handleFormSubmit={handleFormSubmit} />}
        {activeStepIndex === 4 && <Email handleFormSubmit={handleFormSubmit} />}
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
}
