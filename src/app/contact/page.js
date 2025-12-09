// src/app/contact/page.js
import ContactPageClient from "@/app/components/ContactPageClient";

// metadata can only be exported from a Server Component
export const metadata = {
  title: "Contact Us - SEA CAST FISH",
  description: "Get in touch with SEA CAST FISH – marine electronics experts in Abu Dhabi.",
};

// Server Component → only exports metadata and renders the client part
export default function ContactPage() {
  return <ContactPageClient />;
}