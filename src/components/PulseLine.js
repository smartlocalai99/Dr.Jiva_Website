export default function PulseLine({ className = "" }) {
  return (
    <svg
      viewBox="0 0 400 60"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M0 30 H138 L154 6 L172 54 L188 16 L200 30 H400"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
