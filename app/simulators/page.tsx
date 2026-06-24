import ContainerViewer from "@/components/ContainerViewer";

const simulators = [
  {
    name: "Racing Simulator Container",
    dimensions: "12m x 2.4m x 3m",
    specs: "Motion-ready rigs, 240V supply, LED race telemetry",
    upgrades: "Motion platform, extra rigs, broadcast package",
  },
  {
    name: "Target Shooting Simulator Container",
    dimensions: "12m x 2.4m x 3m",
    specs: "Ballistics software, recoil-enabled devices, safety briefing mode",
    upgrades: "Scenario packs, tactical instructor mode, analytics dashboard",
  },
];

export default function SimulatorsPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">Simulator Containers</h1>
      <div className="grid gap-5 md:grid-cols-2">
        {simulators.map((sim) => (
          <article key={sim.name} className="space-y-2 rounded-xl border border-zinc-200 bg-white p-6">
            <h2 className="text-xl font-semibold">{sim.name}</h2>
            <p><strong>Dimensions:</strong> {sim.dimensions}</p>
            <p><strong>Technical Specs:</strong> {sim.specs}</p>
            <p><strong>Optional Upgrades:</strong> {sim.upgrades}</p>
            <p className="text-sm text-zinc-600">Pricing available via quote request form.</p>
          </article>
        ))}
      </div>
      <ContainerViewer />
    </section>
  );
}
