import { Check, LucideIcon } from "lucide-react";

interface Props {
  audience: string;
  title: string;
  color: string;
  icon: LucideIcon;
  items: string[];
}

export const BenefitCard = (info: Props) => {
  const { audience, title, color, icon: Icon, items } = info;

  return (
    <div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-[0_12px_40px_rgba(25,28,30,0.05)] sm:p-10">
      <div>
        <div className={`mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold ${color === 'blue' ? 'bg-[#dae2ff] text-[#001848]' : 'bg-[#b1f0ce] text-[#002114]'}`}>
          <Icon size={15} />
          {audience}
        </div>
        <h3 className="mb-8 font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
          {title}
        </h3>
        <ul className="flex flex-col gap-6">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-4">
              <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${color === 'blue' ? 'bg-[#dae2ff]/60 text-primary' : 'bg-[#b1f0ce]/60 text-[#2c694e]'}`}>
                <Check size={18} />
              </div>
              <span className="text-base leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>);
}