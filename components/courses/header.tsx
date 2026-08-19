import Image from "next/image";

export default function CourseHeader() {
  return (
    <section className="relative w-full h-60">
      <Image
        src="/71727.jpg"
        alt="E&amp;E Driver Training Consultancy — accredited driver training in Botswana"
        fill
        className="z-0 object-cover"
      />
      <div className="absolute inset-0 z-0 bg-black/60" />
      <div className="absolute inset-0 w-full h-full flex items-center justify-center z-10">
        <p className="font-sans eyebrow text-sm uppercase text-accent-400">
          · Driver Training Courses ·
        </p>
      </div>
    </section>
  );
}
