import Link from "next/link";
import { AnimateOnScroll } from "./components/AnimateOnScroll";

const videos = [
  {
    id: 1,
    piece: "Clair de Lune — Debussy",
    description:
      "A dreamy, impressionist masterpiece that fills a ceremony with quiet elegance. Perfect for a processional or quiet prelude.",
  },
  {
    id: 2,
    piece: "Canon in D — Pachelbel",
    description:
      "The timeless wedding classic, reimagined with a fuller, richer arrangement. Brides love the warmth it brings to the aisle walk.",
  },
  {
    id: 3,
    piece: "Ave Maria — Schubert",
    description:
      "A reverent, deeply moving piece equally at home in a Catholic Mass or intimate chapel wedding. One of Patrick's most-requested pieces.",
  },
];

const specialties = [
  {
    icon: "✝",
    title: "Catholic Mass",
    description:
      "Trained in liturgical music, Patrick provides live piano for Mass — from offertory to communion. He understands the rhythm of the Mass and adds music that lifts the worship without distracting from it.",
  },
  {
    icon: "♡",
    title: "Weddings",
    description:
      "From the prelude to the recessional, Patrick creates a seamless musical journey for your wedding day. He works with couples to choose pieces that reflect their story and make the day feel completely their own.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#faf9f7] pb-24 pt-20 sm:pt-32">
        <div className="mx-auto max-w-6xl px-6">
          <AnimateOnScroll animation="fade-up">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-800">
              Live Piano — Nashville, TN
            </p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-stone-900 sm:text-6xl lg:text-7xl">
              Patrick Brady
              <span className="block text-amber-800">Piano</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-stone-600">
              Elegant live piano for weddings, Catholic Mass, and special
              events. Music that moves people — not just fills the room.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-stone-900 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-amber-900"
              >
                Book a Performance
              </Link>
              <Link
                href="#performances"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 px-8 py-3.5 text-sm font-semibold text-stone-700 transition-colors hover:border-stone-500 hover:text-stone-900"
              >
                Watch Performances
              </Link>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Decorative staff lines */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.04]">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px w-full bg-stone-900"
              style={{ top: `${15 + i * 12}%` }}
            />
          ))}
        </div>
      </section>

      {/* Video Performances */}
      <section id="performances" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Performances
            </h2>
            <p className="mt-3 text-stone-500">
              A glimpse of what Patrick brings to your event.
            </p>
          </AnimateOnScroll>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v, i) => (
              <AnimateOnScroll
                key={v.id}
                animation="fade-up"
                delay={i * 120}
                className="video-card flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-[#faf9f7]"
              >
                {/* Video placeholder */}
                <div className="relative flex aspect-video items-center justify-center bg-stone-900">
                  <div className="absolute inset-0 bg-gradient-to-br from-stone-800 to-stone-950 opacity-90" />
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <button
                      type="button"
                      aria-label={`Play ${v.piece}`}
                      className="play-btn relative flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform hover:scale-110"
                    >
                      <span className="ml-1 border-b-[10px] border-l-[18px] border-t-[10px] border-b-transparent border-l-white border-t-transparent" />
                    </button>
                    <span className="text-xs font-medium uppercase tracking-widest text-stone-400">
                      Video coming soon
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-semibold text-stone-900">{v.piece}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-stone-500">
                    {v.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="bg-[#faf9f7] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Specialties
            </h2>
          </AnimateOnScroll>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {specialties.map((s, i) => (
              <AnimateOnScroll
                key={s.title}
                animation="slide-right"
                delay={i * 150}
                className="rounded-2xl border border-stone-200 bg-white p-8"
              >
                <span className="text-3xl">{s.icon}</span>
                <h3 className="mt-4 text-xl font-semibold text-stone-900">
                  {s.title}
                </h3>
                <p className="mt-3 leading-7 text-stone-600">{s.description}</p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              What Couples Say
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll
            animation="stagger-children"
            className="mt-12 grid gap-6 sm:grid-cols-3"
          >
            {[
              {
                quote:
                  "Patrick's playing made our ceremony feel like a movie. Every guest commented on the music.",
                name: "Sarah & James",
                event: "Wedding, Spring Hill TN",
              },
              {
                quote:
                  "He played Ave Maria at our wedding Mass and there wasn't a dry eye in the church.",
                name: "Emily & Michael",
                event: "Catholic Wedding Mass, Nashville",
              },
              {
                quote:
                  "Booked Patrick for our rehearsal dinner too — he just gets the right vibe for any moment.",
                name: "Lauren & Tyler",
                event: "Wedding Reception, Franklin TN",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-stone-100 bg-[#faf9f7] p-7"
              >
                <p className="italic leading-7 text-stone-600">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-stone-900">{t.name}</p>
                  <p className="text-sm text-stone-400">{t.event}</p>
                </div>
              </div>
            ))}
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 py-24 text-center">
        <AnimateOnScroll animation="fade-up" className="mx-auto max-w-xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
            Ready to make it unforgettable?
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Book Patrick for Your Event
          </h2>
          <p className="mt-4 text-stone-400">
            Nashville-based and available for weddings, Mass, and private
            events. Reach out to start the conversation.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-600 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-amber-500"
          >
            Get in Touch
          </Link>
        </AnimateOnScroll>
      </section>
    </>
  );
}
