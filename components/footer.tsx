import Link from "next/link";

import { Instagram } from "./icons/Instagram";
import { Facebook } from "./icons/Facebook";

import ActiveLink from "./link/active-link";

interface FooterSection {
  title: string;
  links: { name: string; href: string }[];
  className?: string;
}

export default async function Footer() {
  const footerSections: FooterSection[] = [
    {
      title: "L'EGLISE",
      links: [
        { name: "Cultes", href: "/cults" },
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
        { name: "Activités", href: "/activities" },
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
        { name: "Facebook", href: "https://ww.facebook.com/fjkm-quebec" },
      ],
    },
    {
      title: "LEGAL",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Licensing", href: "/licensing" },
        { name: "Terms & Conditions", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="border-t bg-background/10">
      <div className="container py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-4 text-sm font-bold uppercase text-primary">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <ActiveLink
                      href={link.href}
                      className="text-sm hover:text-primary"
                    >
                      {link.name}
                    </ActiveLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 justify-between items-center pt-8 mt-8 border-t md:flex-row">
          <p className="text-sm">© 2025 FJKM Québec. Tout droits reservés.</p>
          <div className="flex space-x-6">
            <Link href="https://instagram.com/fjkm-quebec" target="_blank">
              <Instagram />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://facebook.com/fjkm-quebec" target="_blank">
              <Facebook />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
