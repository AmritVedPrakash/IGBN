import { BarChart3, Brain, Megaphone, PenTool, Rocket } from "lucide-react";

const steps = [
  ["01", "Discover", "Understand your business, goals and target audience.", Brain],
  ["02", "Strategize", "Create a customized marketing and PR strategy.", PenTool],
  ["03", "Execute", "Implement campaigns with creativity and precision.", Rocket],
  ["04", "Amplify", "Use the right channels to maximize visibility and engagement.", Megaphone],
  ["05", "Analyze", "Track performance, analyze data and optimize for better results.", BarChart3],
];

export default function MarketingPRProcess() {
  return (
    <div className="rounded-xl border border-[#725021]/70 bg-[#03111F] p-4 sm:p-5">
      <div className="mb-5 flex items-center gap-2 border-b border-[#D69A2B]/60 pb-3">
        <span className="h-3 w-1 rounded-full bg-[#F0C168]" />
        <h2 className="text-xl font-bold uppercase text-white">
          Our Proven Process
        </h2>
      </div>
      <div className="space-y-2.5">
        {steps.map(([number, title, text, Icon]) => (
          <div
            key={number}
            className="grid items-center gap-3 rounded-lg border border-[#725021]/70 bg-[#020D18] p-3 sm:grid-cols-[40px_110px_1fr_28px]"
          >
            <span className="text-[15px] font-black text-[#F0C168]">
              {number}
            </span>
            <h3 className="text-[15px] font-bold uppercase text-white">
              {title}
            </h3>
            <p className="text-[15px] leading-5 text-[#C7D1D9]">{text}</p>
            <Icon className="hidden text-[#F0C168] sm:block" size={23} />
          </div>
        ))}
      </div>
    </div>
  );
}
