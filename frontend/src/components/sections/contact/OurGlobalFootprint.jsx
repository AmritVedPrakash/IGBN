// import React from "react";
// import { motion } from "framer-motion";
// import { Globe2, Building2, UsersRound, Earth, ArrowRight } from "lucide-react";

// // Actual filename ke according change kar lena
// import footprintMap from "../../../assets/contactimg/global-footprint-map.png";

// export default function OurGlobalFootprint() {
//   const stats = [
//     {
//       icon: Globe2,
//       value: "21+",
//       label: "Countries",
//     },
//     {
//       icon: Building2,
//       value: "50+",
//       label: "Global Cities",
//     },
//     {
//       icon: UsersRound,
//       value: "17",
//       label: "Trade Ambassadors",
//     },
//     {
//       icon: Earth,
//       value: "4",
//       label: "Continents",
//     },
//   ];

//   return (
//     <section className="w-full bg-[#020D18] px-4 py-10 sm:px-6 lg:px-8">
//       <motion.div
//         initial={{ opacity: 0, y: 25 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="
//           relative
//           mx-auto
//           max-w-[1650px]
//           overflow-hidden
//           rounded-[12px]
//           border
//           border-[#765323]/80
//           bg-[#03111F]
//           px-6
//           py-6
//           shadow-[0_12px_40px_rgba(0,0,0,0.32)]
//           sm:px-7
//           lg:px-8
//         "
//       >
//         {/* Glow */}
//         <div
//           className="
//             pointer-events-none
//             absolute
//             right-[20%]
//             top-1/2
//             h-[420px]
//             w-[420px]
//             -translate-y-1/2
//             rounded-full
//             bg-[#D69A2B]/[0.04]
//             blur-[120px]
//           "
//         />

//         <div
//           className="
//             relative
//             z-10
//             grid
//             grid-cols-1
//             items-center
//             gap-8
//             lg:grid-cols-[0.42fr_0.58fr]
//             xl:gap-10
//           "
//         >
//           {/* =====================================================
//               LEFT CONTENT
//           ====================================================== */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             {/* Heading */}
//             <h2
//               className="
//                 text-[24px]
//                 font-semibold
//                 uppercase
//                 leading-tight
//                 text-[#F4F5F6]
//                 sm:text-[27px]
//                 lg:text-[30px]
//               "
//             >
//               Our Global Footprint
//             </h2>

//             {/* Paragraph */}
//             <p
//               className="
//                 mt-3
//                 max-w-[560px]
//                 text-[15px]
//                 leading-[1.7]
//                 text-[#C5CCD2]
//                 sm:text-[16px]
//                 lg:text-[17px]
//               "
//             >
//               We don&apos;t just connect people. We build global business
//               success stories.
//             </p>

//             {/* ================= STATS ================= */}
//             <div className="mt-7 space-y-5">
//               {stats.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <motion.div
//                     key={index}
//                     initial={{
//                       opacity: 0,
//                       x: -15,
//                     }}
//                     whileInView={{
//                       opacity: 1,
//                       x: 0,
//                     }}
//                     viewport={{ once: true }}
//                     transition={{
//                       duration: 0.4,
//                       delay: index * 0.08,
//                     }}
//                     whileHover={{
//                       x: 5,
//                     }}
//                     className="
//                       group
//                       flex
//                       items-center
//                       gap-4
//                     "
//                   >
//                     {/* Icon */}
//                     <motion.div
//                       whileHover={{
//                         scale: 1.1,
//                         rotate: -5,
//                       }}
//                       className="
//                         flex
//                         h-[54px]
//                         w-[54px]
//                         shrink-0
//                         items-center
//                         justify-center
//                         rounded-full
//                         border
//                         border-[#A9782D]/60
//                         bg-[#D69A2B]/[0.04]
//                       "
//                     >
//                       <Icon
//                         size={30}
//                         strokeWidth={1.5}
//                         className="text-[#D69A2B]"
//                       />
//                     </motion.div>

//                     {/* Text */}
//                     <div>
//                       <p
//                         className="
//                           text-[25px]
//                           font-semibold
//                           leading-none
//                           text-[#F4F5F6]
//                           sm:text-[27px]
//                         "
//                       >
//                         {item.value}
//                       </p>

//                       <p
//                         className="
//                           mt-2
//                           text-[14px]
//                           font-medium
//                           leading-[1.45]
//                           text-[#D3D9DE]
//                           sm:text-[15px]
//                           lg:text-[16px]
//                         "
//                       >
//                         {item.label}
//                       </p>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>

//             {/* ================= BUTTON ================= */}
//             <motion.button
//               whileHover={{
//                 y: -3,
//               }}
//               whileTap={{
//                 scale: 0.98,
//               }}
//               className="
//                 group
//                 mt-8
//                 flex
//                 min-h-[54px]
//                 min-w-[210px]
//                 items-center
//                 justify-center
//                 gap-3
//                 rounded-[7px]
//                 border
//                 border-[#D69A2B]
//                 bg-gradient-to-r
//                 from-[#E0AA48]
//                 via-[#D99B2B]
//                 to-[#C98A24]
//                 px-7
//                 text-[15px]
//                 font-semibold
//                 uppercase
//                 text-[#07111B]
//                 shadow-[0_8px_25px_rgba(214,154,43,0.20)]
//                 sm:text-[16px]
//                 lg:text-[17px]
//               "
//             >
//               View Our Network
//               <ArrowRight
//                 size={21}
//                 className="
//                   transition-transform
//                   duration-300
//                   group-hover:translate-x-1
//                 "
//               />
//             </motion.button>
//           </motion.div>

//           {/* =====================================================
//               RIGHT MAP
//           ====================================================== */}
//           <motion.div
//             initial={{
//               opacity: 0,
//               scale: 0.96,
//               x: 25,
//             }}
//             whileInView={{
//               opacity: 1,
//               scale: 1,
//               x: 0,
//             }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 0.8,
//               delay: 0.15,
//             }}
//             className="
//               flex
//               min-h-[420px]
//               items-center
//               justify-center
//               overflow-hidden
//               lg:min-h-[500px]
//             "
//           >
//             <motion.img
//               src={footprintMap}
//               alt="IGBN Global Footprint"
//               animate={{
//                 scale: [1, 1.015, 1],
//                 y: [0, -4, 0],
//               }}
//               transition={{
//                 duration: 6,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="
//                 max-h-[500px]
//                 w-full
//                 object-contain
//                 drop-shadow-[0_0_22px_rgba(214,154,43,0.12)]
//               "
//             />
//           </motion.div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }
