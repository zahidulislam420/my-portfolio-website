import { profile, socials } from "@/data/profile";
import { ContactForm } from "./contact-form";
import {
  ChatIcon,
  ExternalLinkIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "./icons";
import { SectionHeading } from "./section-heading";

const contactChannels = [
  {
    label: "Email",
    value: socials.email,
    href: `mailto:${socials.email}`,
    icon: MailIcon,
    external: false,
  },
  {
    label: "Phone",
    value: socials.phoneDisplay,
    href: `tel:+${socials.phoneRaw.replace(/^0/, "880")}`,
    icon: PhoneIcon,
    external: false,
  },
  {
    label: "WhatsApp",
    value: socials.phoneDisplay,
    href: socials.whatsapp,
    icon: ChatIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "md-zahidulislam420",
    href: socials.linkedin,
    icon: ExternalLinkIcon,
    external: true,
  },
  {
    label: "GitHub",
    value: "zahidulislam420",
    href: socials.github,
    icon: ExternalLinkIcon,
    external: true,
  },
  {
    label: "X (Twitter)",
    value: "ZahidulIsl19509",
    href: socials.twitter,
    icon: ExternalLinkIcon,
    external: true,
  },
];

/**
 * Contact — direct channels plus a validated form.
 * The form falls back to mailto because no email backend is configured.
 */
export function Contact() {
  return (
    <section
      id="contact"
      className="section border-t border-line/60"
      aria-labelledby="contact-heading"
    >
      <div className="container-x">
        <SectionHeading
          headingId="contact-heading"
          eyebrow="Get in touch"
          title="Let's build something together"
          description="Have a project, a role or an idea in mind? Reach out through any channel below — I'll get back to you."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="flex flex-col gap-5">
            <div className="card p-6">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface-2 text-accent"
                >
                  <MapPinIcon width={20} height={20} />
                </span>
                <div>
                  <p className="font-semibold text-txt">{profile.fullName}</p>
                  <p className="text-sm text-muted">
                    {profile.designation} · {profile.location}
                  </p>
                </div>
              </div>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {contactChannels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      {...(channel.external
                        ? {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : {})}
                      className="card card-hover flex items-center gap-3.5 p-4"
                    >
                      <span
                        aria-hidden="true"
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-surface-2 text-accent"
                      >
                        <Icon width={18} height={18} />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-mono text-[0.68rem] uppercase tracking-widest text-muted">
                          {channel.label}
                        </span>
                        <span className="block truncate text-sm font-medium text-txt">
                          {channel.value}
                        </span>
                      </span>
                      {channel.external ? (
                        <span className="sr-only">(opens in a new tab)</span>
                      ) : null}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
