import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Octeters",
  description:
    "Book a call, request an estimate, or tell us about your project. Reply within 24 hours.",
};

export default function ContactPage() {
  return (
    <PageLayout>
      <ContactForm />
    </PageLayout>
  );
}
