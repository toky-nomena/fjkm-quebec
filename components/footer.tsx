import Link from "next/link";

import { Instagram } from "./icons/Instagram";
import { Facebook } from "./icons/Facebook";

import ActiveLink from "./link/active-link";

interface FooterSection {
  title: string;
  links: { name: string; href: string; target?: string }[];
  className?: string;
}

export default async function Footer() {
  const footerSections: FooterSection[] = [
    {
      title: "L'EGLISE",
      links: [
        { name: "Cultes", href: "/cultes" },
        { name: "Histoire", href: "/history" },
        { name: "Pasteur", href: "/pastor" },
        { name: "Diacres", href: "/diacres" },
        { name: "Branches et associations", href: "/branches" },
      ],
      className: "lg:col-span-2",
    },
    {
      title: "BIBLIOTHEQUE",
      links: [
        { name: "Mofon'aina", href: "/verses" },
        { name: "Agenda", href: "/agenda" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "CONTACTS",
      links: [
        { name: "Téléphone: 418-123-4567-890", href: "tel:418-123-4567-890" },
        {
          name: "Email: contact@fjkm-quebec.ca",
          href: "mailto:contact@fjkm-quebec.ca",
        },
        {
          name: "Facebook",
          href: "https://ww.facebook.com/fjkm-quebec",
          target: "_blank",
        },
      ],
    },
    {
      title: "LÉGAL",
      links: [
        { name: "Politique de Confidentialité", href: "/privacy" },
        { name: "Licence", href: "/licensing" },
        { name: "Conditions Générales", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="border-t bg-background/10">
      <div className="py-8 border-b">
        <div className="container flex justify-center items-center mx-auto space-y-4">
          <blockquote className="text-lg italic text-muted-foreground">
            <p className="text-xl italic text-foreground/80">
              "Que chacun mette au service des autres la grâce qu'il a reçue, en
              bon intendant de la grâce de Dieu sous ses différentes formes." -
              1 Pierre 4:10
            </p>
          </blockquote>
        </div>
      </div>
      <div className="container grid grid-cols-1 gap-8 py-10 mx-auto md:grid-cols-2 lg:grid-cols-4">
        {footerSections.map((section) => (
          <div key={section.title}>
            <h2 className="mb-4 text-sm font-bold uppercase text-primary">
              {section.title}
            </h2>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.name}>
                  <ActiveLink
                    {...link}
                    className="text-sm hover:text-primary"
                    target={link.target}
                  >
                    {link.name}
                  </ActiveLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t">
        <div className="container flex flex-col gap-4 justify-between items-center py-6 mx-auto md:flex-row">
          <p className="text-sm"> 2025 FJKM Québec. Tout droits reservés.</p>
          <div className="flex space-x-3">
            <Link
              href="https://www.facebook.com/fjkm.quebec.canada"
              target="_blank"
            >
              <Facebook />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://instagram.com/fjkm-quebec" target="_blank">
              <Instagram />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
