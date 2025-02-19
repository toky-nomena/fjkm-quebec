"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Dribbble,
  MessageSquare,
  MapPin,
  Phone,
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    services: {
      worship: false,
      communityService: false,
      youthMinistry: false,
      musicMinistry: false,
      childrenMinistry: false,
      otherMinistry: false,
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Left Column */}
      <div className="flex flex-col justify-between p-8 space-y-8 bg-white rounded-2xl dark:bg-gray-900">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl text-foreground dark:text-white">
              Ensemble dans la mission divine
            </h2>
            <p className="mt-2 text-muted-foreground dark:text-gray-400">
              Votre voix compte. Aidez-nous à grandir et à servir notre
              communauté.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex gap-3 items-start">
              <MessageSquare className="w-6 h-6 text-primary dark:text-primary-light shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground dark:text-white">
                  Contactez-nous
                </h3>
                <p className="text-sm text-muted-foreground dark:text-gray-400">
                  Notre équipe est là pour vous aider
                </p>
                <p className="text-sm text-foreground dark:text-white">
                  contact@fjkm-quebec.ca
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <MapPin className="w-6 h-6 text-primary dark:text-primary-light shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground dark:text-white">
                  Visitez-nous
                </h3>
                <p className="text-sm text-muted-foreground dark:text-gray-400">
                  Venez nous rencontrer à notre siège
                </p>
                <p className="text-sm text-foreground dark:text-white">
                  222 Av. Ducharme
                </p>
                <p className="text-sm text-foreground dark:text-white">
                  Québec, QC G1M 2H3
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <Phone className="w-6 h-6 text-primary dark:text-primary-light shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground dark:text-white">
                  Appelez-nous
                </h3>
                <p className="text-sm text-muted-foreground dark:text-gray-400">
                  Lun-Ven de 9h à 17h
                </p>
                <p className="text-sm text-foreground dark:text-white">
                  418-123-4567
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/fjkm.quebec.canada"
              target="_blank"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-foreground dark:text-white"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-foreground dark:text-white"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-foreground dark:text-white"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="p-8 rounded-2xl bg-primary/10 dark:bg-primary/20">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl text-foreground dark:text-white">
              Rejoignez notre communauté
            </h2>
            <p className="mt-2 text-muted-foreground dark:text-gray-400">
              Partagez vos idées et votre passion pour le ministère
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Votre nom"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="px-0 py-2 w-full bg-transparent border-0 border-b border-gray-300 dark:border-gray-700 placeholder:text-muted-foreground dark:placeholder:text-gray-500 focus:border-primary dark:focus:border-primary-light focus:outline-none focus:ring-0"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="votre.email@exemple.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="px-0 py-2 w-full bg-transparent border-0 border-b border-gray-300 dark:border-gray-700 placeholder:text-muted-foreground dark:placeholder:text-gray-500 focus:border-primary dark:focus:border-primary-light focus:outline-none focus:ring-0"
              />
            </div>

            <div>
              <textarea
                placeholder="Votre message ou demande..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                className="px-0 py-2 w-full bg-transparent border-0 border-b border-gray-300 dark:border-gray-700 placeholder:text-muted-foreground dark:placeholder:text-gray-500 focus:border-primary dark:focus:border-primary-light focus:outline-none focus:ring-0"
              />
            </div>

            <div className="space-y-3">
              <p className="font-medium text-foreground dark:text-white">
                Comment pouvons-nous vous aider ?
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {Object.entries(formData.services).map(([key, value]) => (
                  <label key={key} className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 dark:border-gray-700 text-primary dark:text-primary-light focus:ring-primary dark:focus:ring-primary-light"
                      checked={value}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          services: {
                            ...formData.services,
                            [key]: e.target.checked,
                          },
                        })
                      }
                    />
                    <span className="text-sm text-foreground dark:text-white">
                      {key === "worship" && "Culte et adoration"}
                      {key === "communityService" && "Service communautaire"}
                      {key === "youthMinistry" && "Ministère de la jeunesse"}
                      {key === "musicMinistry" && "Ministère de musique"}
                      {key === "childrenMinistry" && "Ministère des enfants"}
                      {key === "otherMinistry" && "Autre ministère"}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-primary text-white px-4 py-2.5 "
          >
            Envoyez votre message
          </button>
        </form>
      </div>
    </div>
  );
}
