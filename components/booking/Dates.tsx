import BookingStep from "@/components/booking/BookingStep";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTranslation } from "@/contexts/TranslationContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function BookingFormDates({
  handleFormSubmit,
}: {
  handleFormSubmit: (form: any) => (data: any) => void;
}) {
  const t = useTranslation();

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

  const datesForm = useForm<z.infer<typeof DatesSchema>>({
    resolver: zodResolver(DatesSchema),
  });

  return (
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
        <Button
          className="fixed inset-x-5 bottom-5 md:relative md:bottom-0 md:inset-x-auto"
          variant="default"
          type="submit"
        >
          Continuar
        </Button>
      </form>
    </Form>
  );
}
