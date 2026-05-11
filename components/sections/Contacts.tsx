"use client";

import { motion } from "framer-motion";
import { contact } from "@/lib/data";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Contact() {
  const phoneHref = `tel:${contact.phone.replace(/\s+/g, "")}`;
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    contact.location
  )}`;

  const references = [
    {
      type: "Reference 1",
      name: "Mr. M.D.R. Perera",
      role: "Head / Senior Lecturer in Computer Science",
      org: "University of Sri Jayewardenepura",
      email: "dilum@sjp.ac.lk",
    },
    {
      type: "Reference 2",
      name: "Dr. Umanda Dikwatta",
      role: "Senior Lecturer in Computer Science",
      org: "University of Sri Jayewardenepura",
      email: "umanda@sjp.ac.lk",
      phone: "+94 11 275 8916",
    },
  ];

  return (
    <section
      id="contact"
      className="max-w-[1200px] mx-auto px-6 md:px-10 py-32 space-y-24"
    >
      <SectionHeader label="Contact &" bold="References" />

      {/* Reference Cards */}
      {/* REFERENCES SECTION */}
      <div className="pt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="border-2 border-black p-8 flex flex-col bg-white transition-all duration-300 ease-out hover:-translate-y-2 hover:-rotate-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <h3 className="font-headline font-bold text-2xl mb-8">
              Contact Info
            </h3>

            <div className="space-y-5 font-body text-sm text-secondary">
              <a
                href={phoneHref}
                className="group flex items-center gap-4 transition-all duration-300 hover:translate-x-2"
              >
                <div
                  className="p-2 bg-gray-100 rounded-full transition-all duration-300 group-hover:bg-black group-hover:text-white"
                >
                  <Phone size={16} />
                </div>

                <span>{contact.phone}</span>
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="group flex items-center gap-4 transition-all duration-300 hover:translate-x-2"
              >
                <div
                  className="p-2 bg-gray-100 rounded-full transition-all duration-300 group-hover:bg-black group-hover:text-white"
                >
                  <Mail size={16} />
                </div>

                <span className="break-all">{contact.email}</span>
              </a>

              <a
                href={mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 transition-all duration-300 hover:translate-x-2"
              >
                <div
                  className="p-2 bg-gray-100 rounded-full transition-all duration-300 group-hover:bg-black group-hover:text-white"
                >
                  <MapPin size={16} />
                </div>

                <span>{contact.location}</span>
              </a>
            </div>
          </motion.div>

          {/* Reference 1 */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="border-2 border-black p-8 flex flex-col bg-white transition-all duration-300 ease-out hover:-translate-y-2 hover:rotate-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <h3 className="font-headline font-bold text-2xl mb-8">
              {references[0].type}
            </h3>

            <div className="flex-grow space-y-2">
              <p className="font-headline font-bold text-lg leading-tight text-black">
                {references[0].name}
              </p>

              <p className="font-body text-sm text-secondary leading-snug">
                {references[0].role}
              </p>

              <p className="font-body text-sm text-secondary">
                {references[0].org}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100">
              <a
                href={`mailto:${references[0].email}`}
                className="font-body text-sm text-black underline font-bold hover:text-primary transition-colors block break-all"
              >
                {references[0].email}
              </a>
            </div>
          </motion.div>

          {/* Reference 2 */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="border-2 border-black p-8 flex flex-col bg-white transition-all duration-300 ease-out hover:-translate-y-2 hover:rotate-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <h3 className="font-headline font-bold text-2xl mb-8">
              {references[1].type}
            </h3>

            <div className="flex-grow space-y-2">
              <p className="font-headline font-bold text-lg leading-tight text-black">
                {references[1].name}
              </p>

              <p className="font-body text-sm text-secondary leading-snug">
                {references[1].role}
              </p>

              <p className="font-body text-sm text-secondary">
                {references[1].org}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100">
              <a
                href={`mailto:${references[1].email}`}
                className="font-body text-sm text-black underline font-bold hover:text-primary transition-colors block break-all"
              >
                {references[1].email}
              </a>

              <p className="font-body text-sm text-secondary mt-1">
                {references[1].phone}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="relative py-10">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>

        <div className="relative flex justify-center">
          <div className="bg-[#f5f5f5] px-6 text-xs tracking-[0.3em] uppercase text-gray-400 font-bold">
            Contact
          </div>
        </div>
      </div>

      {/* Contact Form + CTA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Form */}
        <motion.form
          action={`mailto:${contact.email}`}
          method="post"
          encType="text/plain"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border-2 border-black p-4 outline-none transition-all duration-300 placeholder:text-gray-400 font-body focus:bg-gray-50 focus:-translate-y-1 focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full border-2 border-black p-4 outline-none transition-all duration-300 placeholder:text-gray-400 font-body focus:bg-gray-50 focus:-translate-y-1 focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          />

          <input
            type="text"
            name="website"
            placeholder="Your Website (if exists)"
            className="w-full border-2 border-black p-4 outline-none transition-all duration-300 placeholder:text-gray-400 font-body focus:bg-gray-50 focus:-translate-y-1 focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          />

          <textarea
            name="message"
            placeholder="How can I help?"
            rows={5}
            required
            className="w-full border-2 border-black p-4 outline-none transition-all duration-300 placeholder:text-gray-400 font-body resize-none focus:bg-gray-50 focus:-translate-y-1 focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          />

          <div className="flex flex-wrap gap-3 pt-2">
            {/* Main Button */}
            <button
              type="submit"
              className="bg-black text-white px-8 py-4 font-label text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none"
            >
              Get In Touch
            </button>

            {/* Social Buttons */}
            <div className="flex gap-2">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GitHub profile"
                className="border-2 border-black p-3 transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-1 hover:rotate-3 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile"
                className="border-2 border-black p-3 transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-1 hover:rotate-3 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              {/* Mail */}
              <a
                href={`mailto:${contact.email}`}
                aria-label="Send email"
                className="border-2 border-black p-3 transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-1 hover:rotate-3 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none"
              >
                <Send size={20} />
              </a>
            </div>
          </div>
        </motion.form>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          <div>
            <h2 className="font-headline font-extrabold text-5xl leading-[1.1] mb-6">
              Lets Talk for something{" "}
              <span className="block italic text-primary">special</span>
            </h2>

            <p className="font-body text-secondary text-lg leading-relaxed max-w-md">
              Im currently seeking new opportunities and collaborations. If you
              have a project in mind or just want to say hi, feel free to reach
              out.
            </p>
          </div>

          <div className="space-y-4 font-headline font-bold text-xl md:text-2xl">
            <a
              href={`mailto:${contact.email}`}
              className="block hover:text-primary transition-colors"
            >
              {contact.email}
            </a>

            <p className="text-black">{contact.phone}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
