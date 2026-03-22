export default function Homepage() {
  // Placeholder image URLs - replace with your actual images
  const images = [
    '/placeholder-1.jpg',
    '/placeholder-2.jpg',
    '/placeholder-3.jpg',
    '/placeholder-4.jpg',
    '/placeholder-5.jpg',
    '/placeholder-6.jpg',
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="relative w-full max-w-4xl">
        {/* Center Heading */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Welcome to My Portfolio
          </h1>
        </div>

        {/* Images Grid - 6 images arranged around center */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={image}
                alt={`Portfolio work ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
