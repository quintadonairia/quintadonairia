import BookingProgress from "@/components/booking/BookingProgress";
import BookingStep from "@/components/booking/BookingStep";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useTranslation } from "@/contexts/TranslationContext";
import { booking } from "@/data/booking";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function BookingForm() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const t = useTranslation();

  const formData = useRef({});

  const DatesSchema = z
    .object({
      checkIn: z
        .string()
        .date()
        .refine((data) => new Date(data) > new Date(), {
          message: t.booking.dates.errorMessages.checkIn,
        }),
      checkOut: z.string().date(),
    })
    .refine((data) => new Date(data.checkOut) > new Date(data.checkIn), {
      message: t.booking.dates.errorMessages.checkOut,
      path: ["checkOut"],
    });

  const GuestsSchema = z.object({
    guests: z.object({
      adults: z.coerce.number().min(1, t.booking.guests.errorMessage),
      children: z.coerce.number().optional(),
    }),
  });

  const RoomsSchema = z.object({
    rooms: z.enum(["standard", "superior"], {
      required_error: t.booking.rooms.errorMessage,
    }),
  });

  const FullNameSchema = z.object({
    fullName: z.string({
      required_error: t.booking.fullName.errorMessage,
    }),
  });

  const EmailSchema = z.object({
    email: z.string({
      required_error: t.booking.email.errorMessage,
    }),
  });

  const datesForm = useForm<z.infer<typeof DatesSchema>>({
    resolver: zodResolver(DatesSchema),
  });

  const guestsForm = useForm<z.infer<typeof GuestsSchema>>({
    resolver: zodResolver(GuestsSchema),
  });

  const roomsForm = useForm<z.infer<typeof RoomsSchema>>({
    resolver: zodResolver(RoomsSchema),
  });

  const fullNameForm = useForm<z.infer<typeof FullNameSchema>>({
    resolver: zodResolver(FullNameSchema),
  });

  const emailForm = useForm<z.infer<typeof EmailSchema>>({
    resolver: zodResolver(EmailSchema),
  });

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
        {activeStepIndex === 0 && (
          <Form {...datesForm}>
            <form
              className="h-full md:justify-center flex flex-col gap-10"
              onSubmit={datesForm.handleSubmit(handleFormSubmit(datesForm))}
            >
              <BookingStep
                title={t.booking.dates.title}
                subtitle={t.booking.dates.subtitle}
              >
                <FormField
                  control={datesForm.control}
                  name="checkIn"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={datesForm.control}
                  name="checkOut"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </BookingStep>
              <div>
                <Button
                  className="fixed inset-x-5 bottom-5 md:relative md:bottom-0 md:inset-x-auto"
                  variant="default"
                  type="submit"
                >
                  Continuar
                </Button>
              </div>
            </form>
          </Form>
        )}
        {activeStepIndex === 1 && (
          <Form {...guestsForm}>
            <form
              className="h-full md:justify-center flex flex-col gap-10"
              onSubmit={guestsForm.handleSubmit(handleFormSubmit(guestsForm))}
            >
              <BookingStep title={t.booking.guests.title}>
                <FormField
                  control={guestsForm.control}
                  name="guests.adults"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <Input
                          type="number"
                          min={1}
                          max={8}
                          placeholder={t.booking.guests.placeholder.adults}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={guestsForm.control}
                  name="guests.children"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <Input
                          type="number"
                          min={0}
                          placeholder={t.booking.guests.placeholder.children}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </BookingStep>
              <div>
                <Button
                  className="fixed inset-x-5 bottom-5 md:relative md:bottom-0 md:inset-x-auto"
                  variant="default"
                  type="submit"
                >
                  Continuar
                </Button>
              </div>
            </form>
          </Form>
        )}
        {activeStepIndex === 2 && (
          <Form {...roomsForm}>
            <form
              className="h-full md:justify-center flex flex-col gap-10"
              onSubmit={roomsForm.handleSubmit(handleFormSubmit(roomsForm))}
            >
              <BookingStep title={t.booking.rooms.title}>
                <FormField
                  control={roomsForm.control}
                  name="rooms"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                value="standard"
                                className="peer sr-only"
                                aria-label="Quarto Standard"
                              />
                            </FormControl>
                            <FormLabel className="flex flex-col items-center justify-between rounded-md border-2 border-border-subtle bg-transparent p-4 hover:bg-background-subtle peer-data-[state=checked]:border-border-inverse [&:has([data-state=checked])]:border-border-inverse">
                              {t.booking.rooms.label.standard}
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                value="superior"
                                className="peer sr-only"
                                aria-label="Quarto Superior"
                              />
                            </FormControl>
                            <FormLabel className="flex flex-col items-center justify-between rounded-md border-2 border-border-subtle bg-transparent p-4 hover:bg-background-subtle peer-data-[state=checked]:border-border-inverse [&:has([data-state=checked])]:border-border-inverse">
                              {t.booking.rooms.label.superior}
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </BookingStep>
              <div>
                <Button
                  className="fixed inset-x-5 bottom-5 md:relative md:bottom-0 md:inset-x-auto"
                  variant="default"
                  type="submit"
                >
                  Continuar
                </Button>
              </div>
            </form>
          </Form>
        )}
        {activeStepIndex === 3 && (
          <Form {...fullNameForm}>
            <form
              className="h-full md:justify-center flex flex-col gap-10"
              onSubmit={fullNameForm.handleSubmit(
                handleFormSubmit(fullNameForm)
              )}
            >
              <BookingStep title={t.booking.fullName.title}>
                <FormField
                  control={fullNameForm.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <Input
                          type="text"
                          placeholder={t.booking.fullName.placeholder}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </BookingStep>
              <div>
                <Button
                  className="fixed inset-x-5 bottom-5 md:relative md:bottom-0 md:inset-x-auto"
                  variant="default"
                  type="submit"
                >
                  Continuar
                </Button>
              </div>
            </form>
          </Form>
        )}
        {activeStepIndex === 4 && (
          <Form {...emailForm}>
            <form
              className="h-full md:justify-center flex flex-col gap-10"
              onSubmit={emailForm.handleSubmit(handleFormSubmit(emailForm))}
            >
              <BookingStep
                title={t.booking.email.title}
                subtitle={t.booking.email.subtitle}
              >
                <FormField
                  control={emailForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={t.booking.email.placeholder}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </BookingStep>
              <div>
                <Button
                  className="fixed inset-x-5 bottom-5 md:relative md:bottom-0 md:inset-x-auto"
                  variant="default"
                  type="submit"
                >
                  Continuar
                </Button>
              </div>
            </form>
          </Form>
        )}
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
}
