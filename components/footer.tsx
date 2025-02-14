import Link from "next/link";

import { Facebook } from "./icons/Facebook";
import { Instagram } from "./icons/Instagram";
import { ReactNode } from "react";
import { branches } from "./branches/branches";

function FooterTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="inline-block text-base font-semibold text-foreground">
      {children}
    </h3>
  );
}

function FooterLink({
  children,
  to,
  blank,
}: {
  children: ReactNode;
  to: string;
  blank?: boolean;
}) {
  return (
    <Link href={to} target={blank ? "_blank" : ""}>
      <span className="transition-colors hover:underline text-muted-foreground hover:text-primary">
        {children}
      </span>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="border-t bg-background/50 text-foreground">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <FooterTitle>Branches</FooterTitle>
          <ul className="max-w-md list-disc list-inside text-muted-foreground">
            {branches.map((branch) => (
              <li key={branch.slug}>
                <FooterLink to={`/branches/${branch.slug}`.toLowerCase()}>
                  {branch.name}
                </FooterLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-2">
          <div className="space-y-4">
            <h3 className="inline-block pb-2 text-base font-medium text-foreground">
              Nous contacter
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                Courriel:{" "}
                <FooterLink to="mailto:contact@fjkm-quebec.com">
                  contact@fjkm-quebec.com
                </FooterLink>
              </li>
              <li>
                Téléphone:{" "}
                <FooterLink to="tel:+15141234567">+1 (514) 123-4567</FooterLink>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="inline-block pb-2 text-base font-medium text-foreground">
              Mentions légales
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <FooterLink to="/">Confidentialité</FooterLink>
              </li>
              <li>
                <FooterLink to="/">Conditions d'utilisation</FooterLink>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="inline-block pb-2 text-base font-medium text-foreground">
              Nous suivre
            </h3>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/fjkm-quebec"
                target="_blank"
                className="transition-colors text-muted-foreground hover:text-primary"
              >
                <Instagram />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://facebook.com/fjkm-quebec"
                target="_blank"
                className="transition-colors text-muted-foreground hover:text-primary"
              >
                <Facebook />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-6 border-t">
        <p className="text-sm text-center text-muted-foreground">
          {new Date().getFullYear()} FJKM Québec. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
