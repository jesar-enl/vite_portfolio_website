const projects = [
  {
    id: 1,
    title: 'Online Receipt Generator',
    description:
      'This application is an online receipt generator created using HTML, CSS, and vanilla JavaScript. It creates a receipt with an automated receipt number.',
    image: 'https://jessek10.netlify.app/assets/images/proj-1.png',
    deployedLink: 'https://kaneweldingcenter-receipt.netlify.app/',
    sourceCodeLink: 'https://github.com/jesar-enl/jesar-enl.github.io',
  },
  {
    id: 2,
    title: 'To-do Application',
    description:
      'This is a react application that is created to align to-do tasks. It can be helpful in managing your undone tasks, creating more tasks.',
    image: '/todo.png',
    deployedLink: 'https://react-todo-appl.netlify.app/',
    sourceCodeLink: 'https://github.com/jesar-enl/react-todo-app',
  },
];

const Projects = () => {
  return (
    <div
      className="grid pb-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      id="projects"
    >
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 bg-gray-400">
            <h2 className="text-2xl tracking-tight text-gray-900 font-semibold mb-2">
              {project.title}
            </h2>
            <p className="text-gray-700 text-base mb-3">
              {project.description}
            </p>
            <div className="mt-4 flex justify-between">
              <a
                href={project.deployedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                View App
              </a>
              <a
                href={project.sourceCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                View Source
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
