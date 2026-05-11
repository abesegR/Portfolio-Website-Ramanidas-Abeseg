interface SectionHeaderProps {
  label: string;
  bold: string;
}

export default function SectionHeader({ label, bold }: SectionHeaderProps) {
  return (
    <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-16 tracking-tight">
      {label} <span className="font-extrabold">{bold}</span>
    </h2>
  );
}
