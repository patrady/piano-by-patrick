import type { Metadata } from "next";
import { AnimateOnScroll } from "../components/AnimateOnScroll";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Patrick Brady Piano",
  description:
    "Book Patrick Brady for your wedding, Catholic Mass, or special event in Nashville, TN.",
};

export default function Contact() {
  return (
    <>
      <section className="bg-[#faf9f7] pb-24 pt-20 sm:pt-32">
        <div className="mx-auto max-w-6xl px-6">
          <AnimateOnScroll animation="fade-up">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-800">
              Get in touch
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
              Book a Performance
            </h1>
            <p className="mt-4 max-w-xl text-lg text-stone-600">
              Interested in live piano for your wedding, Mass, or event? Leave
              your details below and Patrick will be in touch shortly.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="bg-white pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimateOnScroll animation="slide-left">
              <ContactForm />
            </AnimateOnScroll>

            <AnimateOnScroll
              animation="slide-right"
              delay={100}
              className="flex flex-col gap-8 lg:pt-2"
            >
              <div>
                <h3 className="text-lg font-semibold text-stone-900">
                  Based in Nashville, TN
                </h3>
                <p className="mt-2 text-stone-600">
                  Available for weddings and events throughout Middle Tennessee
                  and beyond.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-stone-900">
                  What to include
                </h3>
                <ul className="mt-2 space-y-1 text-stone-600">
                  <li>• Event date and venue</li>
                  <li>• Type of event (wedding, Mass, reception, etc.)</li>
                  <li>• Approximate number of guests</li>
                  <li>• Any specific pieces you have in mind</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-stone-100 bg-[#faf9f7] p-6">
                <p className="italic text-stone-600">
                  &ldquo;Patrick made our entire day feel like a scene from a
                  film. From the prelude to the recessional — perfection.&rdquo;
                </p>
                <p className="mt-3 text-sm font-semibold text-stone-900">
                  — Sarah & James, Spring Hill TN
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
