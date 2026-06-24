export default function BookingPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Booking System</h1>
      <form className="grid gap-4 rounded-xl border border-zinc-200 bg-white p-6" action="/api/booking" method="post">
        <input name="eventDate" type="date" required className="rounded border border-zinc-300 p-2" />
        <input name="location" required placeholder="Event location" className="rounded border border-zinc-300 p-2" />
        <input name="name" required placeholder="Contact name" className="rounded border border-zinc-300 p-2" />
        <input name="email" type="email" required placeholder="Email" className="rounded border border-zinc-300 p-2" />
        <button className="rounded bg-blue-600 px-4 py-2 font-semibold text-white" type="submit">Check Availability</button>
      </form>
    </section>
  );
}
