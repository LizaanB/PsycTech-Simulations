const roadmap = [
  "Online Simulator Configurator with instant pricing",
  "VR Integration",
  "Live Event Calendar",
];

export default function FutureFeaturesPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Future Features</h1>
      <ul className="list-inside list-disc rounded-xl border border-zinc-200 bg-white p-5">
        {roadmap.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
