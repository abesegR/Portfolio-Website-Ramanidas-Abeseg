import { contact } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-inverse-surface border-t-2 border-primary mt-32">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-10 py-6 max-w-[1200px] mx-auto gap-4">
        <span className="font-headline font-extrabold text-2xl text-on-primary">
          RA
        </span>
        <p className="font-body text-sm text-outline-variant text-center">
          © 2024 Ramanidas Abeseg. Designed with precision.
        </p>
        <div className="flex gap-6">
          {[
            { label: "LinkedIn", href: contact.linkedin },
            { label: "GitHub", href: contact.github },
            { label: "HackerRank", href: contact.hackerrank },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-outline-variant hover:text-on-primary transition-colors font-label text-sm underline tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
