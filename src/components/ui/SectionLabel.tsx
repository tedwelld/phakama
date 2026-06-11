export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-4 inline-block text-xs font-medium tracking-[0.2em] text-[var(--accent)] uppercase">
      {children}
    </span>
  );
}
