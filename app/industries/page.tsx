const industries = [
  "Corporate Events",
  "Shopping Centres",
  "Schools & Universities",
  "Military Training",
  "Security Training",
  "Gaming Centres",
  "Motorsport Events",
];

export default function IndustriesPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Industries Served</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => (
          <article key={industry} className="rounded-xl border border-zinc-200 bg-white p-5">
            <h2 className="font-semibold">{industry}</h2>
          </article>
        ))}
      </div>
    </section>
  );
}
