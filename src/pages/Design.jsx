export default function Design() {
  return (
    <div className="min-h-screen px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">Design</h1>
        <p className="text-xl text-gray-300 mb-12">
          My design work and projects go here.
        </p>
        {/* Add your design portfolio content here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="aspect-square bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-600 to-gray-800">
                <span className="text-white text-xl font-semibold">Design {item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
