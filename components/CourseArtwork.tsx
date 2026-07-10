import type { CourseArtworkKey } from "@/lib/content";

/**
 * PLACEHOLDER course imagery.
 *
 * Branded illustrative panels stand in for the client's photography. Each is a
 * deep-blue gradient with a subject silhouette and the road centre-line motif.
 * Swap these for <Image> + real photos once supplied (keep the same aspect box
 * in CourseCard so the layout is unaffected).
 */

const GRADIENTS: Record<CourseArtworkKey, [string, string]> = {
  defensive: ["#025a86", "#013a5c"],
  emergency: ["#014a75", "#02202f"],
  handover: ["#2b6378", "#014a75"],
  earthmoving: ["#3c7481", "#023049"],
};

function Silhouette({ artwork }: { artwork: CourseArtworkKey }) {
  const fill = "rgba(255,255,255,0.92)";
  const soft = "rgba(255,255,255,0.16)";

  switch (artwork) {
    case "defensive":
      // Shield containing a curving road — safety across all categories.
      return (
        <g>
          <path
            d="M400 96l70 26v54c0 52-33 88-70 104-37-16-70-52-70-104v-54l70-26z"
            fill="none"
            stroke={fill}
            strokeWidth="6"
          />
          <path
            d="M400 150c-16 12-24 30-24 60 0 26 10 44 24 58 14-14 24-32 24-58 0-30-8-48-24-60z"
            fill={soft}
          />
          <path d="M400 158v96" stroke="#f3b200" strokeWidth="5" strokeDasharray="12 11" />
        </g>
      );
    case "emergency":
      // Sedan with a roof beacon — VIP / emergency operation.
      return (
        <g>
          <path
            d="M300 218c14-30 30-46 48-50h104c18 4 34 20 48 50"
            fill="none"
            stroke={fill}
            strokeWidth="6"
            strokeLinecap="round"
          />
          <rect x="292" y="216" width="216" height="40" rx="14" fill={fill} />
          <rect x="388" y="150" width="24" height="16" rx="4" fill="#f3b200" />
          <line x1="400" y1="150" x2="400" y2="140" stroke="#f3b200" strokeWidth="4" />
          <circle cx="332" cy="262" r="18" fill="none" stroke={fill} strokeWidth="8" />
          <circle cx="468" cy="262" r="18" fill="none" stroke={fill} strokeWidth="8" />
        </g>
      );
    case "handover":
      // Delivery truck with a key — commercial handover.
      return (
        <g>
          <rect x="286" y="150" width="150" height="86" rx="6" fill={fill} />
          <path d="M436 178h44l30 30v28h-74z" fill={fill} />
          <rect x="300" y="166" width="30" height="26" rx="3" fill={soft} />
          <circle cx="332" cy="252" r="18" fill="none" stroke={fill} strokeWidth="8" />
          <circle cx="470" cy="252" r="18" fill="none" stroke={fill} strokeWidth="8" />
          <circle cx="392" cy="196" r="12" fill="none" stroke="#f3b200" strokeWidth="5" />
          <path d="M392 208v22m0-8h10" stroke="#f3b200" strokeWidth="5" strokeLinecap="round" />
        </g>
      );
    case "earthmoving":
      // Excavator — plant / earth-moving.
      return (
        <g>
          <rect x="330" y="176" width="80" height="52" rx="6" fill={fill} />
          <rect x="346" y="188" width="34" height="24" rx="3" fill={soft} />
          <path
            d="M410 196l70-24 34 30-24 20"
            fill="none"
            stroke="#f3b200"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path d="M486 226l24 26h-40z" fill={fill} />
          <rect x="312" y="236" width="130" height="20" rx="10" fill={fill} />
          <circle cx="336" cy="246" r="6" fill="#023049" />
          <circle cx="376" cy="246" r="6" fill="#023049" />
          <circle cx="416" cy="246" r="6" fill="#023049" />
        </g>
      );
  }
}

export default function CourseArtwork({
  artwork,
}: {
  artwork: CourseArtworkKey;
}) {
  const [from, to] = GRADIENTS[artwork];
  const gradientId = `grad-${artwork}`;

  return (
    <svg
      viewBox="0 0 800 300"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <rect width="800" height="300" fill={`url(#${gradientId})`} />
      {/* faint ground reference */}
      <line x1="0" y1="256" x2="800" y2="256" stroke="rgba(255,255,255,0.14)" strokeWidth="2" />
      <Silhouette artwork={artwork} />
      {/* road centre-line signature along the base */}
      <line
        x1="0"
        y1="288"
        x2="800"
        y2="288"
        stroke="#f3b200"
        strokeWidth="8"
        strokeDasharray="40 30"
      />
    </svg>
  );
}
