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
      <div className="absolute inset-0 z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center">
        <p className="font-sans eyebrow text-sm uppercase text-accent-400">
          · What we teach ·
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl">
          Driver &amp; Operator Training Courses
        </h1>
      </div>
    </section>
  );
}
