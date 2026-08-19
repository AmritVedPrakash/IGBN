// import React from "react";
// import {
//   UserPlus,
//   FileSearch,
//   MessagesSquare,
//   Handshake,
//   ChartNoAxesCombined,
// } from "lucide-react";
// import { motion } from "framer-motion";

// export default function HowItsWork() {
//   const steps = [
//     {
//       icon: UserPlus,
//       number: "1",
//       title: "Create Account",
//       description: "Sign up and create your business profile.",
//     },
//     {
//       icon: FileSearch,
//       number: "2",
//       title: "Explore & Connect",
//       description:
//         "Search suppliers or buyers and connect with the right partners.",
//     },
//     {
//       icon: MessagesSquare,
//       number: "3",
//       title: "Communicate",
//       description: "Discuss requirements, share information and negotiate.",
//     },
//     {
//       icon: Handshake,
//       number: "4",
//       title: "Close Deal",
//       description:
//         "Build trust, finalize deals and grow your business globally.",
//     },
//     {
//       icon: ChartNoAxesCombined,
//       number: "5",
//       title: "Grow Together",
//       description: "Expand your reach and achieve long-term success with IGBN.",
//     },
//   ];

//   return (
//     <section className="relative w-full bg-transparent">
//       {/* almost full-width card */}
//       <div className="w-full px-3 sm:px-4 lg:px-5">
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="
//             relative
//             w-full
//             rounded-[14px]
//             border
//             border-[#ebe7df]
//             bg-[#fffdfb]
//             px-4
//             py-4
//             sm:px-6
//             lg:px-8
//             lg:py-5
//             shadow-[0_12px_35px_rgba(0,0,0,0.10)]
//           "
//         >
//           {/* Heading */}
//           <div className="mb-5 text-center">
//             <p
//               className="
//                 text-[9px]
//                 font-semibold
//                 uppercase
//                 tracking-[0.12em]
//                 text-[#d6a42b]
//                 sm:text-[10px]
//               "
//             >
//               How We Work
//             </p>

//             <h2
//               className="
//                 mt-1
//                 text-lg
//                 font-semibold
//                 text-[#0b1f43]
//                 sm:text-xl
//               "
//             >
//               Our Simple Process
//             </h2>
//           </div>

//           {/* Process */}
//           <div className="relative">
//             {/* Horizontal Line */}
//             <div
//               className="
//                 absolute
//                 left-[8%]
//                 right-[8%]
//                 top-[30px]
//                 hidden
//                 h-px
//                 bg-[#ead7a4]
//                 lg:block
//               "
//             />

//             <div
//               className="
//                 grid
//                 grid-cols-1
//                 gap-7
//                 sm:grid-cols-2
//                 lg:grid-cols-5
//                 lg:gap-3
//               "
//             >
//               {steps.map((step, index) => {
//                 const Icon = step.icon;

//                 return (
//                   <motion.div
//                     key={step.number}
//                     initial={{ opacity: 0, y: 15 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{
//                       duration: 0.4,
//                       delay: index * 0.07,
//                     }}
//                     className="
//                       relative
//                       flex
//                       flex-col
//                       items-center
//                       text-center
//                     "
//                   >
//                     {/* Icon */}
//                     <motion.div
//                       whileHover={{
//                         y: -4,
//                         scale: 1.06,
//                       }}
//                       className="
//                         relative
//                         z-10
//                         flex
//                         h-[60px]
//                         w-[60px]
//                         items-center
//                         justify-center
//                         rounded-full
//                         bg-[#071d43]
//                         shadow-[0_6px_18px_rgba(0,0,0,0.10)]
//                       "
//                     >
//                       <Icon
//                         size={26}
//                         strokeWidth={1.7}
//                         className="text-[#d9aa35]"
//                       />
//                     </motion.div>

//                     {/* Gold connector dots */}
//                     {index !== steps.length - 1 && (
//                       <div
//                         className="
//                           absolute
//                           right-[-5px]
//                           top-[26px]
//                           z-20
//                           hidden
//                           h-[9px]
//                           w-[9px]
//                           rounded-full
//                           border-2
//                           border-[#f8edce]
//                           bg-[#d8aa36]
//                           lg:block
//                         "
//                       />
//                     )}

//                     {/* Title */}
//                     <h3
//                       className="
//                         mt-3
//                         text-[10px]
//                         font-semibold
//                         text-[#1b1b1b]
//                         sm:text-[11px]
//                       "
//                     >
//                       {step.number}. {step.title}
//                     </h3>

//                     {/* Description */}
//                     <p
//                       className="
//                         mt-2
//                         max-w-[190px]
//                         text-[9px]
//                         leading-[14px]
//                         text-[#666]
//                         lg:text-[10px]
//                         lg:leading-[15px]
//                       "
//                     >
//                       {step.description}
//                     </p>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
