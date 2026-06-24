const modules = ["Leads", "Quotes", "Projects", "Rentals", "Gallery", "Customer Database"];

export default function AdminPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Portal</h1>
      <p className="text-zinc-700">Role-protected management interface for internal operations.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => (
          <article key={module} className="rounded-xl border border-zinc-200 bg-white p-5">
            <h2 className="font-semibold">{module}</h2>
          </article>
        ))}
      </div>
    </section>
  );
}
