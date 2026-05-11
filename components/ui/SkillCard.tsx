export default function SkillCard({ name }: { name: string }) {
  return (
    <div className="border-2 border-primary px-4 py-5 flex items-center justify-center font-label text-sm uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-200 cursor-default text-center">
      {name}
    </div>
  );
}
