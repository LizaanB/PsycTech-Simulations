export default function ContactPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Contact</h1>
      <form className="grid gap-4 rounded-xl border border-zinc-200 bg-white p-6" action="/api/quote" method="post">
        <input name="name" required placeholder="Name" className="rounded border border-zinc-300 p-2" />
        <input name="email" type="email" required placeholder="Email" className="rounded border border-zinc-300 p-2" />
        <textarea name="message" required placeholder="Message" className="rounded border border-zinc-300 p-2" rows={5} />
        <button className="rounded bg-blue-600 px-4 py-2 font-semibold text-white" type="submit">Send</button>
      </form>
      <div className="space-y-2">
        <p><strong>WhatsApp:</strong> <a href="https://wa.me/27000000000">Chat on WhatsApp</a></p>
        <p><strong>Phone:</strong> +27 00 000 0000</p>
        <p><strong>Email:</strong> sales@psyctechsimulators.com</p>
        <p><strong>Map:</strong> <a href="https://maps.google.com" target="_blank" rel="noreferrer">Open Google Maps</a></p>
      </div>
    </section>
  );
}
