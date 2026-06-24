const dashboardItems = ["Quote Status", "Invoices", "Brochures", "Delivery & Installation Tracking", "Project Manager Messages"];

export default function DashboardPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Client Dashboard</h1>
      <p className="text-zinc-700">Authenticated clients can track active enquiries and projects here.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dashboardItems.map((item) => (
          <article key={item} className="rounded-xl border border-zinc-200 bg-white p-5">
            <h2 className="font-semibold">{item}</h2>
          </article>
        ))}
      </div>
    </section>
  );
}
