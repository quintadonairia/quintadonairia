import BookingProgress from "@/components/booking/BookingProgress";

import Confirmation from "@/components/booking/Confirmation";
import Dates from "@/components/booking/Dates";
import Email from "@/components/booking/Email";
import Guests from "@/components/booking/Guests";
import Name from "@/components/booking/Name";
import Rooms from "@/components/booking/Rooms";

import { booking } from "@/data/booking";
import { useState } from "react";

export default function BookingForm() {
  const [activeStepIndex, setActiveStepIndex] = useState(4);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (form: any) => async (data: any) => {
    const updatedFormData = {
      ...formData,
      ...data,
    };

    console.log("Submitting the following data to the API:", updatedFormData);

    setFormData(updatedFormData);

    if (activeStepIndex === booking.length - 2) {
      setIsLoading(true);
      try {
        const response = await fetch("/api/booking", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        console.log(data);
        if (response.ok) {
          setActiveStepIndex(booking.length - 1);
        } else {
          throw new Error("Failed to submit booking data");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
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
        {activeStepIndex === 4 && (
          <Email handleFormSubmit={handleFormSubmit} isLoading={isLoading} />
        )}
        {activeStepIndex === 5 && <Confirmation />}
      </div>
    </div>
  );
}
