export default function YellowUnderline() {
  return (
    <svg
      className="absolute -bottom-2 left-0 w-full"
      viewBox="0 0 340 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M2 10C40 4 80 2 120 6C160 10 200 12 240 8C280 4 310 6 338 10"
        stroke="#FACC15"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ opacity: 0.7 }}
      />
      <path
        d="M6 12C50 6 90 5 130 8C170 11 210 13 250 9C285 5 315 7 336 11"
        stroke="#FDE047"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ opacity: 0.5 }}
      />
    </svg>
  )
}
