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

export default function Guests({
  handleFormSubmit,
}: {
  handleFormSubmit: (form: any) => (data: any) => void;
}) {
  const t = useTranslation();

  const GuestsSchema = z.object({
    guests: z.object({
      adults: z.coerce.number().min(1, t.booking.guests.errorMessage),
      children: z.coerce.number().optional(),
    }),
  });

  const guestsForm = useForm<z.infer<typeof GuestsSchema>>({
    resolver: zodResolver(GuestsSchema),
  });

  return (
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
