/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Title from "./Title";

const Contact = () => {
  const description =
    "Ready to get started? Feel free to reach out through the contact form, and let's embark on a journey of innovation and success.";

  const contactForm = useRef<HTMLFormElement | null>(null);

  const [msg, setMsg] = useState({
    success: "",
    error: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validate = () => {
    const form = contactForm.current;
    const newErrors = { name: "", email: "", message: "" };

    if (!form) return false;

    const name = form.querySelector('input[name="name"]') as HTMLInputElement;
    const email = form.querySelector('input[name="email"]') as HTMLInputElement;
    const message = form.querySelector(
      'textarea[name="message"]',
    ) as HTMLInputElement;

    if (!name?.value.trim()) {
      newErrors.name = "Full name is required";
    }
    if (!message?.value.trim()) {
      newErrors.message = "Message is required";
    }
    if (
      !email?.value.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email?.value)
    ) {
      newErrors.email = "Valid email is required";
    }

    setErrors(newErrors);

    setTimeout(() => {
      setErrors({
        name: "",
        email: "",
        message: "",
      });
    }, 4000);

    const isValid = Object.values(newErrors).every((error) => error === "");
    return isValid;
  };

  const handleSendMsg = (e: any) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_3qcsvax",
        "template_hcr632k",
        contactForm.current!,
        "eBMzf3NK0d_zG7aiL",
      )
      .then(() => {
        setMsg((prev: any) => ({
          ...prev,
          success: "Message sent successfully. You will hear from me soon!",
          error: "",
        }));
      })
      .catch(() => {
        setMsg((prev: any) => ({
          ...prev,
          error: "Something went wrong. Please try again!",
          success: "",
        }));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="parent parent2 py-20">
      <div className="max-w-7xl mx-auto">
        <Title
          title1="Contact"
          title2="Let’s Build Something Together"
          description={description}
        />

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="contact-card p-8 text-slate-100">
            <h3 className="md:text-2xl text-xl font-semibold text-white">
              Contact information
            </h3>
            <p className="mt-3 text-slate-400 text-sm">
              Fill out the form and I will get back to you within 24 hours.
            </p>

            <div className="mt-8 space-y-5 text-slate-300">
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <i className="fa fa-phone" />
                </div>
                <div>
                  <p className="sm:text-sm text-xs uppercase tracking-[0.3em] text-violet-300/75">
                    Call
                  </p>
                  <p className="text-sm">+234 814 5354 884</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <i className="fa fa-envelope" />
                </div>
                <div>
                  <p className="sm:text-sm text-xs uppercase tracking-[0.3em] text-violet-300/75">
                    Email
                  </p>
                  <p className="text-sm">oladimejiagbaje144@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <i className="fa fa-map-marker" />
                </div>
                <div>
                  <p className="sm:text-sm text-xs uppercase tracking-[0.3em] text-violet-300/75">
                    Location
                  </p>
                  <p className="text-sm">Lagos State, Nigeria</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/agbaje-oladimeji-672ba823a/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white transition hover:bg-violet-500"
              >
                <i className="fa fa-linkedin" />
              </a>
              <a
                href="https://github.com/ola144/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white transition hover:bg-violet-500"
              >
                <i className="fa fa-github" />
              </a>
              <a
                href="https://www.instagram.com/gbolahanagbaje?igsh=YzljYTk1ODg3Zg=="
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white transition hover:bg-violet-500"
              >
                <i className="fa fa-instagram" />
              </a>
            </div>
          </div>

          <div className="contact-card p-8">
            <form ref={contactForm}>
              <div className="space-y-6">
                <div>
                  <label
                    className="block text-sm font-semibold text-slate-300"
                    htmlFor="firstName"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="name"
                    className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none focus:border-violet-500"
                    placeholder="eg. Lucas Jones"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-rose-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    className="block text-sm font-semibold text-slate-300"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none focus:border-violet-500"
                    placeholder="eg. lucas@gmail.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-rose-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    className="block text-sm font-semibold text-slate-300"
                    htmlFor="message"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none focus:border-violet-500 resize-none"
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-rose-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                {msg.error && (
                  <p className="text-sm text-rose-400">{msg.error}</p>
                )}
                {msg.success && (
                  <p className="text-sm text-emerald-400">{msg.success}</p>
                )}

                <button
                  className={`btn-primary ${loading ? "cursor-not-allowed opacity-80" : ""}`}
                  type="button"
                  onClick={handleSendMsg}
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
