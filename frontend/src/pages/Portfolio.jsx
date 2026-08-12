import { useState } from "react";

import { portfolioData } from "../data/portfolioData";
import CaseStudies from "../components/sections/CaseStudies";
export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Apps", "Websites", "Software", "Designs"];

  const projects =
    filter === "All"
      ? portfolioData
      : portfolioData.filter((p) => p.type === filter);

  return (
    <>
    <CaseStudies/>
    
    </>
//     <section
//       className="
// py-32
// max-w-7xl
// mx-auto
// px-6
// "
//     >
//       <h1
//         className="
// text-6xl
// font-bold
// "
//       >
//         Portfolio
//       </h1>

//       <div
//         className="
// flex gap-4
// mt-10
// "
//       >
//         {categories.map((c) => (
//           <button
//             onClick={() => setFilter(c)}
//             className="
// glass
// px-5
// py-3
// rounded-full
// "
//           >
//             {c}
//           </button>
//         ))}
//       </div>

//       <div
//         className="
// grid md:grid-cols-3
// gap-8
// mt-12
// "
//       >
//         {projects.map((p) => (
//           <div
//             className="
// glass
// rounded-3xl
// overflow-hidden
// "
//           >
//             <img
//               src={p.image}
//               className="
// w-full
// "
//             />

//             <div
//               className="
// p-6
// "
//             >
//               <h2
//                 className="
// text-2xl
// font-bold
// "
//               >
//                 {p.title}
//               </h2>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
  );
}
