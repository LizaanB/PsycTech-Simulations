export default function AboutPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p>PSYC Tech Simulators builds premium simulator containers for immersive training and event activations.</p>
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-zinc-200 bg-white p-5">
          <h2 className="mb-2 text-xl font-semibold">Our Vision</h2>
          <p>Deliver mobile simulation infrastructure that performs in any venue.</p>
        </article>
        <article className="rounded-xl border border-zinc-200 bg-white p-5">
          <h2 className="mb-2 text-xl font-semibold">Manufacturing Process</h2>
          <p>In-house fabrication, fit-out, simulation hardware integration, and QA testing.</p>
        </article>
      </div>
    </section>
  );
}
