import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data.projects))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="p-8 bg-[#0a192f] text-gray-300 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-[#64ffda] mb-8">
        My Projects
      </h2>

      <motion.div
        className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 50 }} // Animation starts from below
        animate={{ opacity: 1, y: 0 }} // Fades in and moves to original position
        transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
      >
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }} // Scales up slightly on hover
              transition={{ type: "spring", stiffness: 200, damping: 10 }} // Bouncy feel
              className="bg-[#112240] rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              <img
                src={project.image}
                alt={project.projectName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-[#64ffda] mb-2">
                  {project.projectName}
                </h3>
                <p className="text-gray-400 mb-2 flex-grow">{project.description}</p>

                {/* Colorful Tools Section */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="bg-[#64ffda] text-[#0a192f] text-sm px-3 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* View Live Button (always at the bottom) */}
                <div className="mt-auto">
                  {project.liveLink ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block text-center bg-[#64ffda] text-[#0a192f] px-4 py-2 rounded hover:bg-[#4fc3a1]"
                    >
                      View Live
                    </a>
                  ) : (
                    <p className="text-gray-500 text-center">Live link not available</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-400">No projects available.</p>
        )}
      </motion.div>
    </div>
  );
};

export default Projects;
