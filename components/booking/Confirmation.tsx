import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/TranslationContext";
import Link from "next/link";
import BookingStep from "./BookingStep";

export default function Confirmation() {
  const t = useTranslation();

  return (
    <>
      <BookingStep
        title={t.booking.confirmation.title}
        subtitle={t.booking.confirmation.subtitle}
      ></BookingStep>
      <Button
        asChild
        className="fixed inset-x-5 bottom-5 md:relative md:bottom-0 md:inset-x-auto"
        variant="default"
      >
        <Link href="/">De volta ao website</Link>
      </Button>
    </>
  );
}
