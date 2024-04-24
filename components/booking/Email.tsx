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

  const EmailSchema = z.object({
    email: z.string({
      required_error: t.booking.email.errorMessage,
    }),
  });

  const emailForm = useForm<z.infer<typeof EmailSchema>>({
    resolver: zodResolver(EmailSchema),
  });

  return (
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
