"use client";

import { FormEvent, useState } from "react";
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa6";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Thanks! Your message has been captured locally. Wire this up to an API or email service when ready.");
    }, 600);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Contact Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <p className="text-lg text-foreground/80">
            I would love to hear from you! Reach out through the form or via my social media and contact channels.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaFacebook className="text-2xl text-blue-600" />
              <a href="https://www.facebook.com/rayen.askri.az/" target="_blank" className="hover:underline">
                facebook.com/yourprofile
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaInstagram className="text-2xl text-pink-500" />
              <a href="https://www.instagram.com/rayen_askry/" target="_blank" className="hover:underline">
                instagram.com/yourprofile
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-2xl text-green-600" />
              <span>rayen.askri142@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-2xl text-foreground" />
              <span>+216 23 163 025</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full rounded-md border border-foreground/20 bg-background px-3 py-2"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full rounded-md border border-foreground/20 bg-background px-3 py-2"
          />
          <textarea
            name="message"
            required
            rows={6}
            placeholder="Your Message..."
            className="w-full rounded-md border border-foreground/20 bg-background px-3 py-2"
          />
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center w-full rounded-md bg-foreground text-background px-5 py-2.5 font-medium hover:opacity-90 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
