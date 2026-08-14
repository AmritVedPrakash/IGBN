import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

import {
  Upload,
  CheckCircle,
  Headphones,
  ArrowLeft,
  ArrowRight,
  Plus,
  X,
  Pencil,
  Info,
  Wheat,
  Users,
} from "lucide-react";

const DESCRIPTION_LIMIT = 300;

export default function ProductListing({ next, back, updateData, data }) {
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  const [product, setProduct] = useState({
    name: "Basmati Rice",
    description:
      "Premium quality long grain Basmati Rice. Naturally aromatic and hygienically packed.",
    unit: "Kilogram (Kg)",
    price: 120,
    quantity: 100,
  });

  // Pull whatever the previous step saved, with sensible fallbacks so this
  // screen still renders correctly if the user lands here directly.
  const selection = data?.industryDetails || {};
  const industryName = selection?.industry || "Agriculture & Food";
  const subIndustryName = selection?.subIndustry || "Rice";
  const riceTypes = selection?.product?.name || "Basmati Rice, Brown Rice";
  const buyersList =
    selection?.buyers?.length > 0
      ? selection.buyers.map((b) => b.title).join(", ")
      : "Rice Noodles Manufacturers, Rice Snacks Manufacturers, Rice Exporters";

  const unitsPerTon = product.unit === "Ton" ? 1 : 1000;
  const tonPrice = Number(product.price || 0) * unitsPerTon;

  const handleChange = (key, value) => {
    setProduct({
      ...product,
      [key]: value,
    });
  };

  const addFiles = (fileList) => {
    const files = [...fileList];
    const mapped = files.map((file) => ({
      url: URL.createObjectURL(file),
      name: file.name,
    }));
    setImages((prev) => [...prev, ...mapped]);
  };

  const handleImage = (e) => {
    if (e.target.files?.length) addFiles(e.target.files);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files);
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleContinue = () => {
    updateData({
      products: [product],
    });

    next();
  };

  const benefits = [
    "Get discovered by global buyers",
    "Increase product visibility",
    "Receive more inquiries",
    "Grow your business worldwide",
  ];

  return (
    <section className="min-h-screen bg-[#fafbff] py-10">
      <div className="max-w-[1400px] mx-auto px-5">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#172343]">
            Create Your Account
          </h1>

          <p className="mt-2 font-semibold text-[#dfa62f]">
            Step 4 of 5 - Add Your Products
          </p>
        </motion.div>

        <div className="bg-[#eef4ff] rounded-lg px-5 py-3 text-sm text-blue-700 mb-6">
          ⓘ List the products you offer. You can add multiple products.
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* LEFT FORM */}
          <div className="col-span-12 lg:col-span-9 bg-white border rounded-xl p-6">
            <h2 className="font-bold text-lg text-[#172343] mb-6">
              Add Product
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* IMAGE */}
              <div>
                <label className="font-semibold text-sm text-[#172343]">
                  Product Images *
                </label>

                <label
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                  className="
                    mt-3
                    h-[150px]
                    border
                    border-dashed
                    border-gray-300
                    rounded-xl
                    flex
                    flex-col
                    items-center
                    justify-center
                    cursor-pointer
                    text-center
                    hover:border-[#dfa62f]
                    hover:bg-[#fffaf0]
                    transition
                  "
                >
                  <Upload size={26} className="text-[#98a2b3]" />

                  <p className="mt-2 text-sm text-[#344054]">
                    <span className="font-semibold text-[#172343]">
                      Click to upload
                    </span>{" "}
                    or drag and drop
                  </p>

                  <span className="text-xs text-gray-400">
                    JPG, PNG (Max. 5MB)
                  </span>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/png, image/jpeg"
                    multiple
                    hidden
                    onChange={handleImage}
                  />
                </label>

                {images.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-4">
                    {images.map((img, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative"
                      >
                        <img
                          src={img.url}
                          alt={img.name}
                          className="w-[75px] h-[55px] rounded-lg object-cover border"
                        />

                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="
                            absolute
                            -top-2
                            -right-2
                            h-5
                            w-5
                            rounded-full
                            bg-white
                            border
                            border-gray-300
                            flex
                            items-center
                            justify-center
                            shadow-sm
                            hover:bg-gray-100
                          "
                        >
                          <X size={11} className="text-[#475467]" />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* DETAILS */}
              <div className="space-y-5">
                <div>
                  <label className="text-sm font-semibold text-[#172343]">
                    Product Name *
                  </label>

                  <input
                    value={product.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="e.g. Basmati Rice"
                    className="
                      w-full
                      mt-2
                      h-11
                      border
                      border-gray-300
                      rounded-lg
                      px-4
                      text-sm
                      text-[#172343]
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#dfa62f]/40
                      focus:border-[#dfa62f]
                    "
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-semibold text-[#172343]">
                      Product Description (Optional)
                    </label>
                  </div>

                  <textarea
                    value={product.description}
                    maxLength={DESCRIPTION_LIMIT}
                    onChange={(e) =>
                      handleChange("description", e.target.value)
                    }
                    placeholder="Describe your product..."
                    className="
                      w-full
                      mt-2
                      h-[90px]
                      border
                      border-gray-300
                      rounded-lg
                      p-3
                      text-sm
                      text-[#172343]
                      resize-none
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#dfa62f]/40
                      focus:border-[#dfa62f]
                    "
                  />

                  <p className="text-right text-xs text-gray-400 mt-1">
                    {product.description.length}/{DESCRIPTION_LIMIT}
                  </p>
                </div>
              </div>
            </div>

            {/* PRICE */}
            <div className="grid md:grid-cols-3 gap-5 mt-2">
              <div>
                <label className="text-sm font-semibold text-[#172343]">
                  Unit Type *
                </label>

                <select
                  value={product.unit}
                  onChange={(e) => handleChange("unit", e.target.value)}
                  className="
                    w-full
                    mt-2
                    h-11
                    border
                    border-gray-300
                    rounded-lg
                    px-3
                    text-sm
                    text-[#172343]
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#dfa62f]/40
                    focus:border-[#dfa62f]
                  "
                >
                  <option>Kilogram (Kg)</option>
                  <option>Ton</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-[#172343]">
                  Price per Unit (₹) *
                </label>

                <input
                  type="number"
                  value={product.price}
                  onChange={(e) => handleChange("price", e.target.value)}
                  className="
                    w-full
                    mt-2
                    h-11
                    border
                    border-gray-300
                    rounded-lg
                    px-4
                    text-sm
                    text-[#172343]
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#dfa62f]/40
                    focus:border-[#dfa62f]
                  "
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-[#172343]">
                  Minimum Order Quantity *
                </label>

                <div className="relative mt-2">
                  <input
                    type="number"
                    value={product.quantity}
                    onChange={(e) => handleChange("quantity", e.target.value)}
                    className="
                      w-full
                      h-11
                      border
                      border-gray-300
                      rounded-lg
                      pl-4
                      pr-12
                      text-sm
                      text-[#172343]
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#dfa62f]/40
                      focus:border-[#dfa62f]
                    "
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                    Kg
                  </span>
                </div>
              </div>
            </div>

            {/* CALCULATION */}
            <div className="mt-8 bg-[#fffaf0] border border-[#f6e6c4] rounded-xl p-6">
              <h3 className="font-semibold text-[#172343]">
                Price Calculation (Automatically calculated in Tons)
              </h3>

              <div className="grid grid-cols-5 items-center text-center mt-6">
                <div>
                  <p className="text-xs text-gray-500">Price per Unit</p>
                  <h3 className="text-xl font-bold text-[#172343] mt-1">
                    ₹{product.price || 0}/Kg
                  </h3>
                </div>

                <div className="text-xl text-gray-400 font-semibold">×</div>

                <div>
                  <p className="text-xs text-gray-500">Units in 1 Ton</p>
                  <h3 className="text-xl font-bold text-[#172343] mt-1">
                    1,000 Kg
                  </h3>
                </div>

                <div className="text-xl text-gray-400 font-semibold">=</div>

                <div>
                  <p className="text-xs text-gray-500">Price per Ton</p>
                  <h3 className="text-xl font-bold text-green-600 mt-1">
                    ₹{tonPrice.toLocaleString("en-IN")}/Ton
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-5 text-xs text-[#8a6d1f]">
                <Info size={13} />1 Ton = 1,000 Kilograms
              </div>
            </div>

            {/* BUTTON */}
            <div className="flex justify-between mt-8">
              <button
                type="button"
                className="
                  border
                  border-gray-300
                  px-6
                  py-3
                  rounded-lg
                  flex
                  gap-2
                  items-center
                  text-sm
                  font-semibold
                  text-[#172343]
                  hover:bg-gray-50
                "
              >
                <Plus size={16} />
                Add Another Product
              </button>

              <div className="flex gap-3">
                <button
                  onClick={back}
                  className="
                    border
                    border-gray-300
                    px-6
                    py-3
                    rounded-lg
                    flex
                    gap-2
                    items-center
                    text-sm
                    font-semibold
                    text-[#172343]
                    hover:bg-gray-50
                  "
                >
                  <ArrowLeft size={16} />
                  Back
                </button>

                <button
                  onClick={handleContinue}
                  className="
                    bg-[#071a3a]
                    text-white
                    px-8
                    py-3
                    rounded-lg
                    flex
                    gap-2
                    items-center
                    text-sm
                    font-semibold
                    hover:bg-[#102957]
                  "
                >
                  Save & Continue
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-span-12 lg:col-span-3 space-y-5">
            <div className="bg-white border rounded-xl p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm text-[#172343]">
                  Your Selection Summary
                </h3>

                <button
                  type="button"
                  className="text-xs font-semibold text-[#172343] flex items-center gap-1 hover:text-[#dfa62f]"
                >
                  <Pencil size={12} />
                  Edit
                </button>
              </div>

              <div className="mt-4">
                <p className="text-xs text-gray-500">Industry</p>
                <p className="text-sm font-semibold text-[#172343] flex items-center gap-1.5 mt-1">
                  <Wheat size={14} className="text-[#dfa62f]" />
                  {industryName}
                </p>
              </div>

              <div className="mt-4">
                <p className="text-xs text-gray-500">Sub Industry</p>
                <p className="text-sm font-semibold text-[#172343] mt-1">
                  {subIndustryName}
                </p>
              </div>

              <div className="mt-4">
                <p className="text-xs text-gray-500">Rice Types</p>
                <p className="text-sm font-semibold text-[#172343] mt-1">
                  {riceTypes}
                </p>
              </div>

              <div className="mt-4">
                <p className="text-xs text-gray-500">Buyers</p>
                <p className="text-sm font-semibold text-[#172343] flex items-start gap-1.5 mt-1">
                  <Users size={14} className="text-[#98a2b3] mt-0.5 shrink-0" />
                  {buyersList}
                </p>
              </div>
            </div>

            <div className="bg-[#fff8eb] rounded-xl p-5">
              <h3 className="font-bold text-sm text-[#172343]">
                Why List Your Products?
              </h3>

              <ul className="mt-4 space-y-3 text-sm text-[#344054]">
                {benefits.map((text, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle
                      size={15}
                      className="text-[#dfa62f] mt-0.5 shrink-0"
                    />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#eef5ff] rounded-xl p-5">
              <Headphones className="text-[#172343]" />

              <h3 className="font-bold mt-3 text-sm text-[#172343]">
                Need Help?
              </h3>

              <p className="text-sm mt-2 text-gray-500">
                Our support team is here to assist you at every step.
              </p>

              <p className="text-sm font-semibold text-[#172343] mt-3">
                +91 98765 43210
              </p>
              <p className="text-sm text-[#172343]">
                support@igbnworldwide.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
