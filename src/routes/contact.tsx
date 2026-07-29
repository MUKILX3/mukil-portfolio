import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/sections/contact-section";

const title = "Contact Mukil — Let's Build Something Together";
const description =
  "Get in touch with Mukil for automotive CGI, product visualization, motion design and AI creative collaborations.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-6">
      <ContactSection />
    </div>
  );
}
