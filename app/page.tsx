import Link from "next/link";
import { AnimateOnScroll } from "./components/AnimateOnScroll";
import { videos, testimonials, specialties } from "./data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#faf9f7] pb-24 pt-20 sm:pt-32">
        <div className="mx-auto max-w-6xl px-6">
          <AnimateOnScroll animation="fade-up">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-800">
              Pianist in Nashville, TN
            </p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-stone-900 sm:text-6xl lg:text-7xl">
              Piano by Patrick
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-stone-600">
              Need a live pianist or organist for your wedding, liturgical service, or special event?
              You're in the right place.
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

        {/* Floating music notes between staff lines */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden hidden lg:block">
          {[
            { note: "♩", top: "20%", right: "36%", fontSize: "5rem", delay: "0s", duration: "3.4s", opacity: 0.18 },
            { note: "♫", top: "34%", right: "22%", fontSize: "7rem", delay: "0.7s", duration: "4s", opacity: 0.15 },
            { note: "♪", top: "19%", right: "12%", fontSize: "4rem", delay: "1.4s", duration: "3s", opacity: 0.20 },
            { note: "♬", top: "53%", right: "7%", fontSize: "6rem", delay: "0.3s", duration: "3.7s", opacity: 0.14 },
          ].map((n, i) => (
            <span
              key={i}
              className="note-float absolute text-amber-900 select-none"
              style={{
                top: n.top,
                right: n.right,
                fontSize: n.fontSize,
                opacity: n.opacity,
                animationDelay: n.delay,
                animationDuration: n.duration,
              }}
            >
              {n.note}
            </span>
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

          <div className="mt-12 flex flex-col gap-16">
            {videos.map((v, i) => (
              <AnimateOnScroll
                key={v.id}
                animation="fade-up"
                delay={i * 120}
                className={`video-card relative flex flex-col sm:flex-row rounded-2xl bg-[#faf9f7] sm:min-h-[600px] ${i % 2 === 1 ? "sm:flex-row-reverse" : ""
                  }`}
              >
                {/* Video placeholder */}
                <div className="relative aspect-video sm:aspect-auto sm:w-1/2 shrink-0">
                  <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-[60%] flex items-center justify-center rounded-2xl border border-stone-200 bg-stone-100 shadow-sm">
                    <div className="flex flex-col items-center gap-3">
                      <button
                        type="button"
                        aria-label={`Play ${v.piece}`}
                        className="play-btn relative flex h-14 w-14 items-center justify-center rounded-full bg-stone-200 transition-transform hover:scale-110"
                      >
                        <span className="ml-1 border-b-[10px] border-l-[18px] border-t-[10px] border-b-transparent border-l-stone-500 border-t-transparent" />
                      </button>
                      <span className="text-xs font-medium uppercase tracking-widest text-stone-400">
                        Video coming soon
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-center p-8 sm:p-12">
                  <h3 className="text-xl font-semibold text-stone-900">{v.piece}</h3>
                  <p className="mt-3 leading-7 text-stone-500">
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
              What Couples Area Saying
            </h2>
          </AnimateOnScroll>
        </div>

        <div className="mt-12 space-y-6">
          {/* Row 1 — scrolls left */}
          <div className="overflow-hidden">
            <div className="marquee-row marquee-scroll-left">
              {[...testimonials.slice(0, Math.ceil(testimonials.length / 2)), ...testimonials.slice(0, Math.ceil(testimonials.length / 2))].map((t, i) => (
                <div key={i} className="w-80 shrink-0 rounded-2xl border border-stone-100 bg-[#faf9f7] p-7">
                  <p className="italic leading-7 text-stone-600">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-stone-200" />
                    <div>
                      <p className="font-semibold text-stone-900">{t.name}</p>
                      <p className="text-sm text-stone-400">{t.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 — scrolls right */}
          <div className="overflow-hidden">
            <div className="marquee-row marquee-scroll-right">
              {[...testimonials.slice(Math.ceil(testimonials.length / 2)), ...testimonials.slice(Math.ceil(testimonials.length / 2))].map((t, i) => (
                <div key={i} className="w-80 shrink-0 rounded-2xl border border-stone-100 bg-[#faf9f7] p-7">
                  <p className="italic leading-7 text-stone-600">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-stone-200" />
                    <div>
                      <p className="font-semibold text-stone-900">{t.name}</p>
                      <p className="text-sm text-stone-400">{t.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
            Nashville-based and available for weddings, liturgical services, and private
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
