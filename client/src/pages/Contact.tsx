/**
 * Contact Page — expanded inquiry guidance (distinct from homepage CTA cards)
 */

import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/ui/scroll-reveal";
import { CONTACT } from "@/data/contact";
import { contactPage } from "@/data/page-content";
import { cn } from "@/lib/utils";

function ContactItem({
  icon: Icon,
  title,
  description,
  detail,
  href,
}: {
  icon: typeof Mail;
  title: string;
  description: string;
  detail: React.ReactNode;
  href?: string;
}) {
  return (
    <div className="flex h-full flex-col text-left">
      <div className="mb-5 inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="size-5" strokeWidth={1.75} />
      </div>
      <h3 className="text-base font-bold text-white md:text-lg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      {href ? (
        <a
          href={href}
          className={cn(
            "mt-4 text-sm font-semibold text-primary transition-colors hover:text-primary/80 md:text-base",
          )}
        >
          {detail}
        </a>
      ) : (
        <div className="mt-4 text-sm font-semibold text-primary md:text-base">
          {detail}
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        title={contactPage.hero.title}
        subtitle={contactPage.hero.subtitle}
        accentHalf="first"
      />

      <section className="bg-background py-16 md:py-24">
        <div className="container max-w-3xl px-4">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              {contactPage.expect.title}
            </h2>
            <div className="mt-8 space-y-6">
              {contactPage.expect.steps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center text-sm font-bold text-primary">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-background py-12 md:py-20">
        <div className="container px-4">
          <ScrollReveal className="mb-10 md:mb-14">
            <span className="inline-flex rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/70">
              Reach out to us
            </span>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
              We&apos;d love to hear from you
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground md:text-base">
              Or reach us directly at{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                {CONTACT.email}
              </a>
            </p>
          </ScrollReveal>

          <StaggerReveal className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <StaggerItem>
              <ContactItem
                icon={Mail}
                title={CONTACT.emailSupport.title}
                description={CONTACT.emailSupport.description}
                href={`mailto:${CONTACT.email}`}
                detail={CONTACT.email}
              />
            </StaggerItem>
            <StaggerItem>
              <ContactItem
                icon={MapPin}
                title={CONTACT.location.title}
                description={CONTACT.location.description}
                detail={CONTACT.location.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              />
            </StaggerItem>
            {CONTACT.phones.map((phone) => (
              <StaggerItem key={phone.href}>
                <ContactItem
                  icon={Phone}
                  title={phone.title}
                  description={phone.description}
                  href={phone.href}
                  detail={phone.display}
                />
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="container px-4 text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Let&apos;s talk about your project
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Email us at{" "}
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-primary underline-offset-4 hover:underline"
            >
              {CONTACT.email}
            </a>{" "}
            or explore our work before reaching out.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              asChild
              className="h-12 rounded-lg bg-primary px-8 text-base font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2">
                Send an email
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-lg border-white/15 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/5 hover:text-white"
            >
              <Link href="/solutions">View solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
