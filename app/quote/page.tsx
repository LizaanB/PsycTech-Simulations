export default function QuotePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Quote System</h1>
      <form className="grid gap-4 rounded-xl border border-zinc-200 bg-white p-6" action="/api/quote" method="post">
        <input name="simulatorType" required placeholder="Simulator type" className="rounded border border-zinc-300 p-2" />
        <input name="units" required type="number" min={1} placeholder="Number of units" className="rounded border border-zinc-300 p-2" />
        <input name="branding" placeholder="Branding required" className="rounded border border-zinc-300 p-2" />
        <select name="mode" className="rounded border border-zinc-300 p-2">
          <option>Rental</option>
          <option>Purchase</option>
        </select>
        <input name="duration" placeholder="Event duration" className="rounded border border-zinc-300 p-2" />
        <input name="location" required placeholder="Location" className="rounded border border-zinc-300 p-2" />
        <button className="rounded bg-blue-600 px-4 py-2 font-semibold text-white" type="submit">Send to Sales Team</button>
      </form>
    </section>
  );
}
