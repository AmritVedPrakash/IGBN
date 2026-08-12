import { cases } from "../../data/caseStudies";

import { ArrowUpRight, Smartphone, Globe2, Layers3 } from "lucide-react";

export default function CaseStudies() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#050816]
        py-20
        text-white
        sm:py-24
      "
    >
      {/* ============================= */}
      {/* DESKTOP BACKGROUND EFFECTS */}
      {/* ============================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-120px]
          top-28
          hidden
          h-[350px]
          w-[350px]
          rounded-full
          bg-cyan-500/10
          blur-[100px]
          md:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-20
          right-[-120px]
          hidden
          h-[400px]
          w-[400px]
          rounded-full
          bg-purple-500/10
          blur-[110px]
          md:block
        "
      />

      {/* ============================= */}
      {/* CONTAINER */}
      {/* ============================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >
        {/* ============================= */}
        {/* HEADER */}
        {/* ============================= */}

        <div
          className="
            flex
            flex-col
            gap-7
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            <div
              className="
                mb-4
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/5
                px-4
                py-2
                text-xs
                text-cyan-400
                md:text-sm
              "
            >
              <Layers3 size={16} />
              Our Recent Work
            </div>

            <h2
              className="
                max-w-4xl
                text-4xl
                font-bold
                leading-tight
                sm:text-5xl
                lg:text-6xl
              "
            >
              Apps that create{" "}
              <span className="gradient-text">real impact.</span>
            </h2>

            <p
              className="
                mt-5
                max-w-2xl
                text-base
                leading-7
                text-gray-400
                sm:text-lg
              "
            >
              Explore some of the mobile applications and digital products
              developed by AnkleGaming for startups, brands and growing
              businesses.
            </p>
          </div>

          <button
            type="button"
            className="
              group
              flex
              w-fit
              items-center
              gap-3
              rounded-full
              border
              border-white/15
              bg-white/5
              px-6
              py-3
              text-sm
              font-semibold
              transition-colors
              duration-300
              hover:border-cyan-400/60
              hover:bg-cyan-400
              hover:text-black
            "
          >
            Explore all projects
            <ArrowUpRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </button>
        </div>

        {/* ============================= */}
        {/* PROJECTS */}
        {/* ============================= */}

        <div
          className="
            mt-12
            space-y-7
            sm:mt-16
            sm:space-y-10
          "
        >
          {cases.map((project, projectIndex) => {
            /*
             * Only use maximum 2 images per project.
             * This significantly reduces mobile rendering.
             */

            const projectImages = project.images?.length
              ? project.images.slice(0, 2)
              : project.image
                ? [project.image]
                : [];

            return (
              <article
                key={project.id || project.name}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.045]
                  shadow-xl
                  shadow-black/20
                  md:backdrop-blur-md
                  md:transition-transform
                  md:duration-500
                  md:hover:-translate-y-2
                  md:hover:border-cyan-400/30
                "
              >
                {/* Desktop glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    right-0
                    top-0
                    hidden
                    h-60
                    w-60
                    rounded-full
                    bg-cyan-500/10
                    blur-[90px]
                    md:block
                  "
                />

                <div
                  className={`
                    grid
                    lg:grid-cols-[1.5fr_0.75fr]
                    ${
                      projectIndex % 2 !== 0
                        ? "lg:grid-cols-[0.75fr_1.5fr]"
                        : ""
                    }
                  `}
                >
                  {/* ============================= */}
                  {/* SCREENSHOTS */}
                  {/* ============================= */}

                  <div
                    className={`
                      relative
                      min-h-[320px]
                      overflow-hidden
                      bg-[#f5f2f7]
                      sm:min-h-[390px]

                      ${
                        projectIndex % 2 === 0
                          ? "lg:order-1 lg:border-r lg:border-white/10"
                          : "lg:order-2 lg:border-l lg:border-white/10"
                      }
                    `}
                  >
                    {/* Lightweight background */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-br
                        from-indigo-500/10
                        to-cyan-500/5
                      "
                    />

                    <div
                      className="
                        relative
                        flex
                        min-h-[320px]
                        items-center
                        overflow-hidden
                        py-6
                        sm:min-h-[390px]
                        sm:py-8
                      "
                    >
                      <div
                        className="
                          flex
                          min-w-max
                          items-center
                          gap-4
                          px-5
                          sm:gap-7
                          sm:px-10
                        "
                      >
                        {projectImages.map((image, imageIndex) => (
                          <div
                            key={`${project.name}-${imageIndex}`}
                            className="
                                relative
                                shrink-0
                                overflow-hidden
                                rounded-[22px]
                                border-4
                                border-[#111]
                                bg-black
                                shadow-xl
                                sm:rounded-[28px]
                                sm:border-[5px]
                              "
                          >
                            {/* Phone notch */}

                            <div
                              className="
                                  absolute
                                  left-1/2
                                  top-0
                                  z-20
                                  h-4
                                  w-[48%]
                                  -translate-x-1/2
                                  rounded-b-xl
                                  bg-black
                                  sm:h-5
                                "
                            />

                            <img
                              src={image}
                              alt={`${project.name} app screen ${
                                imageIndex + 1
                              }`}
                              loading={
                                projectIndex === 0 && imageIndex === 0
                                  ? "eager"
                                  : "lazy"
                              }
                              decoding="async"
                              fetchPriority={
                                projectIndex === 0 && imageIndex === 0
                                  ? "high"
                                  : "low"
                              }
                              className="
                                  h-[270px]
                                  w-[130px]
                                  object-cover
                                  object-top

                                  sm:h-[370px]
                                  sm:w-[180px]

                                  xl:h-[410px]
                                  xl:w-[200px]
                                "
                            />
                          </div>
                        ))}
                      </div>

                      {/* Fade */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-y-0
                          left-0
                          w-8
                          bg-gradient-to-r
                          from-[#f5f2f7]
                          to-transparent
                          sm:w-12
                        "
                      />

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-y-0
                          right-0
                          w-10
                          bg-gradient-to-l
                          from-[#f5f2f7]
                          to-transparent
                          sm:w-20
                        "
                      />
                    </div>
                  </div>

                  {/* ============================= */}
                  {/* CONTENT */}
                  {/* ============================= */}

                  <div
                    className={`
                      relative
                      flex
                      flex-col
                      justify-center
                      p-6
                      sm:p-10
                      lg:p-12

                      ${projectIndex % 2 === 0 ? "lg:order-2" : "lg:order-1"}
                    `}
                  >
                    {/* Industry */}

                    <div
                      className="
                        flex
                        flex-wrap
                        items-center
                        gap-2
                      "
                    >
                      <span
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-cyan-400/20
                          bg-cyan-400/10
                          px-3
                          py-2
                          text-[11px]
                          font-medium
                          uppercase
                          tracking-[0.12em]
                          text-cyan-300
                          sm:px-4
                          sm:text-xs
                        "
                      >
                        <Smartphone size={14} />

                        {project.industry}
                      </span>

                      {project.platform && (
                        <span
                          className="
                            hidden
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-white/10
                            bg-white/5
                            px-4
                            py-2
                            text-xs
                            text-gray-400
                            sm:inline-flex
                          "
                        >
                          <Globe2 size={14} />

                          {project.platform}
                        </span>
                      )}
                    </div>

                    {/* Title */}

                    <h3
                      className="
                        mt-6
                        text-3xl
                        font-bold
                        leading-tight
                        sm:text-4xl
                      "
                    >
                      {project.name}
                    </h3>

                    {/* Subtitle */}

                    {project.subtitle && (
                      <p
                        className="
                          mt-3
                          text-base
                          font-medium
                          text-cyan-400
                          sm:text-lg
                        "
                      >
                        {project.subtitle}
                      </p>
                    )}

                    {/* Description */}

                    <p
                      className="
                        mt-5
                        text-sm
                        leading-7
                        text-gray-400
                        sm:text-base
                      "
                    >
                      {project.description}
                    </p>

                    {/* Stats */}

                    {project.stats?.length > 0 && (
                      <div
                        className="
                          mt-7
                          grid
                          grid-cols-2
                          gap-3
                          sm:gap-4
                        "
                      >
                        {project.stats.map((stat) => (
                          <div
                            key={`${project.name}-${stat.label}`}
                            className="
                              rounded-2xl
                              border
                              border-white/10
                              bg-white/[0.04]
                              p-4
                            "
                          >
                            <p
                              className="
                                text-xl
                                font-bold
                                text-white
                              "
                            >
                              {stat.value}
                            </p>

                            <p
                              className="
                                mt-1
                                text-xs
                                text-gray-500
                              "
                            >
                              {stat.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Technologies */}

                    <div
                      className="
                        mt-7
                        flex
                        flex-wrap
                        gap-2
                      "
                    >
                      {project.tech?.map((technology) => (
                        <span
                          key={`${project.name}-${technology}`}
                          className="
                              rounded-full
                              border
                              border-white/10
                              bg-white/[0.06]
                              px-3
                              py-2
                              text-xs
                              text-gray-300
                              sm:px-4
                            "
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}

                    <button
                      type="button"
                      className="
                        mt-8
                        flex
                        w-fit
                        items-center
                        gap-3
                        font-semibold
                        text-cyan-400
                        transition-colors
                        hover:text-white
                      "
                    >
                      View Case Study
                      <span
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-cyan-400/30
                          bg-cyan-400/10
                        "
                      >
                        <ArrowUpRight size={18} />
                      </span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
