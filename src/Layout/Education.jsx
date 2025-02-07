import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    // Fetch the education data from the JSON file
    fetch("/education.json")
      .then((res) => res.json())
      .then((data) => setEducation(data))
      .catch((error) => console.error("Error fetching education data:", error));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-pink-400">
        🎓 My Education
      </h2>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-1 gap-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }} // Scale up on hover
            transition={{ type: "spring", stiffness: 200, damping: 10 }} // Smooth animation
            className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700"
          >
            <h3 className="text-2xl font-semibold text-blue-400">{edu.institution}</h3>
            <p className="text-lg text-gray-300 mt-2">{edu.degree}</p>
            <p className="text-gray-400 mt-1">{edu.year}</p>
            <p className="text-pink-400 font-bold mt-2">{edu.result}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
