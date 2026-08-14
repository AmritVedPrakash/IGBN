import React from "react";
import { motion } from "framer-motion";

import {
  User,
  Mail,
  Phone,
  Building2,
  Briefcase,
  Globe,
  MapPin,
  ShieldCheck,
  ChevronDown,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import {
  businessTypes,
  countries,
  states,
  cities,
} from "../../data/basicDetailsData";

export default function BasicDetails({ next, back, updateData, data }) {
  const inputClass = `
w-full
h-11
border
border-[#dfe3eb]
rounded-lg
px-4
text-sm
outline-none
focus:border-[#dfa62f]
transition
`;

  return (
    <section
      className="
min-h-screen
bg-[#fafbff]
py-10
"
    >
      <div
        className="
max-w-[1200px]
mx-auto
px-5
"
      >
        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
text-center
mb-7
"
        >
          <h1
            className="
text-3xl
md:text-4xl
font-bold
text-[#172343]
"
          >
            Create Your Account
          </h1>

          <p
            className="
mt-2
font-semibold
text-[#dfa62f]
"
          >
            Step 2 of 5 - Basic Details
          </p>
        </motion.div>

        {/* Info Bar */}

        <div
          className="
bg-[#eef4ff]
rounded-lg
px-5
py-3
text-sm
text-blue-700
mb-6
"
        >
          ⓘ Please provide accurate basic information to help buyers know more
          about you.
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
bg-white
border
rounded-xl
p-6
shadow-sm
"
        >
          <h2
            className="
font-bold
text-[#172343]
text-lg
mb-6
"
          >
            Basic Details
          </h2>

          <div
            className="
grid
md:grid-cols-3
gap-5
"
          >
            {/* Full Name */}

            <Input
              icon={<User size={17} />}
              label="Full Name"
              placeholder="Enter your full name"
            />

            <Input
              icon={<Mail size={17} />}
              label="Email Address"
              placeholder="Enter your email address"
            />

            <Input
              icon={<Phone size={17} />}
              label="Phone Number"
              placeholder="Enter your phone number"
            />

            <Input
              icon={<Building2 size={17} />}
              label="Company / Business Name"
              placeholder="Enter company or business name"
            />

            <Input
              icon={<Briefcase size={17} />}
              label="Designation"
              placeholder="Enter your designation"
            />

            <SelectBox label="Business Type" data={businessTypes} />

            <SelectBox label="Country" data={countries} />

            <SelectBox label="State" data={states} />

            <SelectBox label="City" data={cities} />

            <Input
              icon={<MapPin size={17} />}
              label="Pincode"
              placeholder="Enter pincode"
            />

            <div className="md:col-span-2">
              <Input
                icon={<MapPin size={17} />}
                label="Address"
                placeholder="Enter your business address"
              />
            </div>

            <div className="md:col-span-2">
              <Input
                icon={<Globe size={17} />}
                label="Website (Optional)"
                placeholder="www.yourwebsite.com"
              />
            </div>

            <div>
              <Input
                icon={<Globe size={18} />}
                label="LinkedIn Profile (Optional)"
                placeholder="Enter LinkedIn profile URL"
              />
            </div>
          </div>

          {/* Security */}

          <div
            className="
mt-6
bg-[#fff8eb]
border
border-[#f3d28a]
rounded-lg
p-4
flex
gap-3
"
          >
            <ShieldCheck className="text-[#dfa62f]" />

            <div>
              <h3
                className="
font-semibold
text-sm
text-[#172343]
"
              >
                Your information is secure with us
              </h3>

              <p
                className="
text-xs
text-gray-600
mt-1
"
              >
                We use industry-standard encryption to protect your data and
                never share it with third parties.
              </p>
            </div>
          </div>

          {/* Buttons */}

          <div
            className="
flex
justify-between
mt-8
"
          >
            <button
              onClick={back}
              className="
border
px-6
py-3
rounded-lg
flex
items-center
gap-2
text-sm
font-medium
"
            >
              <ArrowLeft size={16} />
              Back
            </button>

            <button
              onClick={next}
              className="
  bg-[#071a3a]
  text-white
  px-8
  py-3
  rounded-lg
  flex
  items-center
  gap-2
  text-sm
  font-semibold
  "
            >
              Save & Continue
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Input({ label, placeholder, icon }) {
  return (
    <div>
      <label
        className="
        text-sm
        font-semibold
        text-[#172343]
        "
      >
        {label}

        <span className="text-red-500">*</span>
      </label>

      <div
        className="
        relative
        mt-2
        "
      >
        <span
          className="
          absolute
          left-3
          top-3
          text-gray-400
          "
        >
          {icon}
        </span>

        <input
          type="text"
          placeholder={placeholder}
          className="
          w-full
          h-11
          border
          border-[#dfe3eb]
          rounded-lg
          pl-10
          pr-4
          text-sm
          text-[#172343]
          placeholder:text-gray-400
          bg-white
          outline-none
          focus:border-[#dfa62f]
          "
        />
      </div>
    </div>
  );
}

function SelectBox({ label, data }) {
  return (
    <div>
      <label
        className="
text-sm
font-semibold
text-[#172343]
"
      >
        {label}

        <span className="text-red-500">*</span>
      </label>

      <select
        className="
w-full
h-11
mt-2
border
border-[#dfe3eb]
rounded-lg
px-3
text-sm
text-[#172343]
bg-white
outline-none
focus:border-[#dfa62f]
"
      >
        <option value="" className="text-gray-400">
          Select {label}
        </option>

        {data.map((item, index) => (
          <option
            key={index}
            value={item}
            className="
text-[#172343]
"
          >
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
