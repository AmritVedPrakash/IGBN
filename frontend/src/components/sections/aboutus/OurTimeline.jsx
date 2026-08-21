// import React from "react";
// import { motion } from "framer-motion";

// export default function OurTimeline() {
//   const steps = [
//     {
//       number: "1",
//       title: "BRIEF",
//       text: "We understand your business goals, market requirements and international trade objectives.",
//       accent: "#D84F86",
//       desktop: {
//         left: "5%",
//         top: "16%",
//       },
//     },
//     {
//       number: "2",
//       title: "SKETCH",
//       text: "We analyze opportunities, target markets, trade data and create a clear strategy for growth.",
//       accent: "#F7941D",
//       desktop: {
//         left: "22%",
//         top: "59%",
//       },
//     },
//     {
//       number: "3",
//       title: "SOLUTION",
//       text: "We identify verified buyers, suppliers and the right trade opportunities for your business.",
//       accent: "#8B67E8",
//       desktop: {
//         left: "39%",
//         top: "15%",
//       },
//     },
//     {
//       number: "4",
//       title: "DESIGN",
//       text: "Our team develops the right market approach, connection strategy and business roadmap.",
//       accent: "#24BCA4",
//       desktop: {
//         left: "56%",
//         top: "59%",
//       },
//     },
//     {
//       number: "5",
//       title: "PRESENTATION",
//       text: "We position and present your business with relevant global buyers, partners and markets.",
//       accent: "#E23B35",
//       desktop: {
//         left: "73%",
//         top: "15%",
//       },
//     },
//     {
//       number: "6",
//       title: "REVISION",
//       text: "We continuously refine the strategy, track progress and support long-term global growth.",
//       accent: "#56BDD8",
//       desktop: {
//         left: "89%",
//         top: "59%",
//       },
//     },
//   ];

//   const roadPath = `
//     M 25 235
//     C 100 235 105 105 200 105
//     C 295 105 295 330 390 330
//     C 485 330 485 105 580 105
//     C 675 105 675 330 770 330
//     C 865 330 865 105 960 105
//     C 1055 105 1055 330 1150 330
//     C 1245 330 1250 235 1375 235
//   `;

//   return (
//     <section
//       className="
//         relative
//         w-full
//         overflow-hidden
//         bg-[#020D18]
//         px-4
//         py-12
//         sm:px-6
//         lg:px-8
//       "
//     >
//       {/* Background glow */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           left-1/2
//           top-1/2
//           h-[500px]
//           w-[1000px]
//           -translate-x-1/2
//           -translate-y-1/2
//           rounded-full
//           bg-[#D69A2B]/[0.035]
//           blur-[150px]
//         "
//       />

//       <div className="relative z-10 mx-auto max-w-[1650px]">
//         {/* =====================================================
//             HEADING
//         ====================================================== */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 20,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//           }}
//           transition={{
//             duration: 0.6,
//           }}
//           className="mb-10 text-center"
//         >
//           <p
//             className="
//               text-[16px]
//               font-semibold
//               uppercase
//               tracking-[0.15em]
//               text-[#D69A2B]

//               sm:text-[17px]
//             "
//           >
//             Our Timeline
//           </p>

//           <h2
//             className="
//               mt-2
//               text-[29px]
//               font-semibold
//               text-[#F4F5F6]

//               sm:text-[34px]
//               lg:text-[40px]
//             "
//           >
//             From Idea To <span className="text-[#D69A2B]">Global Growth</span>
//           </h2>

//           <p
//             className="
//               mx-auto
//               mt-4
//               max-w-[760px]
//               text-[15px]
//               leading-[1.75]
//               text-[#BEC6CD]

//               sm:text-[16px]
//               lg:text-[17px]
//             "
//           >
//             A structured journey that transforms business requirements into
//             meaningful international opportunities.
//           </p>
//         </motion.div>

//         {/* =====================================================
//             DESKTOP HORIZONTAL TIMELINE
//         ====================================================== */}
//         <div
//           className="
//             relative
//             hidden
//             min-h-[560px]
//             overflow-hidden
//             rounded-[16px]
//             border
//             border-[#725021]/70
//             bg-[#03111F]
//             px-6
//             py-8
//             shadow-[0_20px_55px_rgba(0,0,0,0.30)]

//             md:block
//           "
//         >
//           {/* ================= ROAD ================= */}
//           <div
//             className="
//               pointer-events-none
//               absolute
//               left-1/2
//               top-1/2
//               h-[400px]
//               w-[96%]
//               -translate-x-1/2
//               -translate-y-1/2
//             "
//           >
//             <svg
//               viewBox="0 0 1400 440"
//               preserveAspectRatio="none"
//               className="h-full w-full"
//             >
//               <defs>
//                 {/* Glow */}
//                 <filter
//                   id="timelineGlow"
//                   x="-50%"
//                   y="-50%"
//                   width="200%"
//                   height="200%"
//                 >
//                   <feGaussianBlur stdDeviation="7" result="blur" />

//                   <feMerge>
//                     <feMergeNode in="blur" />
//                     <feMergeNode in="SourceGraphic" />
//                   </feMerge>
//                 </filter>

//                 {/* Shadow */}
//                 <filter
//                   id="timelineRoadShadow"
//                   x="-30%"
//                   y="-30%"
//                   width="160%"
//                   height="160%"
//                 >
//                   <feDropShadow
//                     dx="0"
//                     dy="5"
//                     stdDeviation="7"
//                     floodColor="#000"
//                     floodOpacity="0.55"
//                   />
//                 </filter>
//               </defs>

//               {/* ================= GOLD OUTER ROAD ================= */}
//               <motion.path
//                 d={roadPath}
//                 fill="none"
//                 stroke="#805A25"
//                 strokeWidth="82"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 filter="url(#timelineRoadShadow)"
//                 initial={{
//                   pathLength: 0,
//                 }}
//                 whileInView={{
//                   pathLength: 1,
//                 }}
//                 viewport={{
//                   once: true,
//                   amount: 0.25,
//                 }}
//                 transition={{
//                   duration: 3.4,
//                   ease: "easeInOut",
//                 }}
//               />

//               {/* ================= BLACK ROAD ================= */}
//               <motion.path
//                 d={roadPath}
//                 fill="none"
//                 stroke="#02070C"
//                 strokeWidth="72"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 initial={{
//                   pathLength: 0,
//                 }}
//                 whileInView={{
//                   pathLength: 1,
//                 }}
//                 viewport={{
//                   once: true,
//                   amount: 0.25,
//                 }}
//                 transition={{
//                   duration: 3.4,
//                   ease: "easeInOut",
//                 }}
//               />

//               {/* ================= WHITE DASHED LINE ================= */}
//               <motion.path
//                 d={roadPath}
//                 fill="none"
//                 stroke="#F5F5F5"
//                 strokeWidth="4"
//                 strokeLinecap="round"
//                 strokeDasharray="16 17"
//                 initial={{
//                   pathLength: 0,
//                   opacity: 0,
//                 }}
//                 whileInView={{
//                   pathLength: 1,
//                   opacity: 0.85,
//                 }}
//                 viewport={{
//                   once: true,
//                   amount: 0.25,
//                 }}
//                 transition={{
//                   pathLength: {
//                     duration: 3.5,
//                     delay: 0.15,
//                     ease: "easeInOut",
//                   },

//                   opacity: {
//                     duration: 0.4,
//                     delay: 0.25,
//                   },
//                 }}
//               />

//               {/* ================= TRAVELLING LIGHT ================= */}
//               <motion.path
//                 d={roadPath}
//                 pathLength="1"
//                 fill="none"
//                 stroke="#FFD375"
//                 strokeWidth="8"
//                 strokeLinecap="round"
//                 strokeDasharray="0.025 0.975"
//                 filter="url(#timelineGlow)"
//                 animate={{
//                   strokeDashoffset: [1, -1],
//                 }}
//                 transition={{
//                   duration: 5.5,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//               />
//             </svg>
//           </div>

//           {/* =====================================================
//               DESKTOP STEPS
//           ====================================================== */}
//           {steps.map((step, index) => {
//             const isTop = index % 2 === 0;

//             return (
//               <motion.div
//                 key={step.number}
//                 initial={{
//                   opacity: 0,
//                   scale: 0.75,
//                   y: isTop ? -15 : 15,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   scale: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                   amount: 0.25,
//                 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: 0.65 + index * 0.4,
//                   type: "spring",
//                   stiffness: 100,
//                 }}
//                 style={{
//                   left: step.desktop.left,
//                   top: step.desktop.top,
//                 }}
//                 className="
//                   absolute
//                   z-20
//                   w-[170px]
//                   -translate-x-1/2

//                   lg:w-[190px]
//                   xl:w-[210px]
//                 "
//               >
//                 <div
//                   className={`
//                     flex
//                     flex-col
//                     items-center

//                     ${isTop ? "text-center" : "text-center"}
//                   `}
//                 >
//                   {/* ================= MARKER ================= */}
//                   <motion.div
//                     whileHover={{
//                       scale: 1.1,
//                     }}
//                     className="
//                       group
//                       relative
//                       cursor-pointer
//                     "
//                   >
//                     {/* Pulse */}
//                     <motion.span
//                       animate={{
//                         scale: [1, 1.3, 1],
//                         opacity: [0.28, 0, 0.28],
//                       }}
//                       transition={{
//                         duration: 2.2,
//                         repeat: Infinity,
//                         delay: index * 0.2,
//                       }}
//                       className="
//                         absolute
//                         inset-0
//                         rounded-full
//                       "
//                       style={{
//                         backgroundColor: step.accent,
//                       }}
//                     />

//                     {/* Circle */}
//                     <div
//                       className="
//                         relative
//                         flex
//                         h-[70px]
//                         w-[70px]
//                         items-center
//                         justify-center
//                         rounded-full
//                         border-[5px]
//                         bg-[#03111F]
//                         text-[25px]
//                         font-bold
//                         text-white
//                         shadow-[0_8px_25px_rgba(0,0,0,0.35)]

//                         xl:h-[78px]
//                         xl:w-[78px]
//                         xl:text-[28px]
//                       "
//                       style={{
//                         borderColor: step.accent,
//                         boxShadow: `0 0 22px ${step.accent}40`,
//                       }}
//                     >
//                       {step.number}
//                     </div>
//                   </motion.div>

//                   {/* ================= CONTENT ================= */}
//                   <motion.div
//                     initial={{
//                       opacity: 0,
//                       y: 10,
//                     }}
//                     whileInView={{
//                       opacity: 1,
//                       y: 0,
//                     }}
//                     viewport={{
//                       once: true,
//                     }}
//                     transition={{
//                       duration: 0.45,
//                       delay: 0.82 + index * 0.4,
//                     }}
//                     className="mt-3"
//                   >
//                     <h3
//                       className="
//                         text-[17px]
//                         font-bold
//                         uppercase
//                         tracking-[0.02em]
//                         text-[#F4F5F6]

//                         lg:text-[19px]
//                         xl:text-[21px]
//                       "
//                     >
//                       {step.title}
//                     </h3>

//                     <p
//                       className="
//                         mt-2
//                         text-[12px]
//                         leading-[1.55]
//                         text-[#C4CCD2]

//                         lg:text-[13px]
//                         xl:text-[14px]
//                       "
//                     >
//                       {step.text}
//                     </p>
//                   </motion.div>
                  
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* =====================================================
//             MOBILE VERTICAL TIMELINE
//         ====================================================== */}
//         <div
//           className="
//             relative
//             overflow-hidden
//             rounded-[14px]
//             border
//             border-[#725021]/70
//             bg-[#03111F]
//             px-4
//             py-8

//             md:hidden
//           "
//         >
//           {/* ================= VERTICAL ROAD ================= */}
//           <div
//             className="
//               absolute
//               bottom-[40px]
//               left-[40px]
//               top-[40px]
//               w-[48px]
//               rounded-full
//               border-x-[3px]
//               border-[#805A25]
//               bg-[#02070C]
//             "
//           >
//             {/* Road draw */}
//             <motion.div
//               initial={{
//                 height: "0%",
//               }}
//               whileInView={{
//                 height: "100%",
//               }}
//               viewport={{
//                 once: true,
//                 amount: 0.1,
//               }}
//               transition={{
//                 duration: 3.2,
//                 ease: "easeInOut",
//               }}
//               className="
//                 absolute
//                 left-1/2
//                 top-0
//                 w-[4px]
//                 -translate-x-1/2
//                 bg-[repeating-linear-gradient(to_bottom,#ffffff_0px,#ffffff_13px,transparent_13px,transparent_25px)]
//               "
//             />

//             {/* Travelling golden light */}
//             <motion.span
//               animate={{
//                 top: ["0%", "97%"],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               className="
//                 absolute
//                 left-1/2
//                 h-[16px]
//                 w-[16px]
//                 -translate-x-1/2
//                 rounded-full
//                 bg-[#FFD375]
//                 shadow-[0_0_18px_rgba(255,211,117,0.9)]
//               "
//             />
//           </div>

//           {/* ================= MOBILE STEPS ================= */}
//           <div className="space-y-10">
//             {steps.map((step, index) => (
//               <motion.div
//                 key={step.number}
//                 initial={{
//                   opacity: 0,
//                   x: 25,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   x: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                   amount: 0.4,
//                 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.08,
//                 }}
//                 className="
//                   relative
//                   flex
//                   min-h-[170px]
//                   items-center
//                   pl-[110px]
//                 "
//               >
//                 {/* MARKER */}
//                 <motion.div
//                   initial={{
//                     scale: 0.5,
//                   }}
//                   whileInView={{
//                     scale: 1,
//                   }}
//                   viewport={{
//                     once: true,
//                   }}
//                   transition={{
//                     duration: 0.45,
//                     delay: 0.15 + index * 0.08,
//                   }}
//                   className="
//                     absolute
//                     left-[10px]
//                     top-1/2
//                     z-20
//                     flex
//                     h-[70px]
//                     w-[70px]
//                     -translate-y-1/2
//                     items-center
//                     justify-center
//                     rounded-full
//                     border-[4px]
//                     bg-[#03111F]
//                     text-[24px]
//                     font-bold
//                     text-white
//                   "
//                   style={{
//                     borderColor: step.accent,
//                     boxShadow: `0 0 20px ${step.accent}35`,
//                   }}
//                 >
//                   {step.number}
//                 </motion.div>

//                 {/* CONTENT */}
//                 <div>
//                   <p
//                     className="
//                       text-[12px]
//                       font-semibold
//                       uppercase
//                       tracking-[0.14em]
//                     "
//                     style={{
//                       color: step.accent,
//                     }}
//                   >
//                     Step {step.number}
//                   </p>

//                   <h3
//                     className="
//                       mt-1
//                       text-[20px]
//                       font-bold
//                       uppercase
//                       text-[#F4F5F6]
//                     "
//                   >
//                     {step.title}
//                   </h3>

//                   <p
//                     className="
//                       mt-2
//                       text-[14px]
//                       leading-[1.7]
//                       text-[#C7CFD5]
//                     "
//                   >
//                     {step.text}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
