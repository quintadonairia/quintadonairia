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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useTranslation } from "@/contexts/TranslationContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function Rooms({
  handleFormSubmit,
}: {
  handleFormSubmit: (form: any) => (data: any) => void;
}) {
  const t = useTranslation();

  const RoomsSchema = z.object({
    rooms: z.enum(["Standard", "Superior"], {
      required_error: t.booking.rooms.errorMessage,
    }),
  });

  const roomsForm = useForm<z.infer<typeof RoomsSchema>>({
    resolver: zodResolver(RoomsSchema),
  });

  return (
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
                          value="Standard"
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
                          value="Superior"
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
