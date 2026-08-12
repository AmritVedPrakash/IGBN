import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { blogData } from "../data/blogData";

export default function Blog() {
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "AI",
    "Mobile Apps",
    "Web Development",
    "Technology",
    "Business",
  ];

  const posts =
    category === "All"
      ? blogData
      : blogData.filter((post) => post.category === category);

  return (
    <section
      className="
py-32
max-w-7xl
mx-auto
px-6
"
    >
      <h1
        className="
text-5xl
md:text-6xl
font-bold
"
      >
        Technology
        <span className="gradient-text">Insights</span>
      </h1>

      <p
        className="
mt-6
text-gray-400
max-w-3xl
text-lg
leading-8
"
      >
        Explore latest insights about AI, software development, technology
        trends and digital transformation.
      </p>

      {/* Categories */}

      <div
        className="
flex
flex-wrap
gap-4
mt-10
"
      >
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`
px-6
py-3
rounded-full
transition
${category === item ? "bg-gradient-to-r from-purple-600 to-cyan-500" : "glass"}
`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Cards */}

      <div
        className="
grid
md:grid-cols-3
gap-8
mt-16
"
      >
        {posts.map((post, index) => (
          <Link key={post.slug} to={`/blog/${post.slug}`}>
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="
glass
rounded-3xl
p-8
h-full
"
            >
              <span
                className="
text-cyan-400
"
              >
                {post.category}
              </span>

              <h2
                className="
text-2xl
font-bold
mt-5
"
              >
                {post.title}
              </h2>

              <p
                className="
text-gray-400
mt-5
leading-7
"
              >
                {post.excerpt}
              </p>

              <div
                className="
mt-6
text-sm
text-gray-500
"
              >
                {post.date}
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
