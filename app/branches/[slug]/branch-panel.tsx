import { Branch } from "@/components/branches/branches";
import { Contact } from "@/components/contact";
import { EventItemSkeletonList } from "@/components/events/event-skeleton";
import { Events } from "@/components/events/events";
import { Facebook } from "@/components/icons/Facebook";
import { Instagram } from "@/components/icons/Instagram";
import Link from "next/link";
import { Suspense } from "react";

export function BranchPanel({ branch }: { branch: Branch }) {
  return (
    <>
      <section
        id="contact"
        aria-labelledby="contact-title"
        className="p-4 space-y-4 rounded-lg bg-muted"
      >
        <h2
          id="contact-title"
          className="pb-2 text-2xl font-bold border-b text-foreground"
        >
          Contact
        </h2>
        <div className="flex flex-col space-y-4">
          <div>
            <p className="text-lg text-muted-foreground">
              <Contact label="Téléphone" type="tel" value="418-123-4567-890" />
            </p>
            <p className="text-lg text-muted-foreground">
              <Contact
                label="Email"
                type="email"
                value={`${branch.acronym.toLowerCase()}@fjkm-quebec.ca`}
              />
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="/"
              target="_blank"
              className="transition-colors text-primary hover:text-primary/80"
              aria-label="Page Facebook"
            >
              <Facebook />
            </Link>
            <Link
              href="/"
              target="_blank"
              className="transition-colors text-primary hover:text-primary/80"
              aria-label="Page Instagram"
            >
              <Instagram />
            </Link>
          </div>
        </div>
      </section>
      <section className="space-y-4">
        <h2 id="contact-title" className="text-2xl font-bold  text-foreground">
          Les activités
        </h2>
        <Suspense
          fallback={
            <div className="space-y-4">
              <EventItemSkeletonList />
            </div>
          }
        >
          <Events branchName={branch.name} />
        </Suspense>
      </section>
    </>
  );
}
