const specs = [
  ["Container Dimensions", "12m x 2.4m x 3m"],
  ["Materials", "Marine-grade steel, acoustic interior panels"],
  ["Electrical", "Single or three-phase options"],
  ["Lighting", "RGBW programmable overhead and accent strips"],
  ["Transport", "Flatbed compatible, crane-lift points included"],
  ["Installation", "Level hardstand and 32A/63A power feed"],
];

export default function SpecificationsPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Specifications</h1>
      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
        <table className="w-full text-left">
          <tbody>
            {specs.map(([label, value]) => (
              <tr key={label} className="border-t border-zinc-200 first:border-t-0">
                <th className="w-1/3 p-4 font-semibold">{label}</th>
                <td className="p-4">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex gap-3">
        <a className="rounded-md border border-zinc-300 px-4 py-2" href="/brochures/racing.pdf">
          Download Racing Brochure
        </a>
        <a className="rounded-md border border-zinc-300 px-4 py-2" href="/brochures/shooting.pdf">
          Download Shooting Brochure
        </a>
      </div>
    </section>
  );
}
