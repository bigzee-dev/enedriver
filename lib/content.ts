/**
 * Course catalogue and supporting site content.
 * Copy lives here so components stay presentational and the client can
 * edit wording in one place.
 */

export interface Course {
  id: string;
  index: string;
  title: string;
  /** Human-readable duration, shown in the mono "gauge" style. */
  duration: string;
  summary: string;
  /** Licence categories or scope covered. */
  scope: string[];

  img: string;
}

export const COURSES: Course[] = [
  {
    id: "defensive-driving",
    index: "01",
    title: "Advanced Defensive Driving",
    duration: "3 days",
    summary:
      "Hazard perception, vehicle control and collision-avoidance training across every licence category — from motorbikes to extra heavy-duty combinations.",
    scope: [
      "Motorbikes",
      "Light duty vehicles",
      "4x4 driving",
      "Trucks",
      "Extra heavy-duty trucks",
      "Buses",
    ],

    img: "/defensive.jpg",
  },
  {
    id: "emergency-vip",
    index: "02",
    title: "Emergency & VIP Vehicle Operation",
    duration: "2 days",
    summary:
      "Advanced VIP security, chauffeur and emergency-vehicle operation for high-pressure, time-critical driving where composure and precision are non-negotiable.",
    scope: [
      "Advanced VIP security driving",
      "Executive chauffeur skills",
      "Emergency vehicle operation",
      "Convoy & evasive techniques",
    ],

    img: "/ambulance.jpg",
  },
  {
    id: "commercial-handover",
    index: "03",
    title: "Commercial Vehicle Handover & Product Training",
    duration: "2 days",
    summary:
      "Structured handover and product familiarisation so operators understand every system before a new commercial vehicle enters service.",
    scope: [
      "Vehicle systems familiarisation",
      "Safe operating procedures",
      "Pre-trip inspection routines",
      "Product-specific controls",
    ],

    img: "/trucks.jpg",
  },
  {
    id: "earth-moving",
    index: "04",
    title: "Operating Earth-Moving Machines",
    duration: "24 hours",
    summary:
      "Practical competency training for plant and earth-moving equipment, preparing operators for safe, productive work on mine and construction sites.",
    scope: [
      "Machine controls & handling",
      "Site safety & spotting",
      "Load & material management",
      "Pre-start inspections",
    ],

    img: "/mining.jpg",
  },
];

export interface Accreditation {
  id: string;
  /** Full authority name — also used as the logo's alt text. */
  name: string;
  logo: string;
  width: number;
  height: number;
  /**
   * True when the supplied logo is light-on-transparent and can sit straight
   * on a dark panel; false when it needs a white plate behind it.
   */
  logoOnDark: boolean;
}

/** Accrediting bodies — used in the "Qualifications" section. */
export const ACCREDITATIONS: Accreditation[] = [
  {
    id: "hrdc",
    name: "Human Resource Development Council",
    logo: "/hrdc-logo.svg",
    width: 467,
    height: 261,
    logoOnDark: true,
  },
  {
    id: "bqa",
    name: "Botswana Qualifications Authority",
    logo: "/bqa-logo.jpg",
    width: 712,
    height: 631,
    logoOnDark: false,
  },
];

export interface Service {
  id: string;
  title: string;
  summary: string;
  img: string;
}

/** Services offered alongside the training catalogue — used in the "Our Services" section. */
export const SERVICES: Service[] = [
  {
    id: "driver-hire",
    title: "Driver Hire Agency",
    summary:
      "Vetted, licence-checked drivers placed with your operation — short-term cover or long-term placements across every vehicle category.",
    img: "/defensive.jpg",
  },
  {
    id: "vehicle-delivery",
    title: "Commercial Vehicle Deliveries & Collection",
    summary:
      "We deliver and collect commercial vehicles locally and across borders, so your fleet reaches site without tying up your own drivers.",
    img: "/trucks.jpg",
  },
  {
    id: "registration-bookings",
    title: "Vehicle Registration & Transport Tests",
    summary:
      "We handle commercial vehicle registration and arrange transport test appointments and bookings — the paperwork and queues are ours, not yours.",
    img: "/71713.jpg",
  },
];

export const TargetMarkets: string[] = [
  "Job seekers entering the trade",
  "Fleet operators",
  "Trucking companies",
  "Mining companies",
  "Parastatals",
  "Government departments",
  "Security & close protection",
  "Emergency services",
  "Vehicle dealerships",
  "Engineering & plant hire",
  "Private individuals",
  "Machine operators",
  "Construction companies",
  "Engineering companies",
  "Plant hire & compliance",
  "Local authorities",
  "Fleet & equipment operators",
];

/** Years the consultancy has been operating — headline stat in the courses promo. */
export const EXPERIENCE_YEARS = 20;

export interface PromoPoint {
  /** Also selects the icon in `CoursesPromo`, so keep the union in sync. */
  id: "accredited" | "on-site" | "trainers" | "short-courses";
  title: string;
  body: string;
}

/** Selling points shown in the promo band on the /courses page. */
export const PROMO_POINTS: PromoPoint[] = [
  {
    id: "accredited",
    title: "BQA accredited",
    body: "Every programme is accredited by the Botswana Qualifications Authority, so the certificates your team earns stand up to any audit.",
  },
  {
    id: "on-site",
    title: "We come to you",
    body: "Training runs at your premises, on your own vehicles and plant — no travel costs, no fleet sitting idle in someone else's yard.",
  },
  {
    id: "trainers",
    title: "Highly qualified trainers",
    body: "Instructors who have spent their careers in the cab and on site, and who assess to the same standard every single time.",
  },
  {
    id: "short-courses",
    title: "Short courses",
    body: "Most programmes take a few days from start to certification, so operators are back on the job in the same week.",
  },
];

export interface PromoSector {
  /** Also selects the icon in `CoursesPromo`, so keep the union in sync. */
  id: "commercial" | "government" | "mining" | "industrial";
  label: string;
}

/** Sectors the courses are shaped around — the wide band in the courses promo. */
export const PROMO_SECTORS: PromoSector[] = [
  { id: "commercial", label: "Commercial companies" },
  { id: "government", label: "Government & parastatals" },
  { id: "mining", label: "Mining sector" },
  { id: "industrial", label: "Industrial & plant" },
];

export interface FAQ {
  question: string;
  answer: string;
}

/** Frequently asked questions — used in the FAQ section above the footer. */
export const FAQS: FAQ[] = [
  {
    question: "Is your training accredited?",
    answer:
      "Yes. E&E Driver Training Consultancy is BQA accredited and HRDC registered and gives you audit-ready certification for your drivers and operators.",
  },
  {
    question: "Do you train at our premises, or do we come to you?",
    answer:
      "We come to you. Our instructors travel to your site anywhere in Botswana and train on your own vehicles or plant, so drivers learn on the equipment they actually operate.",
  },
  {
    question: "What courses do you offer?",
    answer:
      "Advanced Defensive Driving, Emergency & VIP Vehicle Operation, Commercial Vehicle Handover & Product Training, and Operating Earth-Moving Machines — covering everything from motorbikes and light vehicles to extra heavy-duty trucks and mining plant.",
  },
  {
    question: "How long does each course take?",
    answer:
      "It depends on the programme — earth-moving competency training runs 24 hours, while defensive driving is spread over 3 days. We schedule sessions around your operation so training doesn't stall your fleet.",
  },
  {
    question: "Who is the training suitable for?",
    answer:
      "Fleet operators, trucking, mining and construction companies, parastatals, local authorities, security companies, dealerships and government agencies — as well as private individuals. Group size and content are tailored to whoever we're training.",
  },
  {
    question: "How do we book a course or get a quote?",
    answer:
      "Send us your fleet size, licence categories and preferred dates over WhatsApp — the fastest way to reach us — or by email, and we'll come back with a recommended programme and schedule.",
  },
];

/** Industries and sectors served — used in the "Who we train" section. */
export const INDUSTRIES: string[] = [
  "Fleet operators",
  "Trucking companies",
  "Mining companies",
  "Construction companies",
  "Parastatals",
  "Local authorities",
  "Government departments",
  "Security & close protection",
  "Emergency services",
  "Vehicle dealerships",
  "Engineering & plant hire",
  "Private individuals",
];

/** Short reassurances shown under the heading on the /contact page. */
export const CONTACT_ASSURANCES: string[] = [
  "Reply within one business day",
  "On-site training, nationwide",
  "BQA & HRDC accredited",
];
