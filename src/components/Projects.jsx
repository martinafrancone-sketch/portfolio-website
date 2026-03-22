export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A modern web application built with React and Tailwind CSS',
      tags: ['React', 'Tailwind CSS', 'JavaScript'],
      image: 'bg-blue-500',
      link: '#',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Full-stack application with Node.js backend and React frontend',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: 'bg-green-500',
      link: '#',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'E-commerce platform with responsive design and real-time updates',
      tags: ['React', 'Express', 'Firebase'],
      image: 'bg-purple-500',
      link: '#',
    },
    {
      id: 4,
      title: 'Project Four',
      description: 'Dashboard application with data visualization and analytics',
      tags: ['React', 'Chart.js', 'Tailwind CSS'],
      image: 'bg-pink-500',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills and expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105"
            >
              {/* Project Image */}
              <div className={`${project.image} h-40 flex items-center justify-center`}>
                <p className="text-white font-semibold">Project Image</p>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  className="inline-block text-blue-600 font-semibold hover:text-blue-700 transition"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
