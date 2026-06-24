import Link from "next/link";

const benefits = [
  "Mobile & Modular",
  "Custom Branding",
  "Event Ready",
  "Premium Build Quality",
];

export default function Home() {
  return (
    <section className="space-y-10">
      <div className="grid gap-8 rounded-2xl bg-zinc-900 p-8 text-zinc-100 md:grid-cols-2">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">PSYC Tech Simulators</p>
          <h1 className="text-4xl font-bold leading-tight">Built for Speed. Engineered for Immersion.</h1>
          <p className="text-zinc-300">
            High-impact simulator containers for corporate activations, training, and immersive entertainment.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/quote" className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold">
              Request Quote
            </Link>
            <Link href="/booking" className="rounded-md border border-zinc-500 px-4 py-2 text-sm font-semibold">
              Book Demo
            </Link>
            <Link href="/simulators" className="rounded-md border border-zinc-500 px-4 py-2 text-sm font-semibold">
              View Simulators
            </Link>
          </div>
        </div>
        <div className="flex min-h-56 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800 text-center text-zinc-400">
          Simulator Hero Video/Image Placeholder
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit) => (
          <article key={benefit} className="rounded-xl border border-zinc-200 bg-white p-5">
            <h2 className="font-semibold">{benefit}</h2>
          </article>
        ))}
      </div>
    </section>
  );
}
