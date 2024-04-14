import BookingProgress from "@/components/booking/BookingProgress";
import BookingStep from "@/components/booking/BookingStep";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useTranslation } from "@/contexts/TranslationContext";
import { booking } from "@/data/booking";
import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormFields = {
  datesCheckIn: string;
  datesCheckOut: string;
  guestsAdults: number;
  guestsChildren: number;
  rooms: string;
  email: string;
  fullName: string;
};

export default function BookingForm() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const formData = useRef({});

  const t = useTranslation();

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    formData.current = {
      ...formData.current,
      ...data,
    };

    if (activeStepIndex === booking.length - 2) {
      handleFormSubmit(formData.current);
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
        <form
          className="h-full md:justify-center flex flex-col gap-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          {activeStepIndex === 0 && (
            <BookingStep
              title={t.booking.dates.title}
              subtitle={t.booking.dates.subtitle}
            >
              <Input
                {...register("datesCheckIn", {
                  required: t.booking.dates.errorMessages.required,
                  validate: (value) => {
                    return new Date(value) < new Date()
                      ? t.booking.dates.errorMessages.checkIn
                      : true;
                  },
                })}
                type="date"
                error={!!errors.datesCheckIn}
              />
              {errors.datesCheckIn && (
                <div className="text-foreground-negative">
                  {errors.datesCheckIn.message}
                </div>
              )}
              <Input
                {...register("datesCheckOut", {
                  required: t.booking.dates.errorMessages.required,
                  validate: (value) => {
                    return new Date(value) < new Date(getValues("datesCheckIn"))
                      ? t.booking.dates.errorMessages.checkOut
                      : true;
                  },
                })}
                type="date"
                error={!!errors.datesCheckOut}
              />
              {errors.datesCheckOut && (
                <div className="text-foreground-negative">
                  {errors.datesCheckOut.message}
                </div>
              )}
            </BookingStep>
          )}
          {activeStepIndex === 1 && (
            <BookingStep title={t.booking.guests.title}>
              <Input
                {...register("guestsAdults", {
                  required: t.booking.guests.errorMessage,
                })}
                type="number"
                placeholder="Adultos"
              />
              {errors.guestsAdults && (
                <div className="text-red-500">
                  {errors.guestsAdults.message}
                </div>
              )}
              <Input
                {...register("guestsChildren", {
                  required: t.booking.guests.errorMessage,
                })}
                type="number"
                placeholder="Crianças"
              />
              {errors.guestsChildren && (
                <div className="text-red-500">
                  {errors.guestsChildren.message}
                </div>
              )}
            </BookingStep>
          )}
          {activeStepIndex === 2 && (
            <BookingStep title={t.booking.rooms.title}>
              <RadioGroup className="flex flex-col gap-5">
                <div>
                  <RadioGroupItem
                    value="standard"
                    id="standard"
                    className="peer sr-only"
                    aria-label="Quarto Standard"
                  />
                  <Label
                    htmlFor="standard"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-border-subtle bg-transparent p-4 hover:bg-background-subtle peer-data-[state=checked]:border-border-inverse [&:has([data-state=checked])]:border-border-inverse"
                  >
                    Quarto Standard
                  </Label>
                </div>
                <div>
                  <RadioGroupItem
                    value="superior"
                    id="superior"
                    className="peer sr-only"
                    aria-label="Quarto Superior"
                  />
                  <Label
                    htmlFor="superior"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-border-subtle bg-transparent p-4 hover:bg-background-subtle peer-data-[state=checked]:border-border-inverse [&:has([data-state=checked])]:border-border-inverse"
                  >
                    Quarto Superior
                  </Label>
                </div>
              </RadioGroup>
            </BookingStep>
          )}
          {activeStepIndex === 3 && (
            <BookingStep title={t.booking.fullName.title}>
              <Input
                {...register("fullName", {
                  required: t.booking.fullName.errorMessage,
                })}
                type="text"
                placeholder={t.booking.fullName.placeholder}
              />
              {errors.fullName && (
                <div className="text-red-500">{errors.fullName.message}</div>
              )}
            </BookingStep>
          )}
          {activeStepIndex === 4 && (
            <BookingStep
              title={t.booking.email.title}
              subtitle={t.booking.email.subtitle}
            >
              <Input
                {...register("email", {
                  required: t.booking.email.errorMessage,
                })}
                type="email"
                placeholder={t.booking.email.placeholder}
              />
              {errors.email && (
                <div className="text-red-500">{errors.email.message}</div>
              )}
            </BookingStep>
          )}
          {activeStepIndex === 5 && <div>está feito</div>}
          <div>
            <Button
              className="fixed inset-x-5 bottom-5 md:relative md:bottom-0 md:inset-x-auto"
              variant="default"
            >
              Continuar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
