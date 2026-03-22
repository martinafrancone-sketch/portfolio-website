export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm a passionate developer with expertise in building modern web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              I specialize in crafting responsive, user-friendly web applications using modern technologies like React, Node.js, and Tailwind CSS. With a passion for clean code and intuitive design, I focus on delivering solutions that not only meet requirements but exceed expectations.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              My journey in web development has equipped me with skills in frontend and backend technologies, allowing me to work across the entire development stack.
            </p>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-semibold text-gray-900">Frontend</p>
                  <p className="text-sm text-gray-600">React, Tailwind CSS, JavaScript</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-semibold text-gray-900">Backend</p>
                  <p className="text-sm text-gray-600">Node.js, Express, APIs</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-semibold text-gray-900">Tools</p>
                  <p className="text-sm text-gray-600">Git, Vite, npm, VS Code</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-semibold text-gray-900">Design</p>
                  <p className="text-sm text-gray-600">Responsive Design, UI/UX</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg h-80 flex items-center justify-center">
            <p className="text-white text-lg font-semibold">Your Photo Here</p>
          </div>
        </div>
      </div>
    </section>
  );
}
