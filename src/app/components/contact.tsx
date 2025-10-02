"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false); // ✅ loading state

  const SERVICE_ID = "service_tc3t5vi";
  const TEMPLATE_ID = "template_7goiwi3";
  const AUTOREPLY_TEMPLATE_ID = "template_9ewtxkj";
  const USER_ID = "1_R_VBcdknjIZoM-Z";

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true); // start loading
    setStatus("");    // clear previous status

    const formData = new FormData(form.current);
    const user_name = formData.get("user_name")?.toString() || "";
    const user_email = formData.get("user_email")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, {
        name: user_name,
        email: user_email,
        title: "Contact Us",
        message: message,
      }, USER_ID)
      .then(
        (result) => {
          console.log("Message sent to you:", result.text);

          // Send auto-reply to user
          emailjs.send(SERVICE_ID, AUTOREPLY_TEMPLATE_ID, {
            email: user_email,
          }, USER_ID)
          .then(() => console.log("Auto-reply sent to user"))
          .catch((error) => console.error("Auto-reply failed:", error.text));

          setStatus("✅ Message sent successfully! I’ll connect with you soon.");
          form.current?.reset();
        },
        (error) => {
          console.error("Failed:", error.text);
          setStatus("❌ Failed to send message. Please try again.");
        }
      )
      .finally(() => setLoading(false)); // stop loading
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-20 relative overflow-hidden bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f3460]"
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <p className="text-gray-300 mt-4 max-w-xl mx-auto">
          Have a project or just want to say hi? Fill out the form below and
          I’ll get back to you as soon as possible.
        </p>
      </motion.div>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-3xl flex flex-col gap-6 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="flex-1 px-4 py-3 rounded-xl bg-black/20 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="flex-1 px-4 py-3 rounded-xl bg-black/20 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          rows={6}
          className="w-full px-4 py-3 rounded-xl bg-black/20 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition resize-none"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="relative flex items-center justify-center self-start px-6 py-3 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>

        {status && (
          <p className="mt-2 text-center text-green-400 font-medium">{status}</p>
        )}
      </motion.form>
    </section>
  );
}
