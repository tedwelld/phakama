import { MEDICAL_DISCLAIMER } from "@/data/siteConfig";

export default function DisclaimerBanner() {
  return (
    <div className="border-y border-[var(--accent)]/20 bg-[var(--accent)]/5 px-4 py-4">
      <p className="container-luxury text-center text-sm text-[var(--fg-70)]">
        <i className="pi pi-info-circle mr-2 text-[var(--accent)]" />
        {MEDICAL_DISCLAIMER}
      </p>
    </div>
  );
}
