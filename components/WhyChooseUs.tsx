import SectionHeading from "./SectionHeading";
import { IoSchool, IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaLocationDot, FaUsers, FaTruckMoving } from "react-icons/fa6";
import { FaRoute } from "react-icons/fa";

const REASONS = [
  {
    icon: IoSchool,
    title: "Quality Services",
    body: "We provide local and international commercial vehicle collection and delivery, plus registration, tests and bookings.",
  },
  {
    icon: FaLocationDot,
    title: "We come to you",
    body: "As a mobile consultancy we train on your premises, on your vehicles, anywhere in Botswana — minimising downtime.",
  },
  {
    icon: FaUsers,
    title: "Seasoned instructors",
    body: "Over 20 years developing drivers across government departments, parastatals and private companies.",
  },
  {
    icon: FaTruckMoving,
    title: "Every category",
    body: "From motorbikes and light vehicles to buses, extra heavy-duty combinations and earth-moving plant.",
  },
  {
    icon: IoShieldCheckmarkSharp,
    title: "Safety first",
    body: "Defensive, hazard-focused methods that reduce incidents, protect people and lower operating costs.",
  },
  {
    icon: FaRoute,
    title: "For everyone",
    body: "We cater for large fleets, small teams and private individuals alike — the same standard for all.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="scroll-mt-20 bg-brand-950 py-20 text-white sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why partner with us"
          title="A training partner built for serious operators"
          intro="Organisations that run demanding fleets choose us because the standard is consistent, the delivery is convenient and the credentials hold up."
          tone="inverted"
        />

        <div className="mt-12 grid grid-cols-1  overflow-hidden rounded-2xl border border-white/20 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, body }) => (
            <div key={title} className=" border border-white/10 p-6">
              <span className="flex h-12 w-12 items-center justify-center  text-accent-400">
                <Icon className="h-10 w-10" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-100">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
