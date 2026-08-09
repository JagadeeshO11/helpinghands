// Hands-cradling-a-heart mark used in the header and footer.
export default function Logo({ className = "", variant = "color" }) {
  const heart = variant === "light" ? "#ffffff" : "#FF8A3D"
  const hands = variant === "light" ? "#ffffff" : "#0E5E8C"
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label="Helping Hands Foundation logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 21c-2.2-4.4-6.8-6.4-10.8-4.6-4.3 1.9-6 7-3.7 11.2 1.9 3.5 8 8.4 12.9 11.7 1 .7 2.2.7 3.2 0 4.9-3.3 11-8.2 12.9-11.7 2.3-4.2.6-9.3-3.7-11.2C38.8 14.6 34.2 16.6 32 21Z"
        fill={heart}
      />
      <path
        d="M9 34c2.5 0 4.5 1.2 7 3.5 3 2.8 6.5 5 10 5m29-8.5c-2.5 0-4.5 1.2-7 3.5-3 2.8-6.5 5-10 5"
        stroke={hands}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M6 44c3.5 0 6 1.4 9.5 4 4 3 8.5 5 16.5 5s12.5-2 16.5-5c3.5-2.6 6-4 9.5-4"
        stroke={hands}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  )
}
