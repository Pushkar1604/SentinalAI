type Props = {
  title: string;
  value: string;
};

export default function KPICard({
  title,
  value,
}: Props) {
  return (
    <div className="
bg-gradient-to-br
from-slate-900
to-slate-800
border
border-cyan-500/20
rounded-2xl
p-6
shadow-lg
shadow-cyan-500/10  
hover:scale-105
transition-all
duration-300
">
      <h2 className="text-slate-400">{title}</h2>

      <p className="text-4xl font-bold mt-3">
        {value}
      </p>
    </div>
  );
}