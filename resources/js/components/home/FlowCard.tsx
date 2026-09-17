import { FlowItem } from "./Flow";

interface Props {
  item: FlowItem;
}

export const FlowCard = ({ item }: Props) => {

  const { number, title, copy, color, icon: Icon } = item;

  return (
    <div className="rounded-2xl bg-white p-8 md:p-4 lg:p-8 shadow-sm transition hover:-translate-y-1">
      <div className="mb-8 flex items-center justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl 
          ${color === 'blue' ? 'bg-[#dae2ff] text-primary' : color === 'green' ? 'bg-[#b1f0ce] text-[#2c694e]' : 'bg-[#ffdbc9] text-[#9a4500]'}`}>
          <Icon size={25} />
        </div>
        <span className="font-display text-3xl font-extrabold text-gray-300">
          {number}
        </span>
      </div>
      <h3 className="mb-3 font-display text-xl font-bold">
        {title}
      </h3>
      <p className="mb-6 text-sm leading-relaxed text-gray-500">
        {copy}
      </p>
    </div>
  )
}