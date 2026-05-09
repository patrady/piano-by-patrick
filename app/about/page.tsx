import type { Metadata } from "next";
import Link from "next/link";
import { AnimateOnScroll } from "../components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "About | Patrick Brady Piano",
  description:
    "Learn about Patrick Brady — Nashville-based pianist specializing in weddings and Catholic Mass.",
};

export default function About() {
  return (
    <>
      <section className="bg-[#faf9f7] pb-24 pt-20 sm:pt-32">
        <div className="mx-auto max-w-3xl px-6">
          <AnimateOnScroll animation="fade-up">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-800">
              About Patrick
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
              The Man Behind the Keys
            </h1>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl space-y-10 px-6">
          <AnimateOnScroll animation="fade-up">
            <p className="text-lg leading-8 text-stone-700">
              Patrick Brady is a Nashville-based pianist who has spent his life
              pursuing a deep love of music. He grew up in a household where
              music was always present, and from the time he first sat down at
              the piano as a child, it was clear that the instrument had found
              its player. Patrick studied under several dedicated private
              instructors over the years, developing his technique through
              classical training while also learning to play by ear — a skill
              that lets him bring genuine feeling to every piece rather than
              just executing notes on a page. He has performed at hundreds of
              events throughout Middle Tennessee and continues to refine his
              craft with the same curiosity and discipline he had when he
              started.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={100}>
            <p className="text-lg leading-8 text-stone-700">
              Patrick calls Nashville home and has been deeply embedded in the
              city&apos;s musical community for years. While Nashville is famous
              for country music, Patrick has built his reputation in a different
              register — the intimate, meaningful moments of people&apos;s most
              important days. His repertoire spans classical masterworks by
              Debussy, Chopin, and Bach to beloved sacred pieces like Ave Maria
              and Panis Angelicus, as well as contemporary arrangements that
              resonate with modern couples. Whether the setting is an ornate
              cathedral, a simple chapel, or an outdoor garden ceremony, Patrick
              reads the room and plays to the moment rather than a setlist.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={200}>
            <p className="text-lg leading-8 text-stone-700">
              What drives Patrick is simple: the piano has a unique power to
              reach people at an emotional level that words alone cannot. He is
              passionate about music because of what it does to a room — the
              way a well-chosen piece can make a bride feel truly seen as she
              walks down the aisle, or give a congregation the space to
              genuinely pray during Mass. For Patrick, performing isn&apos;t
              about showcasing technique; it&apos;s about serving the moment.
              That philosophy, combined with a genuine love of the craft, is
              what couples and clergy who work with him notice most — and it is
              why so many of them come back.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#faf9f7] py-20">
        <AnimateOnScroll
          animation="fade-up"
          className="mx-auto max-w-xl px-6 text-center"
        >
          <h2 className="text-2xl font-bold tracking-tight text-stone-900">
            Ready to work together?
          </h2>
          <p className="mt-3 text-stone-500">
            Patrick is available for weddings, Catholic Mass, and private
            events throughout Nashville and Middle Tennessee.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-stone-900 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-amber-900"
          >
            Book a Performance
          </Link>
        </AnimateOnScroll>
      </section>
    </>
  );
}
