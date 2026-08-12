import { testimonials } from "../data/testimonials";

export default function Testimonials() {
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
text-6xl
font-bold
"
      >
        Client
        <span className="gradient-text">Testimonials</span>
      </h1>

      <div
        className="
grid
md:grid-cols-3
gap-8
mt-16
"
      >
        {testimonials.map((item) => (
          <div
            className="
glass
p-8
rounded-3xl
"
          >
            <p
              className="
text-gray-300
text-lg
"
            >
              "{item.text}"
            </p>

            <h3
              className="
font-bold
mt-8
"
            >
              {item.name}
            </h3>

            <p
              className="
text-gray-400
"
            >
              {item.company}
            </p>

            <div
              className="
text-yellow-400
mt-4
"
            >
              ★★★★★
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
