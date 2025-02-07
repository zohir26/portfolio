import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const handleEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5b1v6xq", // Your EmailJS Service ID
        "template_3e5y5ca", // Your EmailJS Template ID
        form.current,
        "J6bgfEotnYncuhfvL" // Your Public Key
      )
      .then(
        () => {
          Swal.fire({
            title: "Success!",
            text: "Thank you for your email. I will reply to you soon!",
            icon: "success",
            confirmButtonColor: "#64ffda",
          });
          form.current.reset(); // Reset form after success
        },
        (error) => {
          Swal.fire({
            title: "Error!",
            text: "Failed to send message. Please try again.",
            icon: "error",
            confirmButtonColor: "#ff4d4d",
          });
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a192f] text-gray-300 py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-[#64ffda] mb-8">
        📬 Contact Me
      </h2>

      <motion.div
        className="w-full max-w-lg bg-[#112240] p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <form ref={form} onSubmit={handleEmail} className="space-y-6">
          <div>
            <label className="block text-gray-400 text-sm font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Enter your name"
              className="w-full p-3 bg-[#0a192f] text-gray-300 border border-gray-600 rounded focus:ring-2 focus:ring-[#64ffda] outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-400 text-sm font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="Enter your email"
              className="w-full p-3 bg-[#0a192f] text-gray-300 border border-gray-600 rounded focus:ring-2 focus:ring-[#64ffda] outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-400 text-sm font-semibold mb-1">
              Message
            </label>
            <textarea
              name="message"
              required
              placeholder="Write your message..."
              rows="5"
              className="w-full p-3 bg-[#0a192f] text-gray-300 border border-gray-600 rounded focus:ring-2 focus:ring-[#64ffda] outline-none"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-[#64ffda] text-[#0a192f] font-semibold py-3 rounded-lg hover:bg-[#4fc3a1] transition-all"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;