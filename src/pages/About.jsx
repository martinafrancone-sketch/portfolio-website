export default function About() {
  return (
    <div className="min-h-screen px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">About Me</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-6">
            Welcome to my portfolio. I'm a creative designer and illustrator passionate about creating beautiful and meaningful work.
          </p>
          <p className="text-xl text-gray-300 mb-6">
            With experience in both design and illustration, I bring ideas to life through visual storytelling and creative problem-solving.
          </p>
          <p className="text-xl text-gray-300">
            Feel free to explore my work and get in touch if you'd like to collaborate!
          </p>
        </div>
      </div>
    </div>
  );
}
