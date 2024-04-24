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

  const NameSchema = z.object({
    name: z.string({
      required_error: t.booking.name.errorMessage,
    }),
  });

  const nameForm = useForm<z.infer<typeof NameSchema>>({
    resolver: zodResolver(NameSchema),
  });

  return (
    <Form {...nameForm}>
      <form
        className="h-full md:justify-center flex flex-col gap-10"
        onSubmit={nameForm.handleSubmit(handleFormSubmit(nameForm))}
      >
        <BookingStep title={t.booking.name.title}>
          <FormField
            control={nameForm.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormControl>
                  <Input
                    type="text"
                    placeholder={t.booking.name.placeholder}
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
