
export default function Home() {
  return (
    <main className="flex flex-col gap-12" style={{ color: '#E1E1E1' }}>
      <section
        className="mx-auto w-full max-w-6xl bg-black"
        style={{ padding: '48px', color: '#E1E1E1' }}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Hi, I’m Martina.
          <br />
          I’m a senior product designer and illustrator, based in London, UK.
        </h1>
      </section>

      <section className="mx-auto w-full max-w-6xl p-12 grid gap-8 lg:grid-cols-2" style={{ padding: '48px' }}>
        <div className="bg-black p-6" style={{ borderRadius: '8px' }}>
          <p className="text-lg leading-relaxed" style={{ color: '#E1E1E1', fontFamily: 'Roboto, sans-serif' }}>
            I specialise in end-to-end journeys and product strategy for media and creative platforms - across tv, film, audio & music production.
          </p>
        </div>

        <div className="grid gap-6">
          {[1, 2, 3].map((project) => (
            <div
              key={project}
              className="p-4"
              style={{ border: '1px solid #E1E1E1', borderRadius: '8px', background: '#0A0809' }}
            >
              <div className="aspect-square mb-4" style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #E1E1E1' }}>
                <img
                  src={`/placeholder-${project}.jpg`}
                  alt={`Project ${project}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                className="px-4 py-2"
                style={{
                  border: '1px solid #E1E1E1',
                  borderRadius: '6px',
                  backgroundColor: 'transparent',
                  color: '#E1E1E1',
                  fontFamily: 'Roboto, sans-serif',
                }}
              >
                view project
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
