const filters = ["Racing", "Shooting", "Events", "Corporate"];

export default function GalleryPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Gallery</h1>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button key={filter} className="rounded-full border border-zinc-300 px-3 py-1 text-sm" type="button">
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="flex h-44 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-500">
            Media Item {index + 1}
          </div>
        ))}
      </div>
    </section>
  );
}
