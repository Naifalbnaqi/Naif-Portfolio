import { contactLinks, profile } from "@/content/portfolio";
import { ArrowUpRightIcon, ContactIcon, MapPinIcon } from "./Icons";
import { container, Eyebrow, focusRing } from "./ui";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-t border-white/[0.06] py-20 sm:py-24"
    >
      <div className={container}>
        <div className="relative isolate overflow-hidden rounded-2xl border border-white/10 bg-ink-850 px-6 py-10 sm:px-10 sm:py-12">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(60%_120%_at_100%_0%,rgb(34_211_238/0.08),transparent_60%)]"
          />
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <Eyebrow>Contact</Eyebrow>
              <h2
                id="contact-title"
                className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
              >
                Let&apos;s Connect
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">
                I&apos;m open to opportunities in Information Technology, systems, backend development, and
                related technical roles.
              </p>
              <p className="mt-6 flex items-center gap-2.5 text-sm text-slate-300">
                <MapPinIcon className="size-4 text-cyan-300" />
                <span className="sr-only">Location:</span>
                {profile.location}
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-3 lg:col-span-6">
              {contactLinks.map((link) => {
                const external = link.href.startsWith("http");
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                      className={`group flex items-center gap-4 rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3.5 transition-colors duration-200 hover:border-cyan-400/40 hover:bg-cyan-400/[0.04] ${focusRing}`}
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                        <ContactIcon name={link.icon} className="size-[18px]" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-mono text-xs uppercase tracking-[0.18em] text-slate-400">
                          {link.label}
                        </span>
                        <span className="block text-sm font-medium [overflow-wrap:anywhere] text-white underline decoration-white/25 underline-offset-4 transition-colors group-hover:decoration-cyan-300 sm:text-base">
                          {link.value}
                        </span>
                      </span>
                      <ArrowUpRightIcon className="size-4 shrink-0 text-slate-400 transition-colors group-hover:text-cyan-300" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
