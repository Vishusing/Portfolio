
// Spinner component for a more realistic circular loading animation

export default function Spinner() {
  return (
    <span className="inline-block align-middle mr-2">
      <svg
        className="animate-spin"
        width="24"
        height="24"
        viewBox="0 0 50 50"
        fill="none"
      >
        <circle
          className="opacity-20"
          cx="25"
          cy="25"
          r="20"
          stroke="white"
          strokeWidth="5"
          fill="none"
        />
        <circle
          className="opacity-90"
          cx="25"
          cy="25"
          r="20"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="90"
          strokeDashoffset="60"
        />
      </svg>
    </span>
  );
}