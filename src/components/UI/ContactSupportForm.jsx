"use client";
import React, { useState } from "react";

const ContactSupportForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can connect your API to send the message
    alert(`Message sent by ${formData.name}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-800 p-5 rounded">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
        className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
        className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        rows={5}
        required
        className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
      ></textarea>

      <input
        type="submit"
        value="Send Message"
        className="px-6 py-3 bg-teal-500 w-full font-semibold rounded-md hover:opacity-90 transition cursor-pointer"
      />
    </form>
  );
};

export default ContactSupportForm;
