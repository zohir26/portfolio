import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Header,Footer/Navbar';
import Contact from './Contact';

const ProjectDetails = () => {
  const { state } = useLocation(); // Retrieve the passed state containing project details
  const project = state?.project; // Destructure the project from state

  if (!project) {
    return <p>No project details available.</p>;
  }

  return (
    <>
      <Navbar />
      <div className="p-8 bg-[#0a192f] text-gray-300 min-h-screen">
        <h2 className="text-4xl font-bold text-center text-[#64ffda] mb-12 md:text-5xl">
          {project.projectName}
        </h2>

        <div className="bg-[#112240] rounded-lg shadow-lg overflow-hidden md:w-4/5 mx-auto p-6">
          <img
            src={project.image}
            alt={project.projectName}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <div className="p-4">
            <p className="text-gray-400 mb-6 text-lg">{project.description}</p>

            <h4 className="text-xl font-semibold text-[#64ffda] mb-4">Tools Used</h4>
            <div className="flex flex-wrap gap-3 mb-6 justify-center items-center">
              {project.tools.map((tool, i) => (
                <span
                  key={i}
                  className="bg-[#64ffda] text-[#0a192f] text-sm px-4 py-2 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>

            {project.github && (
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-[#64ffda] mb-2">GitHub Repository</h4>
                <a
                  href={project.githubRepository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#64ffda] hover:underline text-lg"
                >
                  {project.github}
                </a>
              </div>
            )}

            {project.challenges && (
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-[#64ffda] mb-2">Challenges</h4>
                <p className="text-lg text-gray-400">{project.challenges}</p>
              </div>
            )}

            {project.futurePlans && (
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-[#64ffda] mb-2">Future Plans</h4>
                <p className="text-lg text-gray-400">{project.futurePlans}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default ProjectDetails;
