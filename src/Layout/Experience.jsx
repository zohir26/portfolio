import React, { useEffect, useState } from "react";

const Experience = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    // Fetch experience data from the local JSON file
    fetch("/experience.json") 
      .then((res) => res.json())
      .then((data) => setExperience(data.workExperience))
      .catch((error) => console.error("Error fetching experience data:", error));
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-16 px-6 lg:px-24">
      <h2 className="text-4xl font-bold  mb-12 text-pink-500">🚀 Work Experience</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {experience.length > 0 ? (
          experience.map((job, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
              {/* Job Title & Company */}
              <h3 className="text-2xl font-semibold text-blue-400">{job.title}</h3>
              <p className="text-gray-300 text-lg mb-2">{job.company}</p>
              <p className="text-gray-400 text-sm italic">{job.duration}</p>

              {/* Responsibilities */}
              <ul className="mt-4 space-y-2">
                {job.responsibilities.map((task, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="text-pink-400 mr-2">✔</span> {task}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-300 text-lg">Loading experience data...</p>
        )}
      </div>
    </div>
  );
};

export default Experience;
