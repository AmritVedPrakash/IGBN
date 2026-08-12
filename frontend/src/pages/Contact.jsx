import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Send,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const submit = async (data) => {
    console.log("Contact Form:", data);

    /*
      Replace this with your API/email service later.
    */

    await new Promise((resolve) => setTimeout(resolve, 800));

    setSubmitted(true);

    reset();

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <main className="relative overflow-hidden">
      {/* Background */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[450px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-purple-600/15
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-[500px]
          h-[350px]
          w-[350px]
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      {/* Hero */}

      <section className="relative px-6 pb-16 pt-36">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-7xl"
        >
          <div
            className="
              flex
              items-center
              gap-2
              text-sm
              font-medium
              uppercase
              tracking-[0.2em]
              text-cyan-400
            "
          >
            <Sparkles size={16} />
            Let's Build Something
          </div>

          <h1
            className="
              mt-5
              max-w-4xl
              text-5xl
              font-bold
              leading-tight
              sm:text-6xl
              lg:text-7xl
            "
          >
            Have an idea?
            <span className="gradient-text"> Let's make it real.</span>
          </h1>

          <p
            className="
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-gray-400
            "
          >
            Tell us about your project, idea or business challenge. Our team
            will help you find the right technology solution.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}

      <section className="relative px-6 pb-28">
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-10
            lg:grid-cols-[0.8fr_1.2fr]
          "
        >
          {/* Contact Information */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-7
              backdrop-blur-md
              sm:p-10
            "
          >
            <span
              className="
                text-sm
                font-semibold
                uppercase
                tracking-widest
                text-purple-400
              "
            >
              Get in touch
            </span>

            <h2
              className="
                mt-4
                text-3xl
                font-bold
                sm:text-4xl
              "
            >
              Let's talk about your project.
            </h2>

            <p
              className="
                mt-5
                leading-7
                text-gray-400
              "
            >
              Whether you're building a startup, launching a new product or
              improving an existing system, we'd love to hear what you're
              working on.
            </p>

            <div className="mt-10 space-y-6">
              {/* Email */}

              <a
                href="mailto:hello@anklegaming.com"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  text-gray-300
                  transition
                  hover:text-white
                "
              >
                <span
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-purple-500/10
                    text-purple-400
                  "
                >
                  <Mail size={21} />
                </span>

                <div>
                  <p className="text-sm text-gray-500">Email</p>

                  <p className="mt-1">hello@anklegaming.com</p>
                </div>
              </a>

              {/* Phone */}

              <a
                href="tel:+910000000000"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  text-gray-300
                  transition
                  hover:text-white
                "
              >
                <span
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-cyan-500/10
                    text-cyan-400
                  "
                >
                  <Phone size={21} />
                </span>

                <div>
                  <p className="text-sm text-gray-500">Phone</p>

                  <p className="mt-1">+91 00000 00000</p>
                </div>
              </a>

              {/* Location */}

              <div
                className="
                  flex
                  items-center
                  gap-4
                  text-gray-300
                "
              >
                <span
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-purple-500/10
                    text-purple-400
                  "
                >
                  <MapPin size={21} />
                </span>

                <div>
                  <p className="text-sm text-gray-500">Office</p>

                  <p className="mt-1">Delhi, India</p>
                </div>
              </div>
            </div>

            {/* Mini CTA */}

            <div
              className="
                mt-10
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-5
              "
            >
              <p className="text-sm text-gray-400">Typical response time</p>

              <p className="mt-1 font-semibold text-white">
                Within 1 business day
              </p>
            </div>
          </motion.div>

          {/* Form */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.04]
              p-6
              shadow-2xl
              backdrop-blur-md
              sm:p-10
            "
          >
            {submitted ? (
              <div
                className="
                  flex
                  min-h-[500px]
                  flex-col
                  items-center
                  justify-center
                  text-center
                "
              >
                <div
                  className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    bg-green-500/10
                    text-green-400
                  "
                >
                  <CheckCircle2 size={42} />
                </div>

                <h2
                  className="
                    mt-7
                    text-3xl
                    font-bold
                  "
                >
                  Message Sent!
                </h2>

                <p
                  className="
                    mt-4
                    max-w-md
                    leading-7
                    text-gray-400
                  "
                >
                  Thanks for reaching out. Our team will review your
                  requirements and get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(submit)} className="space-y-6">
                <div>
                  <h2
                    className="
                      text-3xl
                      font-bold
                    "
                  >
                    Start a conversation
                  </h2>

                  <p
                    className="
                      mt-2
                      text-gray-400
                    "
                  >
                    Share a few details and we'll take it from there.
                  </p>
                </div>

                {/* Name + Email */}

                <div
                  className="
                    grid
                    gap-5
                    sm:grid-cols-2
                  "
                >
                  <div>
                    <label className="mb-2 block text-sm text-gray-300">
                      Your Name
                    </label>

                    <input
                      {...register("name", {
                        required: "Please enter your name.",
                      })}
                      placeholder="John Doe"
                      className="
                        w-full
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.04]
                        px-5
                        py-4
                        text-white
                        outline-none
                        transition
                        placeholder:text-gray-600
                        focus:border-purple-500
                        focus:bg-white/[0.06]
                      "
                    />

                    {errors.name && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-300">
                      Email Address
                    </label>

                    <input
                      type="email"
                      {...register("email", {
                        required: "Please enter your email.",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email.",
                        },
                      })}
                      placeholder="john@company.com"
                      className="
                        w-full
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.04]
                        px-5
                        py-4
                        text-white
                        outline-none
                        transition
                        placeholder:text-gray-600
                        focus:border-cyan-500
                        focus:bg-white/[0.06]
                      "
                    />

                    {errors.email && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone */}

                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    {...register("phone")}
                    placeholder="+91 98765 43210"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      px-5
                      py-4
                      text-white
                      outline-none
                      transition
                      placeholder:text-gray-600
                      focus:border-purple-500
                      focus:bg-white/[0.06]
                    "
                  />
                </div>

                {/* Service */}

                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    What do you need?
                  </label>

                  <select
                    {...register("service")}
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-white/10
                      bg-[#101018]
                      px-5
                      py-4
                      text-gray-300
                      outline-none
                      focus:border-cyan-500
                    "
                  >
                    <option value="">Select a service</option>

                    <option value="mobile-app">Mobile App Development</option>

                    <option value="web">Web Development</option>

                    <option value="ai">AI Development</option>

                    <option value="software">Software Development</option>

                    <option value="uiux">UI/UX Design</option>

                    <option value="digital-marketing">Digital Marketing</option>
                  </select>
                </div>

                {/* Message */}

                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Project Details
                  </label>

                  <textarea
                    {...register("message", {
                      required: "Please tell us about your project.",
                      minLength: {
                        value: 20,
                        message: "Please provide at least 20 characters.",
                      },
                    })}
                    placeholder="Tell us about your idea, requirements, timeline or budget..."
                    rows={6}
                    className="
                      w-full
                      resize-none
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      px-5
                      py-4
                      text-white
                      outline-none
                      transition
                      placeholder:text-gray-600
                      focus:border-purple-500
                      focus:bg-white/[0.06]
                    "
                  />

                  {errors.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-gradient-to-r
                    from-purple-600
                    to-cyan-500
                    px-8
                    py-4
                    font-semibold
                    text-white
                    transition
                    hover:scale-[1.02]
                    hover:shadow-[0_0_35px_rgba(124,58,237,0.3)]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {isSubmitting ? "Sending..." : "Send Message"}

                  {!isSubmitting && (
                    <ArrowRight
                      size={19}
                      className="
                        transition
                        group-hover:translate-x-1
                      "
                    />
                  )}
                </button>

                <p
                  className="
                    text-center
                    text-xs
                    leading-5
                    text-gray-600
                  "
                >
                  By submitting this form, you agree to be contacted regarding
                  your project.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
