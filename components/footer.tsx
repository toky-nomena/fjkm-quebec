import Link from "next/link";
import { YouTube } from "./icons/YouTube";
import { Facebook } from "./icons/Facebook";
import { Instagram } from "./icons/Instagram";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <h3 className="inline-block pb-2 text-sm font-medium">FJKM Québec</h3>
          <p className="text-sm text-muted-foreground">
            Église protestante reformée au Québec, Canada
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-2">
          <div className="space-y-4">
            <h3 className="inline-block pb-2 text-sm font-medium">
              Nous contacter
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                Courriel: <span>contact@fjkm-quebec.com</span>
              </li>
              <li>
                Téléphone: <span>+1 (514) 123-4567</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="inline-block pb-2 text-sm font-medium">
              Nous suivre
            </h3>
            <div className="flex space-x-4">
              <Link href="https://instagram.com/fjkm-quebec">
                <Instagram />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://facebook.com/fjkm-quebec">
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
