type PlaceholderImageProps = {
  label: string;
  className?: string;
};

export default function PlaceholderImage({
  label,
  className = "aspect-video w-full",
}: PlaceholderImageProps) {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-pink/30 bg-gradient-to-br from-pink-light/50 to-purple-light/50 ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="px-6 text-center">
        <svg
          className="mx-auto h-12 w-12 text-pink/40"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <p className="mt-3 text-sm font-medium text-grey-muted">{label}</p>
        <p className="mt-1 text-xs text-grey-muted/70">Photo coming soon</p>
      </div>
    </div>
  );
}
