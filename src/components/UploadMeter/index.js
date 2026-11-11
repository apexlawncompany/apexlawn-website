// A small ring that fills up as photos use the upload space.
// Green while there's room, amber past 70%, red past 90%.
export default function UploadMeter({ used, budget }) {
  const percent = Math.min(100, Math.round((used / budget) * 100));
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const color = percent >= 90 ? "#c62828" : percent >= 70 ? "#e0a100" : "#2e7d32";

  return (
    <div
      role="progressbar"
      aria-label="Upload space used"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percent}
      title={`${percent}% of upload space used`}
      style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13 }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="20" r={radius} fill="none" stroke="#d9d9d9" strokeWidth="4" />
        <circle
          cx="20"
          cy="20"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - percent / 100)}
          transform="rotate(-90 20 20)"
        />
        <text x="20" y="24" textAnchor="middle" fontSize="11" fill="currentColor">
          {percent}%
        </text>
      </svg>
      <span>upload space used</span>
    </div>
  );
}
