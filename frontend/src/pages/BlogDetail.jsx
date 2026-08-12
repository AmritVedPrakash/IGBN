import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { blogData } from "../data/blogData";

export default function BlogDetail() {
  const { slug } = useParams();

  const post = blogData.find((item) => item.slug === slug);

  if (!post) return <h1 className="p-20">Article Not Found</h1>;

  return (
    <section
      className="
py-32
max-w-4xl
mx-auto
px-6
"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        <span
          className="
px-5
py-2
rounded-full
bg-white/10
text-cyan-400
"
        >
          {post.category}
        </span>

        <h1
          className="
mt-8
text-5xl
md:text-6xl
font-bold
leading-tight
"
        >
          {post.title}
        </h1>

        <p
          className="
mt-5
text-gray-500
"
        >
          {post.date}
        </p>

        <div
          className="
mt-12
space-y-8
text-lg
text-gray-300
leading-8
"
        >
          {post.content.map((c, index) => (
            <p key={index}>{c}</p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
